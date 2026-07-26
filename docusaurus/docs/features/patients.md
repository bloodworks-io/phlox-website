import ThemedShot from "@site/src/components/ThemedShot";
import InlineIcon from "@site/src/components/InlineIcon";
import { FaFileUpload, FaClock, FaAtom, FaEnvelope } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import demographicsLight from "@site/static/img/demographics-modal-light.webp";
import demographicsDark from "@site/static/img/demographics-modal-dark.webp";

# Patients, Encounters & Demographics

Phlox organises clinical data around two concepts: **patient profiles** (stable, identifying information) and **encounters** (individual visits/notes). This split keeps demographics stable across visits while letting each encounter carry its own note, transcript, and tasks.

## Patient Profiles

A patient profile holds the stable, identifying information that rarely changes between visits:

- Name, date of birth, sex
- UR / MRN number
- Contact details and address
- Notes about the patient

Profiles are keyed by **UR number**. All encounters for the same UR number are grouped together, and history (previous notes, persistent template fields) is carried forward automatically.

## Encounters

An **encounter** is a single clinical visit. Each encounter contains:

- The clinical note (built from the selected [template](/features/templates))
- The source audio transcript (if any)
- Extracted [tasks / jobs](/features/task-manager)
- Generated [correspondence](/features/correspondence)
- The chat and [Chart Insights](/features/ai#chart-insights) context

Creating a new note for an existing UR number links the new encounter to that patient's history.

## Floating Action Menu

The **Floating Action Menu** (FAB) is the vertical action menu on the right side of the encounter workspace. It opens a panel for each common encounter action:

- <InlineIcon icon={FaFileUpload} label="Document Upload" /> **Document Upload** — upload a PDF, Word, or .txt document to extract text into the current note. See [Document Upload](/features/transcription#document-upload).
- <InlineIcon icon={FaClock} label="Previous Visit" /> **Previous Visit** — open the patient's previous encounter for reference.
- <InlineIcon icon={FiMessageSquare} label="Chat" /> **Chat** — the [reference / agentic chat](/features/ai#reference-chat) for this patient.
- <InlineIcon icon={FaAtom} label="Chart Insights" /> **Chart Insights** — generate [Chart Insights](/features/ai#chart-insights) for the encounter. Available after the encounter has been saved.
- <InlineIcon icon={FaEnvelope} label="Letter" /> **Letter** — generate [correspondence](/features/correspondence) from the encounter. Available after the encounter has been saved.

Chat, Chart Insights, and Letter are shown when the AI chat is enabled; Chart Insights and Letter additionally require the encounter to be saved first.

## Demographics

### Manual entry

Demographics can be entered or edited via the **Demographics** modal on the encounter workspace. A specialty-aware field set is used.

{/* Screenshot: capture 1200x1000, light + dark; files: demographics-modal-{light,dark}.webp */}
<ThemedShot light={demographicsLight} dark={demographicsDark} alt="Demographics modal" width={500} />

### Auto-fill from a dropped document

You can drag and drop a document (PDF, image, or text file) onto the demographics form. Phlox extracts the demographic fields using the same processing pipeline as document chat:

- **Text-layer** extraction first (for digital-native PDFs),
- falling back to **vision** (if the model supports it), or
- **OCR** (Tesseract, Docker builds only) as a final fallback.

Review the extracted values before saving — AI extraction can make mistakes.

## Ambient Scribe Consent

If **Require patient consent for ambient scribing** is enabled in [Settings → User Settings → Advanced](/settings#user-settings), Phlox will prompt for explicit patient consent before starting an ambient recording on a given encounter.

- The consent prompt appears the first time you start the scribe for that encounter.
- The consent state is persisted per encounter so you are not re-prompted mid-visit.
- This is intended to support workflows where documented patient consent is required before recording.

> Even with consent captured, you remain responsible for ensuring that making any recording is lawful in your jurisdiction. See [Limitations & Warnings](/limitations).
