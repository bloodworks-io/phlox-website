import ThemedShot from "@site/src/components/ThemedShot";
import dashboardLight from "@site/static/img/agent-dashboard-light.png";
import dashboardDark from "@site/static/img/agent-dashboard-dark.png";

# Agent Dashboard

The **Agent Dashboard** (the app's home screen) is a chat-driven hub for clinic management. It combines a conversational AI interface with a workspace to-do panel and specialty-aware suggestions.

{/* Screenshot: capture 1600x1000, light + dark; files: agent-dashboard-{light,dark}.png */}
<ThemedShot light={dashboardLight} dark={dashboardDark} alt="Agent Dashboard" width={500} />

## Chat Interface

- Ask questions about patients, clinical notes, and medical literature.
- **Attach files** — drag and drop PDFs or images (PNG/JPEG/GIF) into the chat, or use the attachment button. Files are processed using your configured [document processing mode](/features/transcription#document-processing).
- Get responses with **inline citations** and a sources footer — see [Citations](/features/ai#citations).
- Receive downloadable **artifacts** (binary files and PDF form-fills) — see [Artifacts](/features/ai#artifacts).
- Watch the AI work via the collapsible **activity trace** (thinking + tool calls).
- The dashboard uses RAG-mode chat (general medical chat with access to your knowledge base).

### Specialty-aware suggestions

When the chat is empty, Phlox shows suggestion chips tailored to the **specialty** you set in [Settings → General](/settings#user-settings). Configure your specialty to get relevant starting prompts.

### Disclaimer

Once per session, a **disclaimer modal** reminds you that Phlox is experimental software, is not a certified medical device, has no authentication by default, and is not HIPAA/GDPR compliant. You must acknowledge it before continuing. (See [Limitations & Warnings](/limitations).)

## To-Do Panel

The collapsible to-do panel holds your **workspace to-dos** (general tasks, not patient encounter jobs):

- Add, complete, and delete items.
- Filter between active and all tasks.
- Ask the AI to manage items for you via the `todo_list` tool.

Patient encounter jobs live separately — see [Task Manager](/features/task-manager).

## Tools

The dashboard chat has access to the same [built-in tools](/features/ai#agentic-tool-calling) as patient chat, plus any configured MCP server tools. The AI decides which tools to call based on your query.

## Service Status

A service-status badge in the **sidebar** shows the live health of your LLM, transcription, and embedding endpoints/providers — useful for diagnosing why a request might be failing.
