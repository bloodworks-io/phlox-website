import ThemedShot from "@site/src/components/ThemedShot";
import formBuilderLight from "@site/static/img/form-builder-light.webp";
import formBuilderDark from "@site/static/img/form-builder-dark.webp";

# PDF Form Templates

Phlox can fill PDF forms — either manually by drawing fields on a template, or automatically via the AI chat. This is useful for filling in referral letters, request forms, and other structured documents from encounter data.

PDF Form Templates are managed alongside your document collections on the **Documents** page (`/rag`), under the **Form Templates** tab.

## Creating a Form Template

1. Go to **Documents → Form Templates** and click **Upload Template**.
2. Upload a PDF. The PDF opens in the field editor.
3. Draw fields onto the PDF. Each field has one of four types:
   - **Text** — free text (e.g. name, address)
   - **Checkbox** — boolean toggle
   - **Date** — date value
   - **Number** — numeric value

{/* Screenshot: capture 1600x1000, light + dark; files: form-builder-{light,dark}.webp */}
<ThemedShot light={formBuilderLight} dark={formBuilderDark} alt="PDF form builder" width={500} />
4. Name each field so the AI can map encounter data to it. Field names should be descriptive (e.g. `patient_name`, `date_of_birth`, `referring_clinic`).
5. Save the template.

### Auto-detecting Fields

If your configured model supports vision, click **Auto-detect Fields**. Phlox renders the PDF with a ruler overlay and asks the vision model to identify fillable fields and their types automatically. You can then review and adjust the detected fields before saving.

> The auto-detect feature requires a vision-capable model. See [Settings](/settings#document-and-image-processing-mode) to check or probe vision support.

### Replacing the Underlying PDF

You can replace a template's PDF without losing your field definitions (e.g. when a clinic sends an updated form). Use **Replace PDF** and select the new file; the existing field positions are preserved.

## Filling a Form

There are two ways to fill a form:

### 1. AI-driven (via chat)

The primary flow is through the chat interface. When you ask the agent to fill a form (for example, *"Fill the referral form for this patient using today's encounter"*), the agent:

1. Selects a matching form template via the `list_pdf_form_templates` tool.
2. Extracts the relevant data from the encounter and produces a `form_fill` artifact via the `fill_pdf_form` tool.
3. The chat displays a **form-fill artifact card**. Clicking it fills the PDF client-side, which you can then review, adjust, and download.

### 2. Manual

A manual fill modal is available from the Form Templates tab for ad-hoc fills, though the AI-driven flow is the intended path for everyday use.

## Notes

- The PDF is rendered and filled entirely client-side using PDF.js — no encounter data is sent to a third party during the fill step itself.
- Filled PDFs are not stored automatically; download them once generated.
