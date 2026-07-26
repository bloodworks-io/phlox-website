import ThemedShot from "@site/src/components/ThemedShot";
import knowledgeBaseLight from "@site/static/img/knowledge-base-light.webp";
import knowledgeBaseDark from "@site/static/img/knowledge-base-dark.webp";

# Knowledge Base

The **knowledge base** is a local, searchable corpus of your own reference material — clinical guidelines, journal articles, protocols — that Phlox uses to ground its chat answers. It lives in `documents.sqlite` as vector embeddings (via sqlite-vec) and stays on your machine.

There is **no separate "document chat" screen**. You build the knowledge base on the **Documents** page, and the chat surfaces (the [Agent Dashboard](/features/dashboard) and the patient [Reference Chat](/features/ai#reference-chat)) query it automatically.

{/* Screenshot: capture 1600x1000, light + dark; files: knowledge-base-{light,dark}.webp */}
<ThemedShot light={knowledgeBaseLight} dark={knowledgeBaseDark} alt="Knowledge Base" width={500} />

## Managing collections

Open the **Documents** page and go to the **Knowledge Base** tab. There you can:

- **Upload** a single PDF, or **bulk-upload** many via drag-and-drop.
- Each document is **auto-classified** (by the LLM) into a disease-named **collection**, with a title, source, and focus area (e.g. guidelines, diagnosis, treatment). You can override these before committing, and edit them later.
- **Rename** collections, **delete** individual documents or whole collections, and **download** the original PDFs.

When you change your embedding model, re-embed everything from [Settings → Model Settings → RAG](/settings#remote-mode).

> The knowledge base is intended for **non-PHI reference material**. It is stored in a separate, **unencrypted** database — keep clinical data out of it. See [Security](/security#encryption-at-rest).

## Querying the knowledge base

You don't chat _on_ the Documents page. Instead, the knowledge base is queried automatically from:

- The **Agent Dashboard** chat (general medical questions), and
- The patient **Reference Chat** (from the [Floating Action Menu](/features/patients#floating-action-menu)).

When the model decides a question would benefit, it calls the `get_relevant_literature` tool, retrieves the most relevant passages from the matching collection, and answers with **structured inline citations** (`[1]`, `[2]`…) plus a sources footer. Where the original PDF is stored, a citation links to a downloadable copy.

- The `get_relevant_literature` tool is **auto-hidden until the knowledge base has at least one collection**.
- External literature tools (**PubMed**, **Wikipedia**) ship **disabled by default** — enable them in [Settings → Tools](/settings#built-in-tools) if you want chat to also pull from those external sources.
