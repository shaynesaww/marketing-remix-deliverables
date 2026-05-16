# Marketing Remix — Client Deliverables

Static HTML reports and deliverables hosted on Vercel for Marketing Remix clients.

## Folder structure

Each client gets a top-level folder. Each deliverable inside that client folder lives in its own subfolder with an `index.html`. This pattern gives clean URLs and infinite scalability.

```
marketing-remix-deliverables/
├── README.md
├── index.html                              ← root landing (no client info)
└── <client-slug>/
    ├── <deliverable-slug>/
    │   └── index.html                      ← the actual report
    └── <another-deliverable-slug>/
        └── index.html
```

**URL pattern:** `<vercel-domain>/<client-slug>/<deliverable-slug>/`

Example: `marketing-remix-deliverables.vercel.app/exceptional-comfort-services/competitor-report/`

## Adding a new client deliverable

1. Create the folder path: `<client-slug>/<deliverable-slug>/`
2. Save the HTML as `index.html` inside it
3. `git add .` → `git commit -m "Add <client> <deliverable>"` → `git push`
4. Vercel auto-deploys within 30 seconds
5. Share the URL with the client

## Slug naming conventions

- All lowercase
- Words separated by hyphens, not underscores or spaces
- Keep it descriptive but short
- Examples: `exceptional-comfort-services`, `competitor-report`, `seo-audit-q2`, `proposal-2026`

## Things to keep out of this repo

- Internal proposals or contracts
- Strategy notes or research that names competitors in unflattering ways
- Anything that wasn't explicitly produced as a client-facing deliverable
- Credentials, API keys, internal client data

Source files for these deliverables live in the private Knowledge Base. Only the finished, client-ready HTML gets copied here.

## Hosting

Deployed via Vercel as a static site. No build step. No framework. Free tier covers it.
