# RVS Bespoke

Vite + React marketing site for RVS Bespoke Furniture Ltd, Windsor.

## Setup

    npm install
    npm run dev

## Contact forms

All three contact forms (homepage, contact page, pop-up) POST to
[Web3Forms](https://web3forms.com) via `src/utils/forms.js`, which formats the
notification email and holds the access key. Web3Forms access keys are public
by design — they only identify the destination mailbox — so the key is
committed and enquiries work with no extra configuration.

## Optional environment variables

| Variable | Purpose |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Overrides the committed Web3Forms access key, to send enquiries to a different mailbox. Set it in Netlify → Site configuration → Environment variables (and in `.env.local` for local dev). Leave it unset to use the committed key. |

## Build

    npm run build     # outputs to dist/
    npm run preview
