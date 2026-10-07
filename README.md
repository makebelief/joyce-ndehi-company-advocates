# Joyce Ndehi & Company Advocates

A fast, mobile-first static website for Joyce Ndehi & Company Advocates in Kiambu Town, Kenya.

## Design direction

This version is a modern interpretation of the content sequence on the reference website supplied by the client: firm introduction, practice values, areas of specialization, why work with us, insights, and contact. It is **not** a copy of the reference site's content or code. The design uses the firm's existing maroon/red identity, original portrait and mediation photograph, and real contact information.

**No reviews, case outcomes, accolades, practitioner counts, or performance statistics have been fabricated.** The draft vision/mission/promise wording is proposed website copy for client approval.

## Stack

Static HTML, CSS, and vanilla JavaScript, with an npm build script. No React, image CDNs, tracking cookies, frontend dependencies, or API keys are required.

## Work locally

```bash
npm run check
npm run build
npx serve dist -l 4173
```

Use `http://localhost:4173` in your browser to review the built site. Clean URLs work on Vercel (`/about`, `/contact`, etc.). When checking files directly on disk, open the corresponding `.html` file or use the local server.

To update common navigation, footer, copy, or page structure, edit `scripts/generate-pages.py` and run:

```bash
python3 scripts/generate-pages.py
npm run build
```

For changes to typography, spacing, layout and responsive behavior, edit `assets/css/site.css` and rebuild. For mobile navigation, contact rail, and mailto enquiry behavior, edit `assets/js/site.js`.

## Important release notes

- The contact form intentionally opens the visitor's email client using `mailto:`. It does **not** submit to a server. Do not represent it as a working backend contact form.
- The Google Maps iframe is present only on the Contact page. The location query should be checked against the firm's actual office pin before the final production launch.
- Confirm proposed vision, mission, promise and profile wording with the client.
- The existing Vercel deployment automatically publishes when the configured production Git branch is pushed. Review on a feature-branch preview first.
- Security headers including a Content Security Policy are in `vercel.json`. If modifying the inline JSON-LD script in `scripts/generate-pages.py`, regenerate the CSP hash in `vercel.json` and `_headers` before deploying. Avoid adding inline scripts or remote assets without reviewing the policy.

## Live contact details used

Joyce Ndehi & Company Advocates · Telcom Exchange House, Biashara Street, 1st Floor, Kiambu Town, Kenya · 0706 806 549 · joycendehiadvocates@gmail.com.
