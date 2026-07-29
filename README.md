# RVS Bespoke

Vite + React marketing site for RVS Bespoke Furniture Ltd, Windsor.

## Setup

    npm install
    cp .env.example .env.local   # then set VITE_WEB3FORMS_ACCESS_KEY
    npm run dev

## Required environment variables

| Variable | Purpose |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key for [Web3Forms](https://web3forms.com), which all three contact forms POST to. **The site cannot receive enquiries without it.** Set it in Netlify → Site configuration → Environment variables as well as locally. |

## Build

    npm run build     # outputs to dist/
    npm run preview
