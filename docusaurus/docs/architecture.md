import architectureImg from '@site/static/img/architecture.png';

# Architecture Overview
<p align="center">
<img src={architectureImg} width="500px" alt="Phlox Architecture"/>
</p>

Phlox is a local-first application: a React frontend, a FastAPI backend, a SQLCipher-encrypted SQLite database, and (on desktop) bundled inference engines. The frontend, backend, and inference processes all run on the user's machine.

## Technical Stack

- **Frontend:** [React](https://react.dev/) + [Chakra UI](https://github.com/chakra-ui/chakra-ui), built with Vite.
- **Backend:** [FastAPI](https://github.com/fastapi/fastapi) (Python).
- **Database:** [SQLite](https://www.sqlite.org/), encrypted at rest with [SQLCipher](https://github.com/sqlcipher/sqlcipher).
- **Vector DB:** [sqlite-vec](https://github.com/asg017/sqlite-vec) (a separate `documents.sqlite` file).
- **Desktop Wrapper:** [Tauri](https://github.com/tauri-apps/tauri) (v2).
- **LLM Backend:** any OpenAI-compatible endpoint (incl. Ollama), or the bundled [llama.cpp](https://github.com/ggml-org/llama.cpp) server.
- **Transcription:** any OpenAI Whisper-compatible endpoint, or the bundled [parakeet.cpp](https://github.com/mudler/parakeet.cpp) server.
- **Embeddings:** [Qwen3-Embedding](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B-GGUF), served by a second bundled llama.cpp process (desktop).

## Components

### Frontend (React / Chakra UI)
- User interface and interactions.
- API calls to the backend (cached with an SWR layer).
- Audio recording and playback (WebAudio `AudioContext`).
- PDF processing and vision rendering (client-side via PDF.js).
- Client-side PDF form filling from chat artifacts.

### Backend (FastAPI)
- REST API endpoints.
- Core application logic.
- Integrates with the LLM, transcription, and embedding endpoints (bundled or external), plus sqlite-vec.
- Database operations.
- MCP server management and tool routing.
- Middleware: security headers, rate limiting, proxy auth, audit logging, and (desktop) a local-token guard.

### Database (SQLite + SQLCipher)
- Local file-based storage, encrypted at rest. This is `phlox_database.sqlite`.
- Encryption key supplied two ways:
  - **Docker:** `DB_ENCRYPTION_KEY` env var (or Podman secret at `/run/secrets/db_encryption_key`).
  - **Desktop:** user passphrase, hex-encoded by Tauri and derived inside SQLCipher with PBKDF2-HMAC-SHA512. The passphrase is **not** cached in the OS keychain — it must be re-entered every launch.
- Runs in **WAL mode**; the `-wal`/`-shm` sidecar files are backed up before migrations.
- Stores: patient profiles, encounters, clinical notes, templates, letter templates, todos, config, prompts, options, user settings, MCP servers, and the audit log.

> **Separate literature database:** reference material you upload (journal articles, guidelines) and its vector embeddings live in a **second, unencrypted `documents.sqlite`** file, not the clinical database. It is intended for **non-PHI** material — keep PHI out of document collections.

### LLM
- Local inference via the bundled **llama.cpp** server (desktop), or remote OpenAI-compatible/Ollama endpoints.
- On desktop, when a multimodal projector (`mmproj`) file is present it is loaded into the LLM server to enable vision.
- Handles: note generation, summaries, chat & tool-calling, RAG queries, reasoning/citations, and document/vision processing.

### Embeddings (desktop)
- A **second bundled llama.cpp process** runs in `--embedding` mode to serve the Qwen3-Embedding model for RAG. This sidecar is what powers literature/knowledge-base search.

### Tool System
- **Built-in tools** registered in the tool registry (16 tools — see [AI Features](/features/ai#agentic-tool-calling) for the full list). Tools that call external services (PubMed, Wikipedia) ship disabled by default.
- **MCP tools** loaded dynamically from external MCP servers over **SSE** transport.
- The tool executor dispatches calls and handles streaming vs non-streaming responses.
- Supports interleaved thinking / tool-calling (up to 10 rounds) for complex multi-step queries.

### Transcription
- Compatible with any Whisper endpoint, or uses the **bundled parakeet.cpp** engine (Omi Med STT v1) on desktop.
- Converts audio to text; configurable service selection in Settings.

#### Transcription Flow
Note generation breaks the problem into stages so smaller, locally-hosted models stay coherent:

1. **Audio Recording/Upload** — the browser records audio (WebAudio) or accepts a file upload; audio is sent to the backend as WAV.
2. **Initial Transcription** — the configured Whisper endpoint (or bundled parakeet.cpp) returns raw text with timestamps; segments are combined into a single transcript.
3. **Template Processing (LLM)** — the transcript is broken into template fields to manage context length. Each field is processed concurrently to:
   1. Extract key points as structured JSON,
   2. Perform content refinement,
   3. Apply formatting.
   This staged approach helps smaller models by chunking long transcripts, constraining outputs to JSON, allowing multiple focused refinement passes, and reducing hallucination risk.
4. **Final Assembly** — processed fields are combined into the complete note; patient context is merged; formatting rules are applied; results are returned to the frontend.

Example flow for a single field:
```txt
Audio → Raw Transcription → JSON Extraction → Refinement (style + adaptive rules) → Final Output
```

### RAG (sqlite-vec)
- Vector search over your uploaded reference literature, kept in a **separate `documents.sqlite`** file (not the encrypted clinical database). Intended for **non-PHI** material such as journal articles and guidelines.
- Requires a tool-calling model and (on desktop) the embedding model to be available.
- Enables context-aware literature and knowledge-base queries.
- Stores document embeddings generated by the embedding sidecar (desktop) or an external embedding endpoint.

### Document / Vision Processing
- Hybrid pipeline with automatic capability probing.
- When the configured model supports vision, PDFs and images are sent directly for visual analysis.
- Falls back to text extraction (pypdf) with OCR (Tesseract, Docker builds only) when vision is unavailable.
- Processing mode configurable per deployment: **Auto** (default), **Vision**, or **OCR** — see [Settings](/settings#document-and-image-processing-mode).

### Audit Logging
- Every API request is recorded (method, path, status, actor, client IP, duration) — never request/response bodies. See [Security](/security#audit-logging).

## Reliability & Performance Notes
- **SWR cache layer** on the frontend reduces redundant API calls.
- **Parent-PID watchdog:** in desktop builds the server self-terminates if its parent Tauri process dies, so there are no orphaned server processes.
- **Output quality:** smaller models can hallucinate or lose coherence with long outputs. Chunking and JSON extraction help maintain structure and accuracy within resource constraints.
- **Refinement passes:** multiple focused passes produce better results than single large outputs with smaller models. Adaptive refinement makes these passes more effective by incorporating your personal editing preferences.

## Data Persistence
- SQLite database and vector data are persisted on the host.
- **Docker:** volume mount `./data:/usr/src/app/data`.
- **Desktop (macOS):** `~/Library/Application Support/Phlox/`.
- Data is preserved across restarts.

> See the [README](https://github.com/bloodworks-io/phlox#architecture) for a side-by-side diagram comparing this pipeline against single-shot generation, including the adaptive-refinement feedback loop.
