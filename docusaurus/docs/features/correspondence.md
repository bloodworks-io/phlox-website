import correspondenceImg from '@site/static/img/correspondence.png';

# Correspondence

Generate patient letters from clinical notes (or by dictation), refine them interactively, and manage standard letter templates.

## Generating a Letter

Open the Letter panel from an encounter. There are two modes:

- **Draft** — generates a letter from the current encounter note, using either a selected template or **Custom** instructions you type in.
- **Dictate** — record yourself dictating the letter; Phlox transcribes it and the LLM formats it into a proper correspondence letter using the dedicated **Dictation** letter template.

Then **Refine**, **Copy**, or **Save** the result.

## Interactive Refinement

Once a draft exists, you can refine it:

- **Suggestion chips** — one-tap refinements such as *More formal*, *More concise*, *Add detail*, *Improve clarity*.
- **Free-text refinement** — describe any change in your own words.

Refinement maintains conversation context, so successive refinement requests build on each other. Token management for the LLM's context window is handled automatically.

## Letter Templates

Letter templates are managed separately from note templates, in [Settings → User Settings → Letter Templates](/settings#user-settings):

- Default templates are included.
- The **Dictation** template is protected (used by Dictate mode).
- You can set a **default letter template** for quick generation.
- Create custom templates with specific instructions.

<p align="center">
<img src={correspondenceImg} width="500px" alt="Letter Generation"/>
</p>
