---
sidebar_label: Users & Auth
description: Accounts, roles, and per-user data in Phlox
---

# Users & Authentication

Phlox supports multiple user accounts with **admin** and **clinician** roles. Each user signs in with a username and password, and their clinical data stays their own.

> Accounts apply to **Docker/web deployments**. The desktop app is a single-user install: it unlocks with the database passphrase and runs as one implicit admin — there is no login screen and no user management.

## First-run setup

The first time a browser reaches a fresh instance, Phlox runs a short setup wizard:

1. Create the **admin account** — pick a username (3–64 characters: letters, digits, `.` `_` `-`) and a password (minimum 8 characters; 12+ recommended).
2. The admin is signed in automatically and any pre-existing (unowned) demo data is claimed by that account.

Once any real user exists, the setup endpoint refuses to run again — you can't re-run the wizard to take over an instance. Further accounts are created from the [Users tab](#managing-users).

## Signing in

- Login is **username/password**; the server returns a session token held by the browser. Sessions can be revoked by signing out.
- Passwords are hashed with **scrypt** (never stored or logged in plaintext).
- After **5 failed attempts** a username is locked out for **30 seconds**.
- Any user can change their own password via the API (`POST /api/auth/change-password`, current password required); there is no in-app change-password screen yet — admins can reset passwords from the [Users tab](#managing-users).

If you forget the admin password there is no recovery flow — the credentials protect an encrypted database; without them the data is inaccessible. Choose a memorable, strong password (and see [encryption at rest](/security#encryption-at-rest) for the full picture).

## Roles

| | Admin | Clinician |
|---|---|---|
| Use all clinical features (notes, letters, chat, knowledge base) | ✅ | ✅ |
| See **all patients**, not just their own | ✅ (toggle) | ❌ |
| Create, disable users and reset passwords (Users tab) | ✅ | ❌ |
| Edit **global** model settings, prompts, and options | ✅ | ❌ |

- **Admin scope toggle** — by default an admin sees only their own patients, like any user. A toggle in the patient sidebar switches to *all patients* (all users' encounters, letters, and jobs) for supervising or covering.
- **Global configuration** — model endpoints, prompts, and system-wide options are admin-only writes. Clinicians can still use everything and adjust their own user settings.
- **Shared assets** — the seeded default note templates and letter templates are shared read-only; personal templates are per-user.

## Per-user data

Each user's workspace is isolated:

- **Patients & encounters** — encounters, notes, transcripts, jobs, and letters are owned by the user who created them. Clinicians don't see each other's encounters for the same patient.
- **Templates** — personal note templates (the seeded defaults are shared and protected).
- **Knowledge base** — document collections and their embeddings are scoped per user; uploading your own guidelines doesn't expose them to others.
- **Task manager & settings** — to-dos, user preferences (including preferred language), and chat history are per-user.

## Managing users

Admins manage accounts from **Settings → Users** (visible to admins only):

- **Create users** — set username, initial password, and role (`admin` or `clinician`).
- **Reset passwords** — set a new password for a user who is locked out.
- **Disable accounts** — disabled users can't sign in (existing sessions stop working). You can't disable your own account.

## Coexisting with proxy auth

If you already authenticate at a reverse proxy (Authelia, Traefik, Caddy, …), you can keep using that instead of built-in accounts: set `PROXY_AUTH_ENABLED=true` with the header to trust, and `TRUSTED_PROXY_IPS` listing every proxy hop. See [Security → Authentication](/security#authentication). Don't combine both approaches.

:::warning Not compliance-grade
Accounts give access control, not compliance. Phlox still isn't a hardened clinical system — see [Limitations & Warnings](/limitations).
:::
