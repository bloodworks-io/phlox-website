# Third-Party Models, Runtimes, and Licenses

Phlox bundles inference runtimes and downloads a number of third-party models whose licenses require attribution. Models are **not bundled in the app artifacts** — they are downloaded on demand from HuggingFace on first use.

## Large Language Models

### Qwen3.5 (0.8B / 2B / 4B / 9B / 27B / 35B-A3B — Q4_K_M GGUF)

- **Creator:** Qwen Team at Alibaba Cloud; GGUF quantizations by [Unsloth](https://huggingface.co/unsloth).
- **Source:** https://huggingface.co/unsloth/Qwen3.5-*-GGUF
- **Quantization:** Q4_K_M.
- **Vision projector:** each download also fetches an `mmproj-BF16.gguf` multimodal projector from the same repo, which enables vision when loaded into the LLM server.
- **License:** [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).

### Qwen3-Embedding-0.6B (Q8_0 GGUF)

- **Creator:** Qwen Team at Alibaba Cloud.
- **Source:** https://huggingface.co/Qwen/Qwen3-Embedding-0.6B-GGUF
- **License:** [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).
- Used by the embedding sidecar to power RAG.

### Omi Med STT v1 (q8_0 GGUF)

- **Creator:** omi-health.
- **Source:** https://huggingface.co/omi-health/omi-med-stt-v1-gguf
- **License:** [Creative Commons Attribution 4.0 International (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/).
- **Derivative of:** [nvidia/parakeet-tdt-0.6b-v2](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2) (CC-BY-4.0).
- Used by the bundled transcription engine.

## Bundled Inference Runtimes (desktop)

### parakeet.cpp (patched)

- **Authors:** Ettore Di Giacinto (@mudler), Richard Palethorpe; the [LocalAI](https://github.com/mudler/LocalAI) team.
- **Source:** https://github.com/mudler/parakeet.cpp
- **License:** [MIT](https://github.com/mudler/parakeet.cpp/blob/master/LICENSE).
- The bundled `phlox-whisper-server` is **parakeet.cpp with an in-house patch** (`parakeet-cpp-omi-adapter.patch`) that adds the Omi Med STT adapter, derived from the MIT-licensed [omi-med-stt-runtime](https://github.com/omi-health/omi-med-stt-runtime) reference.

### llama.cpp

- **Source:** https://github.com/ggml-org/llama.cpp
- **License:** [MIT](https://github.com/ggml-org/llama.cpp/blob/master/LICENSE).
- Phlox runs two llama.cpp server processes on desktop: one for the LLM (with optional vision projector) and one in `--embedding` mode for embeddings.

## System Components

### SQLCipher

- **Source:** https://github.com/sqlcipher/sqlcipher
- **License:** [BSD-3-Clause with OpenSSL Exception](https://github.com/sqlcipher/sqlcipher/blob/master/LICENSE).
- Provides encryption at rest for the SQLite database (both desktop and Docker).

### Tesseract OCR (Docker only)

- **Source:** https://github.com/tesseract-ocr/tesseract
- **License:** [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).
- **Docker-only:** Tesseract is installed in the Docker image (via `apt`, used through `pytesseract`). The **desktop (macOS) and Flatpak (Linux) builds do not bundle Tesseract** — the OCR fallback path is unavailable there, and document processing relies on text-layer extraction or vision instead.

## Notable Dependencies

The following Apache-2.0 / copyleft dependencies are used by Phlox. Each retains its original license and copyright notices.

**Python:**
- [openai](https://github.com/openai/openai-python) — Apache-2.0
- [mcp](https://github.com/modelcontextprotocol/python-sdk) — MIT
- [pytesseract](https://github.com/madmaze/pytesseract) — Apache-2.0 (Docker only)
- [pypdf](https://github.com/py-pdf/pypdf) — BSD-3-Clause

**JavaScript:**
- [pdfjs-dist](https://github.com/mozilla/pdf.js) — Apache-2.0
- [@tauri-apps/api](https://github.com/tauri-apps/tauri), [@tauri-apps/plugin-http](https://github.com/tauri-apps/plugins-workspace) — Apache-2.0 / MIT

The complete list of Python dependencies with resolved licenses is in [`server/uv.lock`](https://github.com/bloodworks-io/phlox/blob/main/server/uv.lock). The complete list of JavaScript dependencies is in [`package-lock.json`](https://github.com/bloodworks-io/phlox/blob/main/package-lock.json). All third-party packages retain their original licenses and copyright notices.
