import ThemedShot from "@site/src/components/ThemedShot";
import demographicsLight from "@site/static/img/demographics-modal-light.png";
import demographicsDark from "@site/static/img/demographics-modal-dark.png";

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

## Demographics

### Manual entry

Demographics can be entered or edited via the **Demographics** modal on the encounter workspace. A specialty-aware field set is used.

{/* Screenshot: capture 1200x1000, light + dark; files: demographics-modal-{light,dark}.png */}
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
