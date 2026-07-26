# Asset Checklist

The site is wired to pick these files up automatically — drop them in at the
exact paths below, no code changes needed. Until then, sized placeholders are
shown on the page (and OG tags will 404 harmlessly).

## Required

| Path | Size | What it should be |
|---|---|---|
| `public/videos/hero-demo.mp4` | **1920×1080** (16:9), ~30–60s, ≤ ~8 MB | Hero demo. Screen recording of the **web app at localhost:5000**, fullscreen in **dark mode** with a 1920×1080 (or 1600×900) viewport, cropped to the page — no real browser chrome (the site's fake browser frame provides it). Flow: hit record → speak → live transcript → generate note → review tasks → generate letter. No audio track needed (plays muted + loops). Zoom/pan edits into the UI encouraged — keep each zoom ~2s. Optional extra: `hero-demo.webm` (same content) for smaller size. |
| `public/images/hero-poster.webp` | **1920×1080** | Poster/first frame for the hero video — a clean dashboard or encounter screenshot. Shown while the video loads. |
| `public/images/feature-transcription.webp` | **1200×750** (16:10) | Encounter view mid-recording: live transcript panel, record button, patient header. Crop tight to the app window (no browser chrome). Shown in the "AI Transcription" feature card. |
| `public/images/feature-chat.webp` | **1200×750** (16:10) | AI Chat view with an answered clinical question showing cited RAG sources. Crop tight to the app window. Shown in the "AI Chat & RAG" feature card. |
| `public/images/og-image.png` | **1200×630** | Social share card: Phlox logo + "Free, open-source AI medical scribe — 100% local" on the dark brand background (#181926) with a subtle orange glow. Referenced by the OG/Twitter meta tags in `index.html`. |

## Notes

- Match the app's color mode to the surrounding card if you can — dark-mode
  screenshots read best on the dark sections.
- Export screenshots as `.webp` (quality ~80) to keep the page fast.
- The hero video swaps in automatically once `public/videos/hero-demo.mp4`
  exists; the placeholder disappears on its own.
