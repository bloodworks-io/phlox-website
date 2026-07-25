# Medical Transcription

Phlox converts audio recordings into structured clinical notes. You can record ambient audio, dictate, or upload audio files; in each case the audio is transcribed and the transcript is turned into a note based on your selected [template](/features/templates).

## Scribing Modes

- **Ambient** — record the encounter; Phlox transcribes and generates the note.
- **Dictate** — dictate content that the LLM formats into the note fields.

Toggle between modes in the scribe controls on the encounter workspace. You can also **drag and drop an audio file** directly onto the scribe pill box to transcribe it.

:::note[Screenshot needed]
_The scribe pill box — the Ambient / Dictate toggle and record/pause controls._
:::

### Transcription engines

- **Desktop app:** uses the bundled **parakeet.cpp** engine (Omi Med STT v1) by default — no external service required.
- **Docker / custom:** point Phlox at any Whisper-compatible endpoint in [Settings → Model Settings → Whisper](/settings#remote-mode).

### Consent

If **Require patient consent for ambient scribing** is enabled in [Settings → Advanced](/settings#user-settings), Phlox prompts for explicit patient consent before starting an ambient recording for an encounter. See [Patients → Ambient Scribe Consent](/features/patients#ambient-scribe-consent).

## Usage

1. **Record / upload / dictate**
   - Use in-browser recording (with pause/resume) or drag-and-drop an audio file, or switch to Dictate mode.
   - You can also upload documents (PDF, Word, images) or paste text — see [Document processing](#document-processing) below.
2. **Generate the note**
   - Audio is transcribed (Whisper/parakeet.cpp).
   - The LLM processes the transcript into a structured note based on the selected template.
3. **Review & save**
   - Edit the generated content.
   - Save the encounter, or use **Wrap Up** to confirm tasks and finish — see [Task Manager](/features/task-manager).
   - Copy to your EMR or keep the note in Phlox.

### Failure recovery

If transcription fails, the scribe controls offer **Retry**, **Download audio** (so the recording isn't lost), and **Dismiss**. You can also **reprocess** a raw transcript from the transcription panel (for example, after changing templates or models) without re-recording.

## Document Processing

Phlox supports uploading PDFs, images, and text documents for note generation and demographics extraction. The processing pipeline is configurable in [Settings → Model Settings → LLM tab → Document/Image Processing Mode](/settings#document-and-image-processing-mode):

- **Auto (default):** probes the model for vision capability. If supported, document page images are sent directly to the vision model. Falls back to text extraction + OCR if not.
- **Vision only:** always renders document pages as images and sends them to the vision model. Requires a vision-capable model.
- **OCR only:** extracts text using pypdf with Tesseract OCR fallback. Works with any model but may miss content in scanned documents or images. **Tesseract is Docker-only** — desktop builds have no OCR fallback.

Use the **Test Vision Support** button in the same tab to check whether your configured model is vision-capable; the result is cached and shown as a badge.

After extraction, each document's text can be toggled into individual note fields with per-field **Use / Using** controls.
