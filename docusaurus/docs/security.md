# Security

Phlox is a local-first, single-user application and is **not** a hardened, multi-user clinical system. This page describes the security and privacy controls that do exist so you can deploy it sensibly. Read it alongside [Limitations & Warnings](/limitations), which covers what Phlox is *not*.

## Authentication

Phlox has no built-in user accounts. Authentication depends on how you deploy:

| Mode | When | How it works |
|---|---|---|
| **None (open)** | Default | No authentication. Anyone who can reach the server can use it. Fine for a single-user desktop install or a strictly local Docker setup bound to `127.0.0.1`. |
| **Proxy auth** | Behind a reverse proxy | Enable `PROXY_AUTH_ENABLED=true` and point Phlox at the header your proxy sets (e.g. `X-Forwarded-User` from Authelia, Traefik, or Caddy). Optional allow-list via `PROXY_AUTH_ALLOWED_USERS`. |
| **Desktop local token** | Tauri desktop builds only | The Tauri shell generates a random 256-bit bearer token that the embedded server requires on every request. The middleware **fails closed** — if the token is unset it denies requests rather than allowing them through. |

**Never expose a Docker instance to the internet without a reverse proxy or VPN.** The default `docker-compose.yml` publishes port 5000 on all interfaces; restrict it to `127.0.0.1:5000:5000` unless it sits behind a proxy.

## Encryption at rest

All clinical data lives in a single SQLite database (`phlox_database.sqlite`) encrypted with **SQLCipher**. How the key is supplied depends on the deployment:

- **Docker** — set `DB_ENCRYPTION_KEY` (or mount a Podman secret at `/run/secrets/db_encryption_key`, which is tried first).
- **Desktop (Tauri)** — you set a **passphrase** (minimum 12 characters) on first run. The passphrase is hex-encoded and fed to the server; SQLCipher derives the key with PBKDF2-HMAC-SHA512.

> **No keychain caching.** Earlier versions cached the passphrase in the OS keychain. This was **intentionally removed** — you must re-enter the passphrase every time you start the desktop app. This is by design so that physical access to the machine does not grant access to the database.

> **Reference literature is stored separately and unencrypted.** Uploaded reference material (journal articles, guidelines) and its vector embeddings live in a second `documents.sqlite` file that is **not** encrypted. This is by design — it is intended for **non-PHI** material only. **Do not store PHI in document collections**, since that file is not encrypted at rest.

## Audit logging

Phlox records an **audit log** of API activity. This is useful for review and accountability but is *not* a full compliance-grade audit trail.

- Every API request is logged: HTTP method, path, status code, actor (from proxy auth), client IP, and duration.
- **Request and response bodies are never logged** — no PHI is captured in the audit trail.
- Logs are retained for `AUDIT_RETENTION_DAYS` (default **90 days**) and purged daily.
- Audit data is **API-only** — read it with `GET /api/audit` or export with `GET /api/audit/export?format=csv|json`. There is currently **no in-app UI** for browsing the audit log.

> Audit logging is enabled automatically. It is not a substitute for the regulatory controls described in [Limitations & Warnings](/limitations).

## Network security headers

The server enforces a **strict Content-Security-Policy** and sets `X-Frame-Options: DENY` and related security headers. In Tauri builds the global Tauri API surface is disabled except for the specific commands Phlox uses, and the API key fields are masked in configuration responses.

## Rate limiting

Rate limiting protects against abuse. It is **off by default**; enable it with `RATE_LIMIT_ENABLED=true`. When enabled, per-path sliding-window limits apply (e.g. transcription and chat endpoints are more tightly limited than configuration reads), with a burst allowance in the first 10 seconds. Desktop (Tauri) builds apply a multiplier (`RATE_LIMIT_DESKTOP_MULTIPLIER`, default 3) to the limits.

## Tool & MCP data safety

The agentic tools can call external services on your behalf. Two safeguards apply:

- **Built-in external tools are disabled by default.** PubMed Search and Wikipedia Search ship **off** because they can transmit query content (potentially PHI) to third-party APIs. Enable them deliberately in [Settings → Tools](/settings#tools).
- **MCP servers have a per-server "Allow sensitive data" toggle** (off by default). When off, Phlox sanitises tool arguments before sending them to the external server — stripping UR/MRN numbers, dates of birth, phone numbers, email and postal addresses, and Medicare numbers. This filtering is best-effort and is **not guaranteed** to catch every piece of PHI; you are responsible for verifying that any external service complies with applicable privacy regulations.

See also the [agentic tool-calling](/features/ai#agentic-tool-calling) and [MCP](/features/ai#mcp-server-integration) sections of the AI features page.
