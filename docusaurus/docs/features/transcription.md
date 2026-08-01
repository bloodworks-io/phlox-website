import ThemedShot from "@site/src/components/ThemedShot";
import InlineIcon from "@site/src/components/InlineIcon";
import { FaComments, FaKeyboard } from "react-icons/fa";
import scribeLight from "@site/static/img/scribe-pillbox-light.webp";
import scribeDark from "@site/static/img/scribe-pillbox-dark.webp";
import documentsLight from "@site/static/img/documents-light.webp";
import documentsDark from "@site/static/img/documents-dark.webp";

# Medical Transcription

Phlox converts audio recordings into structured clinical notes. You can record ambient audio, dictate, or upload audio files; in each case the audio is transcribed and the transcript is turned into a note based on your selected [template](/features/templates).

## Scribing Modes

- <InlineIcon icon={FaComments} label="Ambient mode" /> **Ambient** — record the encounter; Phlox transcribes and generates the note.
- <InlineIcon icon={FaKeyboard} label="Dictate mode" /> **Dictate** — dictate content that the LLM formats into the note fields.

Toggle between modes in the scribe controls on the encounter workspace. You can also **drag and drop an audio file** directly onto the scribe pill box to transcribe it.

{/* Screenshot: capture 1200x500, light + dark; files: scribe-pillbox-{light,dark}.webp */}
<ThemedShot light={scribeLight} dark={scribeDark} alt="Scribe pill box" width={500} />

### Transcription engines

- **Desktop app:** uses the bundled **parakeet.cpp** engine (Omi Med STT v1) by default — no external service required. The default model is English-only; selecting a non-English [language](/features/language) offers a downloadable multilingual Parakeet model (25 European languages).
- **Docker / custom:** point Phlox at any Whisper-compatible endpoint in [Settings → Model Settings → Whisper](/settings#remote-mode). Remote endpoints support any language.

### Consent

If **Require patient consent for ambient scribing** is enabled in [Settings → Advanced](/settings#user-settings), Phlox prompts for explicit patient consent before starting an ambient recording for an encounter. See [Patients → Ambient Scribe Consent](/features/patients#ambient-scribe-consent).

## Usage

1. **Record / upload / dictate**
   - Use in-browser recording (with pause/resume) or drag-and-drop an audio file, or switch to Dictate mode.
   - You can also upload a document (PDF, Word, or .txt) via the **Document Upload** button in the [Floating Action Menu](/features/patients#floating-action-menu) — see [Document Upload](#document-upload) below.
2. **Generate the note**
   - Audio is transcribed (Whisper/parakeet.cpp).
   - The LLM processes the transcript into a structured note based on the selected template.
3. **Review & save**
   - Edit the generated content.
   - Save the encounter, or use **Wrap Up** to confirm tasks and finish — see [Task Manager](/features/task-manager).
   - Copy to your EMR or keep the note in Phlox.

### Failure recovery

If transcription fails, the scribe controls offer **Retry**, **Download audio** (so the recording isn't lost), and **Dismiss**. You can also **reprocess** a raw transcript from the transcription panel (for example, after changing templates or models) without re-recording.

## Document Upload

The **Document Upload** button in the [Floating Action Menu](/features/patients#floating-action-menu) opens a per-encounter panel that pulls content out of a document and into the current note. (This is distinct from your [knowledge base](/features/knowledge-base) of reference literature, and from [demographics auto-fill](/features/patients#demographics).)

{/* Screenshot: 1745x1091, light + dark; files: documents-{light,dark}.webp */}
<ThemedShot light={documentsLight} dark={documentsDark} alt="Document Upload" width={500} />

It accepts **PDF, Word (.doc/.docx), or .txt** (file picker or drag-and-drop). When you process a document, Phlox extracts the text and presents it **per note-template field**, each with a **Use / Using** toggle that injects the content into that field — nothing is auto-filled, you choose field by field.

How a document is decoded depends on the global **Document/Image Processing Mode** in [Settings → Model Settings → LLM tab](/settings#document-and-image-processing-mode), combined with a runtime vision-capability probe:

- **Auto (default):** uses the PDF text layer when usable; otherwise sends page images to the vision model if capable, falling back to text extraction (+ OCR on Docker).
- **Vision only:** always renders pages as images and sends them to the vision model. Requires a vision-capable model.
- **OCR only:** text extraction (pypdf) with Tesseract OCR fallback. Works with any model but may miss content in scanned documents. **Tesseract is Docker-only** — desktop builds have no OCR fallback.

Use **Test Vision Support** in the same tab to check whether your model is vision-capable; the result is cached and shown as a badge.
