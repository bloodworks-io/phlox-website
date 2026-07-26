import ThemedShot from "@site/src/components/ThemedShot";
import templateEditorLight from "@site/static/img/template-editor-light.webp";
import templateEditorDark from "@site/static/img/template-editor-dark.webp";
import templateListLight from "@site/static/img/template-list-light.webp";
import templateListDark from "@site/static/img/template-list-dark.webp";

# Flexible Template System

Phlox uses templates to structure clinical notes and correspondence. A template consists of **fields**, each with its own prompt, formatting rules, and persistence behaviour. There are separate template types for **notes** and **letters** (see [Correspondence](/features/correspondence)).

## Managing Templates

Templates are managed in [Settings → User Settings → Note Templates](/settings#user-settings). You can:

- **Create** a new template from scratch.
- **Generate from example** — paste an example note and Phlox generates a matching template; review and adjust before saving.
- **Edit** any custom template in the split Editor / Preview.

{/* Screenshot: capture 1600x1000, light + dark; files: template-editor-{light,dark}.webp */}
<ThemedShot light={templateListLight} dark={templateListDark} alt="Template editor" width={500} />
- **Delete** custom templates.

> Phlox ships with a set of protected default templates (e.g. `phlox_*`, `soap_*`, `progress_*`). Defaults can be used and selected but not deleted.

## Template Fields

Each field is configured with:

- **System prompt** — guides the AI's output for that field.
- **Format schema** — Free Text, Bullet (with configurable bullet character), Numbered, or Narrative.
- **Style example** — an optional writing sample the LLM should match.
- **Persistence** — **Persistent** fields carry their value forward across encounters for the same patient (e.g. past medical history); **Dynamic** fields are regenerated each encounter (e.g. the assessment for today's visit). The **Plan** field is always Dynamic.
- **Post-processing refinement rules**.

{/* Screenshot: capture 1600x1000, light + dark; files: template-editor-{light,dark}.webp */}
<ThemedShot light={templateEditorLight} dark={templateEditorDark} alt="Template editor" width={500} />

## Applying Templates

1. Pick a template for the encounter (your default is pre-selected).
2. When you switch templates for an existing patient, Phlox fetches that patient's history by UR number and pre-fills the **persistent** fields from previous notes.
3. Generate, then review and edit the content.

## Adaptive Refinement

Templates are also where Phlox's learning lives. Each persistent/dynamic field accumulates **adaptive instructions** that nudge future generations toward your style. These are derived automatically from your edits and managed under the hood (auto-consolidated per field) — see [AI Features → Adaptive Refinement](/features/ai#adaptive-refinement). They aren't shown in the UI.
