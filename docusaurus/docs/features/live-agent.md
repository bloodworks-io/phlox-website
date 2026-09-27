# Live Agent

The **Live agent** is a third capture mode for the scribe. Instead of recording the consultation and generating the note afterwards, it listens to the whole consultation **in real time**, transcribes it utterance by utterance, and drafts the clinical note **while you talk**.

It is also an agent in the true sense: beyond drafting the note, it can act on spoken requests (calculations, lookups, drafting letters, staging PDF forms), detect when the visit has ended, open [Wrap-Up](/features/task-manager), and take spoken tidy-up commands afterwards.

## Starting a Live Session {#starting-a-session}

1. Open the mode dial on the [scribe pill](/features/transcription#scribing-modes) and select **Live agent** (*drafts the note in realtime*). Your capture-mode choice is remembered between visits.
2. Click the microphone to arm the session. If [consent for consultation recording](/features/patients#ambient-scribe-consent) is enabled, Phlox asks for the patient's consent first — the live agent records the consultation, just like Ambient mode.
3. The microphone becomes a pulsing **teal hero button**. While the server pre-warms its prompt caches the pill shows *Warming up the agent…*; once the session is live the panel status reads **Microphone active**. Clicking the hero button again ends the session.

While a live session is running the mode dial is locked — you can't switch capture modes mid-session.

## The Live Panel {#live-panel}

The right-hand pill button (**Expand live agent**) opens the live agent panel, a card you can drag anywhere on screen; its position is remembered. The pill itself is the live agent's minimised view, and shows artifact chips for anything the agent has prepared.

The panel contains:

- **Status line** — *Microphone active*, *Updating note…*, *Session ended*, or *Connection interrupted*.
- **Latest activity** — a running feed of what the agent is doing: tool calls, *Note updated: \<field\>* entries, and one-line summaries.
- **Prepared for review** — artifacts the agent staged during the session. Letters open in the [letter editor](/features/correspondence); filled PDF forms download directly. See [PDF forms](/features/pdf-forms).
- **Transcript** — a collapsible, colour-coded transcript with a dot per [speaker](#speaker-labels).

## The Note, Live {#the-note-live}

As the agent works, the matching note fields flash softly in the note form — you can watch the note take shape while you consult.

Your own edits take priority: if you edit a note field by hand during the session, the agent is **not allowed to overwrite it** — it may only append to that field, and the periodic consolidation passes skip it. Every few minutes the agent runs a quiet *tidy tick* that merges duplicates and aligns each field with its [template](/features/templates) style example.

Transcription is debounced, so the note usually updates in small bursts rather than word by word. If speech is queued while a longer passage is being processed, the panel shows a backlog counter until it is folded in.

## Spoken Commands {#spoken-commands}

Most of what is said goes into the note, but the agent recognises spoken requests and acts on them. For example:

- *"...what's the BMI if she's 82 kilos?"* — the agent runs the calculation.
- *"Write to the GP about today's visit."* — the agent lists your [letter templates](/features/correspondence), drafts the letter, and stages it under **Prepared for review**. You can refine it by voice (*"make the referral letter shorter"*) and save it by saying *"save the letter"*.
- *"Fill the CDU referral form."* — the agent stages the [PDF form](/features/pdf-forms), fills it from the note, and offers the completed PDF for review.
- *"Make the plan a list."* / *"Make the history a narrative."* — per-field format overrides.

The full toolset of the [chat agent](/features/ai#agentic-tool-calling) — including any connected MCP servers — is available to the live agent.

## Ending the Visit {#ending-the-visit}

Say something like *"that's everything"*, *"let's wrap up"*, or click the hero button. The agent calls wrap-up and the **Wrap-Up modal** opens with the visit's extracted task list. The session then switches to **tidy mode**: every utterance you speak is now a command to the agent, not note content. For example:

- *"Make the history a narrative."*
- *"Don't mention their dog died."*
- *"Just keep the 'email CDU' job."* — the job checkboxes in Wrap-Up update live as you speak.

Confirm Wrap-Up as usual to finish the encounter (see [Task Manager](/features/task-manager)).

## After the Session {#after-the-session}

- **Review pill** — after the session ends, a review pill shows *Resume live session · N drafts to review first*, listing anything staged under **Prepared for review**. Drafts stay available until you start a new session.
- **Reconnect** — if the live stream drops, an error pill (*Connection interrupted*) offers one-click reconnection; the session replays its state without re-flashing the note.
- **Auto-stop** — switching patients or leaving the page stops the session automatically, and idle sessions are pruned server-side after 4 hours.

## Speaker Labels {#speaker-labels}

Live utterances are labelled with anonymous speaker tags — **S1** through **S4**, with **S?** for speech that couldn't be attributed — using a lightweight, best-effort diarization model that runs locally (see [Credits](/credits#cam-speaker-embedding-3d-speaker-onnx)). The labels appear as coloured dots in the transcript and are passed to note and letter generation as *hints only*: they help the model tell clinician from patient, but they are not authoritative and are never written into the note.

For the technical details — voice-activity detection, utterance segmentation, the utterance gate, and the live session API — see [Architecture → Live Agent](/architecture#live-agent).
