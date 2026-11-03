# Relay

Relay is a frontend-only knowledge handover workspace for teams when a project owner leaves. It turns scattered project activity into a traceable claim ledger, verifies supporting evidence locally, applies permissions before rendering, and assembles a reviewable handover for the next owner.

> All data shown is synthetic demo data. Do not upload confidential material.

## What Relay Does

- Reconstructs project knowledge from connected-source style inputs.
- Extracts atomic claims such as decisions, responsibilities, blockers, risks, dependencies, open questions, recurring problems, and next actions.
- Verifies each claim against a verbatim source quote.
- Detects conflicting owners and dates.
- Surfaces missing operational facts honestly.
- Provides review, approval, redaction, and version-history workflows.
- Generates a permission-aware handover from approved claims only.
- Supports role-based previews for reviewers, departing members, incoming developers, and incoming coordinators.

## Demo Project

The seeded workspace is **CodeCircle Hackathon Portal**, a student-club platform for registrations and sponsor management. It includes realistic synthetic sources for meeting notes, Slack, task boards, GitHub activity, vendor email, sponsor budgets, a README, and server-access notes.

The demo intentionally includes:

- A registration-closing date conflict.
- Conflicting ownership for the payment integration.
- Missing registrar access, PayFlow production-key location, and deployment runbook.
- An unresolved database migration discussion.
- A recurring flaky email-reminder bug.
- A PayFlow production-account dependency.
- Clear owner- and date-based next actions.

## Core Workflow

1. **Connect** — Review seeded sources or add pasted/uploaded text.
2. **Reconstruct** — Run the local rule-based extraction engine.
3. **Verify** — Check every extracted quote against its source chunk.
4. **Review** — Approve, edit, reject, redact, or carry forward claims.
5. **Handover** — Publish a role-appropriate view and acknowledge receipt.

## Routes

- `/` — Product landing page
- `/dashboard` — Project health, charts, attention queue, and workflow progress
- `/sources` — Source list, raw text, access levels, imports, and analysis
- `/timeline` — Decisions, changes, and unresolved discussions
- `/ledger` — Searchable, filterable claim ledger with evidence drawer
- `/review` — Review queue, conflict resolution, missing-item responses, and shortcuts
- `/handover` — Permission-aware handover view, publishing, printing, and acknowledgement
- `/versions` — Published versions, diffs, and acknowledgement log
- `/access` — Persona/access matrix and redaction preview
- `/about` — Product scope, roadmap, and workflow explanation

## Privacy and Permissions

Relay runs entirely in the browser. There is no backend, authentication wall, API key, or external network request. Demo and imported data are persisted in browser storage using a versioned local-storage key.

All claim and source reads go through the access layer. Permissions are applied before search, counts, timelines, evidence drawers, ledger results, and handover generation. Restricted source text is never included in a lower-clearance view.

Use **Reset demo data** in the application to restore the original seeded workspace.

## Local Analysis Engine

The engine in `lib/engine` is deterministic and unit-testable. It:

1. Splits sources into paragraph or message-line chunks.
2. Extracts candidate claims with rule-based patterns.
3. Preserves exact supporting quotes.
4. Verifies quotes as substrings of their cited chunks.
5. Groups related claims to identify conflicts.
6. Creates missing items for required facts without evidence.

The UI displays the stages as analysis progress and clearly identifies the feature as local, rule-based analysis rather than LLM intelligence.

## Tech Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS v4
- shadcn/ui patterns
- lucide-react icons
- Recharts for dashboard visualizations
- Browser localStorage for demo persistence

## Project Structure

```text
app/                  App Router pages and global styles
components/           Reusable application and UI components
lib/
  access.ts            Persona clearance and visible-data filtering
  demo-data.ts         Synthetic project, people, sources, and claims
  engine/              Deterministic extraction and verification engine
  store.ts             Client persistence and demo reset helpers
types/                Shared domain types
```

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and select **Open demo**.

Create a production build with:

```bash
pnpm build
pnpm start
```

## Importing Your Own Text

The Sources page supports pasted text and local `.txt`, `.md`, `.csv`, and `.json` files. Empty or malformed input is rejected with a friendly message. Imported material remains in the browser only and should still be treated carefully because this prototype has no server-side security boundary.

## Scope and Roadmap

Included in this build:

- Synthetic source reconstruction
- Local claim extraction and verification
- Conflict and missing-item detection
- Permission-aware browsing and handovers
- Review actions and version history
- Browser print/PDF flow
- Responsive light and dark UI

Planned for a later release:

- Live OAuth connectors for GitHub, Slack, Google Drive, and Notion
- Server-side LLM-assisted extraction behind a permission filter
- Cited Q&A for incoming team members
- Continuous project-activity capture
- SSO and enterprise administration

## License

This repository contains a demonstration product implementation. Add the license and contribution policy appropriate for your organization before external distribution.
