# Security

Phlox is a local-first application and is **not** a hardened, compliance-grade clinical system, even though it now supports multiple user accounts. This page describes the security and privacy controls that do exist so you can deploy it sensibly. Read it alongside [Limitations & Warnings](/limitations), which covers what Phlox is *not*.

## Authentication

Phlox has built-in **username/password accounts** with **admin** and **clinician** roles. How you're authenticated depends on how you deploy:

| Mode | When | How it works |
|---|---|---|
| **Built-in accounts (required)** | Docker/web — default | The first browser visit runs a setup wizard that creates the **admin** account; every subsequent request requires a valid session token from username/password login. Passwords are hashed with scrypt and logins lock out for 30 s after 5 failed attempts. |
| **Proxy auth** | Behind a reverse proxy | Alternatively, delegate authentication to your proxy: set `PROXY_AUTH_ENABLED=true` and point Phlox at the header your proxy sets (e.g. `X-Forwarded-User` from Authelia, Traefik, or Caddy). Optional allow-list via `PROXY_AUTH_ALLOWED_USERS`. **Requires** `TRUSTED_PROXY_IPS` listing the IP/CIDR of every proxy hop between Phlox and its clients — headers from untrusted addresses are rejected. |
| **Desktop local token** | Tauri desktop builds only | The Tauri shell generates a random 256-bit bearer token that the embedded server requires on every request, and the session resolves to a single implicit admin user. The middleware **fails closed** — if the token is unset it denies requests rather than allowing them through. |

Each signed-in user only sees their own encounters, letters, templates, tasks, settings, and knowledge-base collections (see [Users & roles](/authentication)). The legacy `PHLOX_PASSPHRASE` variable is **deprecated and ignored** — accounts replace it. Setting `PHLOX_ALLOW_UNAUTHENTICATED=true` disables authentication and resolves every request as implicit admin; this is an explicit risk acceptance for local testing and should never be used on a network-reachable instance.

**Never expose a Docker instance directly to the internet.** Terminate HTTPS at a reverse proxy or reach the instance over a VPN. The default `docker-compose.yml` publishes port 5000 on all interfaces; restrict it to `127.0.0.1:5000:5000` unless it sits behind a proxy.

## Encryption at rest

All clinical data lives in a single SQLite database (`phlox_database.sqlite`) encrypted with **SQLCipher**. How the key is supplied depends on the deployment:

- **Docker** — set `DB_ENCRYPTION_KEY` (or mount a Podman secret at `/run/secrets/db_encryption_key`, which is tried first).
- **Desktop (Tauri)** — you set a **passphrase** (minimum 12 characters) on first run. The passphrase is hex-encoded and fed to the server; SQLCipher derives the key with PBKDF2-HMAC-SHA512.

> **No keychain caching.** Earlier versions cached the passphrase in the OS keychain. This was **intentionally removed** — you must re-enter the passphrase every time you start the desktop app. This is by design so that physical access to the machine does not grant access to the database.

> **Reference literature is stored separately and unencrypted.** Uploaded reference material (journal articles, guidelines) and its vector embeddings live in a second `documents.sqlite` file that is **not** encrypted. This is by design — it is intended for **non-PHI** material only. **Do not store PHI in document collections**, since that file is not encrypted at rest.

## Audit logging

Phlox records an **audit log** of API activity. This is useful for review and accountability but is *not* a full compliance-grade audit trail.

- Every API request is logged: HTTP method, path, status code, actor (the signed-in user, or the proxy-authenticated username), client IP, and duration.
- **Request and response bodies are never logged** — no PHI is captured in the audit trail.
- Logs are retained for `AUDIT_RETENTION_DAYS` (default **90 days**) and purged daily.
- Audit data is **API-only** — read it with `GET /api/audit` or export with `GET /api/audit/export?format=csv|json`. There is currently **no in-app UI** for browsing the audit log.

> Audit logging is enabled automatically. It is not a substitute for the regulatory controls described in [Limitations & Warnings](/limitations).

## Network security headers

The server enforces a **strict Content-Security-Policy** and sets `X-Frame-Options: DENY` and related security headers. In Tauri builds the global Tauri API surface is disabled except for the specific commands Phlox uses, and the API key fields are masked in configuration responses.

## Rate limiting and request limits

Rate limiting protects against abuse. It is **off by default**; enable it with `RATE_LIMIT_ENABLED=true`. When enabled, per-path sliding-window limits apply (e.g. transcription and chat endpoints are more tightly limited than configuration reads), with a burst allowance in the first 10 seconds. Desktop (Tauri) builds apply a multiplier (`RATE_LIMIT_DESKTOP_MULTIPLIER`, default 3) to the limits.

Independently of rate limiting, the server caps request sizes and document processing to protect against accidental or malicious oversized payloads: request bodies are limited to **100 MB** (**1 GB** for audio uploads), PDFs are processed up to a maximum of **200 pages**, and images above **40 megapixels** are rejected.

## Tool & MCP data safety

The agentic tools can call external services on your behalf. Two safeguards apply:

- **Built-in external tools are disabled by default.** PubMed Search and Wikipedia Search ship **off** because they can transmit query content (potentially PHI) to third-party APIs. Enable them deliberately in [Settings → Tools](/settings#tools). As defense in depth, outbound PubMed queries are **sanitised before transmission** — patient identifiers (UR/MRN numbers, dates of birth, phone numbers, email and postal addresses, Medicare numbers, and patient names) are stripped from the query even when the tool is enabled. This filtering is best-effort and is **not guaranteed** to catch every piece of PHI.
- **MCP servers have a per-server "Allow sensitive data" toggle** (off by default). When off, Phlox sanitises tool arguments before sending them to the external server — stripping UR/MRN numbers, dates of birth, phone numbers, email and postal addresses, and Medicare numbers. This filtering is best-effort and is **not guaranteed** to catch every piece of PHI; you are responsible for verifying that any external service complies with applicable privacy regulations.

See also the [agentic tool-calling](/features/ai#agentic-tool-calling) and [MCP](/features/ai#mcp-server-integration) sections of the AI features page.
