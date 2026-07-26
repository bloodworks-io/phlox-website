---
slug: /
title: Overview
sidebar_label: Overview
---

import ThemedShot from "@site/src/components/ThemedShot";
import heroLight from "@site/static/img/encounter-workspace-light.webp";
import heroDark from "@site/static/img/encounter-workspace-dark.webp";

# Phlox Overview

Welcome to the Phlox documentation. Phlox is a free, open-source, **local-first AI scribe** with a built-in patient management system and agentic AI capabilities. It is designed as a local alternative to SaaS medical scribes that you can run on your own hardware.

> **Before using Phlox, read [Limitations & Warnings](/limitations).** Phlox is experimental, is **not** a certified medical device, and is **not** suitable for production clinical use as provided.

{/* Screenshot: capture 1600x1000, light + dark; files: encounter-workspace-{light,dark}.webp */}
<ThemedShot light={heroLight} dark={heroDark} alt="Phlox encounter workspace" width={720} />

## What is Phlox?

Phlox is a local-first clinical tool with the following capabilities:

- **Patient Profiles & Encounters** — stable demographics per patient, with individual encounter notes, transcripts, and tasks grouped by UR number. See [Patients](/features/patients).
- **Ambient Medical Transcription** — record or upload audio; Phlox transcribes it and generates a structured note from your chosen template. Uses Whisper-compatible endpoints or the bundled parakeet.cpp engine. See [Transcription](/features/transcription).
- **Adaptive Refinement** — Phlox learns from the edits you make to generated notes and adapts future output to your style. See [AI Features → Adaptive Refinement](/features/ai#adaptive-refinement).
- **Flexible Templates** — customisable note and letter templates with per-field prompts, formatting rules, and persistence. Generate templates automatically from an example note. See [Templates](/features/templates).
- **Task Manager** — action items are extracted from the Plan section of notes and tracked per patient; plus a separate workspace to-do list. See [Task Manager](/features/task-manager).
- **Correspondence** — one-click generation of patient letters from a note or from dictation, with interactive refinement. See [Correspondence](/features/correspondence).
- **PDF Form Filling** — draw fields on a PDF template (or auto-detect them with vision) and have the AI fill them from encounter data. See [PDF Forms](/features/pdf-forms).
- **Agentic AI Assistant** — chat with built-in tools (note/transcript/literature search, task management, form filling, and more), interleaved thinking, inline citations, and downloadable artifacts. See [AI Features](/features/ai).
- **Knowledge Base** — build a local, searchable corpus of reference literature (guidelines, journals) and have chat answer with inline citations. See [Knowledge Base](/features/knowledge-base).
- **Agent Dashboard** — a chat-driven hub for clinic management with a to-do panel, specialty-aware suggestions, and document upload. See [Agent Dashboard](/features/dashboard).
- **MCP Server Support** — connect external tool servers via the Model Context Protocol (SSE transport), with optional PHI filtering. See [Settings → Tools](/settings#tool-servers-mcp).
- **Vision-Enhanced Document Processing** — hybrid pipeline that uses vision models directly when available, falling back to text extraction and OCR.
- **100% Local & Private** — runs entirely on your machine; all data stays local. Optional local LLM (bundled llama.cpp), transcription (bundled parakeet.cpp), and embedding (bundled Qwen3-Embedding) servers.

## Design

- Runs locally on standard hardware (GPU or Apple Silicon strongly recommended).
- Customisable templates, prompts, and LLM settings.
- Clinical data is encrypted at rest with SQLCipher (reference literature lives in a separate file — see [Security](/security#encryption-at-rest)).
- Extensible via MCP server integration for custom tools and agentic workflows.

## Philosophy

The core idea is to use LLMs to automate administrative tasks by:

- Surfacing relevant information from guidelines and journals
- Automating documentation tasks
- Organising and structuring clinical notes
- Providing an agentic chat interface that can take actions on your behalf (search notes, manage tasks, create encounters, fill forms)

## Important Caveats

- LLMs can hallucinate plausible but incorrect information.
- Verification against primary medical sources is mandatory.
- Clinical judgment remains supreme; Phlox is an **administrative** aid, not a clinical decision-support tool.
- Models can misinterpret or omit important context.
- External MCP servers and external tools (PubMed, Wikipedia) may receive PHI depending on configuration — use the sensitive-data filtering toggle. See [Security](/security#tool--mcp-data-safety).

This is an experimental administrative tool designed to assist with documentation and reference, not to provide clinical decision support.
