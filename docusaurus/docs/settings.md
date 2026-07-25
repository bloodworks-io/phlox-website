import ThemedShot from "@site/src/components/ThemedShot";
import settingsLight from "@site/static/img/settings-overview-light.png";
import settingsDark from "@site/static/img/settings-overview-dark.png";
import modelsLight from "@site/static/img/local-model-manager-light.png";
import modelsDark from "@site/static/img/local-model-manager-dark.png";

# Settings

Phlox is configured almost entirely through the in-app **Settings** page. Configuration lives in the encrypted database (not in files), so changes persist with your data. Most settings autosave.

Settings is divided into three top-level panels: **User Settings**, **Model Settings**, and **Prompt Settings**.

{/* Screenshot: capture 1600x1000, light + dark; files: settings-overview-{light,dark}.png */}
<ThemedShot light={settingsLight} dark={settingsDark} alt="Settings page" width={500} />

## User Settings

| Tab | What you configure |
|---|---|
| **General** | Your **name** and **specialty** (provided as context to the LLM and used for specialty-aware suggestions); your **default note template** and **default letter template**. |
| **Note Templates** | Create, edit, and delete [note templates](/features/templates). |
| **Letter Templates** | Manage [correspondence](/features/correspondence) templates, including the protected "Dictation" template. |
| **Quick Chat** | Configure up to three quick-chat buttons (label + prompt) shown in the chat surfaces. |
| **Advanced** | `Store Original PDFs` (keep uploaded PDF binaries) and `Require patient consent for ambient scribing` (see [Patients](/features/patients#ambient-scribe-consent)). |

## Model Settings

The Model Settings panel behaves differently depending on whether you run a **desktop (Tauri)** build or a **Docker/web** build.

### Local mode (desktop only)

On desktop you can run inference locally. The panel toggles between **Local** and **Remote** inference.

- **Models tab** — download and manage the bundled models: the primary **AI model** (with smart recommendations based on your RAM/cores, plus an estimated processing time), the **transcription** model (Omi Med STT v1), and the optional **embeddings** model (Qwen3-Embedding) used for RAG. A system-specs banner shows your available RAM and CPU cores, and a "Reset All Models" action is available.

{/* Screenshot: capture 1600x1000, light + dark; files: local-model-manager-{light,dark}.png */}
<ThemedShot light={modelsLight} dark={modelsDark} alt="Local Model Manager" width={500} />
- **Tools tab** — see [Tools](#tools) below.

### Remote mode

When using external endpoints (required for Docker; optional on desktop):

- **Whisper tab** — transcription API base URL, model name, and API key. A live status indicator shows endpoint reachability.
- **LLM tab** — OpenAI-compatible / Ollama base URL, API key, **primary model**, **secondary model**, the [document/image processing mode](#document-and-image-processing-mode), and a [vision capability probe](#vision-capability-probe).
- **RAG tab** — choose the embedding model. Changing it triggers a re-embedding pass across all document collections, with a progress indicator.
- **Tools tab** — see [Tools](#tools) below.

#### Document and Image Processing Mode

Controls how uploaded PDFs and images are processed for notes, demographics, and document chat:

- **Auto (default)** — probes the model for vision support and uses vision if available, falling back to text extraction then OCR.
- **Vision only** — always sends page images to the vision model. Requires a vision-capable model.
- **OCR only** — text extraction (pypdf) with Tesseract OCR fallback. Works with any model but may miss content in scanned documents or images.

> In desktop (local) builds, vision is enabled automatically when a multimodal projector (`mmproj`) file is present alongside the model.

#### Vision Capability Probe

The **Test Vision Support** button sends a tiny test image to the configured model and reports whether it is vision-capable. The result is cached per provider/URL/model and shown as a badge (Vision capable / Not vision-capable / Unknown, with source and timestamp).

## Tools

The Tools tab controls the [agentic tool-calling](/features/ai#agentic-tool-calling) system.

### Built-in Tools

Toggle each built-in tool on or off. Tools that call external services are flagged and ship **off by default**:

- Transcript Search, Literature Search, Previous Encounters, Patient Search, Search by Condition, Patient Note Search, Patient Jobs, Outstanding Jobs, Job Completion, Note Creation, Todo List, PDF form tools
- ⚠️ **PubMed Search** and **Wikipedia Search** — disabled by default (external; may transmit PHI)

### Tool Servers (MCP)

Connect external tool servers via the **Model Context Protocol** (SSE transport):

1. Click **Add Server** and provide a name and HTTP URL.
2. Optionally enable **Allow sensitive data (PHI)** per server. When off (the default), Phlox strips identifying information from arguments before calling the server. See [Security → Tool & MCP data safety](/security#tool--mcp-data-safety).
3. **Test connection** to verify reachability and discover the server's tools.
4. Toggle the server on/off as needed.

Discovered MCP tools appear alongside the built-in tools in chat.

## Prompt Settings

Power users can customise the system prompts Phlox sends to the LLM:

- **Refinement**, **Summary**, **Chat**, **Letter** — editable system-prompt text areas, each with a reset-to-default.
- **Advanced** — `num_ctx` for the primary and secondary models, and the letter `temperature`.

> A warning in this panel reminds you that the defaults are carefully tuned. Change them only if you understand the impact on output quality.
