# RVS Bespoke

Vite + React marketing site for RVS Bespoke Furniture Ltd, Windsor.

## Setup

    npm install
    cp .env.example .env.local   # then set VITE_FORM_ENDPOINT
    npm run dev

## Required environment variables

| Variable | Purpose |
|---|---|
| `VITE_FORM_ENDPOINT` | POST target for all three contact forms. **The site cannot receive enquiries without it.** Set it in Vercel → Project → Settings → Environment Variables as well as locally. |

## Build

    npm run build     # outputs to dist/
    npm run preview
