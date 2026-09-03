# Language Support

Phlox can transcribe audio and generate clinical notes, letters, and chat responses in your clinic's language. You pick one **Language** in [Settings → User Settings → General](/settings#user-settings), and it drives transcription, LLM output, and date formatting.

## What the language setting controls

- **Transcription** — the language hint passed to the speech-to-text engine.
- **Output** — notes, letters, summaries, and chat are produced in the selected language.
- **Formatting** — dates render in the matching locale.

## Transcription models

The transcription language you can actually use depends on your speech-to-text engine:

- **Desktop (bundled engine)** — the default **Omi Med STT v1** model is **English-only**. When you select a non-English language, Phlox offers to download the **multilingual Parakeet TDT 0.6B v3** model, which understands **25 European languages** and auto-detects the spoken language. Downloading it switches it to the active model. Until it is active, non-English recordings fall back to English.
- **Remote (Whisper-compatible)** — point Phlox at any endpoint in [Settings → Model Settings → Whisper](/settings#remote-mode); remote endpoints generally support any language.

> See [Transcription](/features/transcription) for the full recording and dictation workflow.

## Notes, letters, and chat

Output language is applied automatically — no per-template or per-prompt configuration is required. The model is instructed to write every output in your selected language, regardless of the language of the source audio or documents.

## Application interface

The Phlox **interface is currently English-only** — the language selector lists only languages with a complete interface translation, so **English** is the only option today. Multilingual transcription and output are fully implemented and activate as soon as your language appears in the selector. Interface translations are contributed by the community; if you'd like to add yours, see [Contributing → Adding a language](https://github.com/bloodworks-io/phlox/blob/development/.github/CONTRIBUTING.md#adding-a-language).
