# Setup and Installation

Phlox can be run as a **desktop application** (macOS or Linux) or as a **Docker/Podman container**. Pick the option that matches your hardware and use case.

- The **desktop app** bundles its own LLM, transcription, and embedding engines and downloads models on demand — best for local, private use on a capable machine.
- The **Docker image** contains no inference capability; you point it at external OpenAI-compatible endpoints for the LLM and transcription — best for servers or when you already run your own inference stack.

## Prerequisites

### Hardware

- **For best performance:** a GPU (CUDA or ROCm) or an **Apple Silicon** Mac is strongly recommended.
- **Without GPU or Apple silicon:** the system will run but will be unusably slow, especially with larger models.
- **RAM (assuming Q4 quantized models):**
  - 8 GB minimum for smaller models
  - 16 GB+ recommended for general use
  - 32 GB+ for large models (e.g. Qwen3.5-27B)
  - Additional memory is required for the transcription and embedding models.

### LLM endpoint

Phlox needs an LLM that **supports tool calling**.

- **Ollama (easiest on the desktop app):** [install Ollama](https://ollama.com/) locally.
  - Standard hardware: `qwen3.5:8b`
  - Performance-optimised: a larger Qwen3.5 size or `llama3.3:70b`.
- **OpenAI-compatible servers (self-hosted):**
  - [vLLM](https://github.com/vllm-project/vllm) — high throughput (supports tensor parallelism).
  - [llama.cpp](https://github.com/ggml-org/llama.cpp) — C/C++ inference.
  - [sglang](https://github.com/sgl-project/sglang) — structured generation.

> **For best privacy:** use the desktop app's bundled engine, or a self-hosted server.
>
> **Quantization:** Q4_K_M quantisation significantly reduces memory usage and improves token-generation speed without significantly degrading output quality. Aggressive KV-cache quantization (smaller than Q8) is **not** recommended for heavily context-dependent tasks like Phlox's.

### Transcription endpoint

Phlox needs a Whisper-compatible transcription service. On the **desktop app**, the bundled parakeet.cpp engine (Omi Med STT v1) is used by default — no external service required. For Docker, or to use a different engine:

- **[Parakeet Diarized](https://github.com/jfgonsalves/parakeet-diarized)** — NVIDIA Parakeet-TDT 0.6B v2 + Pyannote diarization. Diarization improves comprehension for downstream tasks but has relatively steep VRAM requirements. See [Parakeet-Diarized setup](#parakeet-diarized-setup).
- **[Speaches](https://github.com/speaches-ai/speaches)** — lightweight Dockerized Whisper server.

> Note: you can't use Docker to run Phlox itself on an M-Series Mac; on Apple Silicon use the desktop app.

## Option 1 — Desktop App

Pre-built binaries are available from [GitHub Releases](https://github.com/bloodworks-io/phlox/releases):

- **macOS (Apple Silicon)** — `.dmg` / `.app` build.
- **Linux** — Flatpak (Vulkan).

The desktop app comes bundled with the LLM, transcription, and embedding inference engines. **Models are downloaded from within the application** on first run (or from Settings → Model Settings → Models).

### First run

1. Launch Phlox.
2. Set a **database passphrase** (minimum 12 characters). This encrypts your database — you will need to re-enter it on every launch (Phlox does not cache it in the keychain, by design).
3. The splash wizard guides you through: **About You** (name & specialty), **Templates**, and **AI Models** (download the models you want).

:::note[Screenshot needed]
_The splash/onboarding wizard — the **AI Models** step downloading a model._
:::

4. Once models are downloaded, Phlox is ready. You can switch between **Local** and **Remote** inference in [Settings → Model Settings](/settings).

## Option 2 — Docker / Podman

A pre-built image is published to the GitHub Container Registry:

```bash
docker pull ghcr.io/bloodworks-io/phlox:latest
```

Minimal `docker-compose.yml`:

```yaml
services:
  phlox:
    image: ghcr.io/bloodworks-io/phlox:latest
    container_name: phlox
    ports:
      - "5000:5000"  # Use "127.0.0.1:5000:5000" if not behind a reverse proxy
    environment:
      - DB_ENCRYPTION_KEY=          # Required: generate a strong random key
      - ALLOWED_ORIGINS=*           # Or your origin, e.g. https://phlox.example.com
      # Optional — proxy auth + rate limiting (see Security)
      # - PROXY_AUTH_ENABLED=true
      # - PROXY_AUTH_USER_HEADER=X-Forwarded-User
      # - PROXY_AUTH_ALLOWED_USERS=user1,user2
      # - RATE_LIMIT_ENABLED=true
    volumes:
      - ./data:/usr/src/app/data    # Persistent data (database, vectors)
      - ./logs:/usr/src/app/logs    # Optional: persist logs
```

Then `docker compose up -d` and open [http://localhost:5000](http://localhost:5000).

> The Docker image has **no inference or transcription capability built in**. You must point it at external OpenAI-compatible endpoints for both LLM and transcription in Settings.

### Configuration

Create a `.env` file (or set the environment directly). The variables Phlox reads:

| Variable | Default | Purpose |
|---|---|---|
| `DB_ENCRYPTION_KEY` | — | **Required** in Docker. SQLCipher passphrase. A Podman secret at `/run/secrets/db_encryption_key` is tried first. |
| `ALLOWED_ORIGINS` | `*` | CORS origins (comma-separated). `*` disables credentials. |
| `PORT` | `5000` | Port the server binds to (Docker mode). |
| `SERVER_HOST` | `0.0.0.0` | Bind host (Docker mode). |
| `LLM_EXTRA_BODY` | — | JSON string merged into every **non-streaming** LLM request, e.g. `{"chat_template_kwargs":{"thinking":true}}`. Does not apply to streaming requests. |
| `PROXY_AUTH_ENABLED` | `false` | Enable reverse-proxy header authentication. |
| `PROXY_AUTH_USER_HEADER` | `X-Forwarded-User` | Header containing the authenticated username. |
| `PROXY_AUTH_ALLOWED_USERS` | _(empty = any)_ | Comma-separated allow-list. |
| `RATE_LIMIT_ENABLED` | `false` | Enable per-path rate limiting. |
| `RATE_LIMIT_DESKTOP_MULTIPLIER` | `3` | Multiplier applied to limits outside Docker. |
| `PHLOX_DEMO_MODE` | `false` | Seed demo data on desktop startup. |
| `PHLOX_PARENT_PID` | — | Desktop only: server self-terminates if this parent PID dies. |

> **About `TZ`:** the compose files set `TZ`, but Phlox itself does not read it — it is a standard container environment variable that the OS may pick up implicitly. Set it for correct timestamps in logs, but don't expect it to drive any Phlox-specific behaviour.

### Critical security warning

⚠️ **The default `docker-compose.yml` publishes port 5000 on all host interfaces.** To restrict to localhost, change the port mapping to `"127.0.0.1:5000:5000"`.

**If exposed to the internet without protection:**
- Anyone can access your instance
- All data could be stolen

**Never expose Phlox to the open internet without a reverse proxy (Nginx/Caddy) or VPN.** For production behind a proxy, enable proxy authentication (see [Security](/security#authentication)).

### Parakeet-Diarized setup

```bash
# Install the Parakeet diarized server
git clone https://github.com/jfgonsalves/parakeet-diarized
cd parakeet-diarized
pip install -r requirements.txt

# Get a HuggingFace token (required for diarization)
# https://huggingface.co/settings/tokens

# Start the server
./run.sh --hf-token "your_hf_token" --port 8000
```

Then point Phlox's Whisper endpoint at it in [Settings → Model Settings → Whisper](/settings#remote-mode).

### Configuration tips

- Enable diarization in Phlox settings for speaker-aware transcripts.
- Use shorter audio segments (\<5 minutes) for best diarization accuracy.
- For multi-speaker clinics, diarization significantly improves note quality.

## Post-Installation

- **Data persistence:**
  - Docker: data lives in the `./data` volume (`/usr/src/app/data` inside the container).
  - Desktop (macOS): `~/Library/Application Support/Phlox/`.
- **HTTPS for browser recording:** browser-based audio recording needs a secure context. `localhost` is usually granted an exception for microphone access; for any other network access you need HTTPS (e.g. a reverse proxy with SSL termination such as Caddy or Nginx).

If you encounter problems, please open an issue on the [GitHub repository](https://github.com/bloodworks-io/phlox/issues).
