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


## V3 brand and imagery refinements

The masthead uses the exact red of the firm's supplied logo (`#CF0000`), with the red logo on a white circular mount for contrast. Headings use a straightforward sans-serif typeface without italic styling. The hero and six service cards each use distinct illustrative photographs. The image sources and license are in `docs/IMAGE_SOURCES_V3.md`.

**Before committing and deploying a new clone**, run `bash scripts/fetch-legal-photos.sh`, then `npm run check && npm run build`. Add the downloaded `assets/images/*.jpg` files to Git so the live site has no third-party image dependencies.

## V4 production-demo release notes (October 2026)
- Canonical SEO domain is `https://joyce-ndehi-company-advocates.vercel.app/` (the existing Vercel production alias). A custom `.co.ke` domain is not configured; replace the domain in the generator, sitemap, and robots once purchased and connected.
- The interactive map on `/contact` uses OpenStreetMap, centered on Kiambu Town. **It is an area view, not a verified pin for Telcom Exchange House.** The adjacent Google Maps link searches the full supplied address and remains visible if the embed is blocked. Confirm the office's exact location before placing a marker.
- Replaced the sliding contact rail with one accessible green WhatsApp button linking to the verified existing contact number.
- SEO includes unique page titles and descriptions, canonical URLs, social share cards, LegalService/WebSite/WebPage structured data, breadcrumb markup on inner pages, sitemap, robots, and noindex for error pages.
- The contact form uses `mailto:` intentionally and will only work when the visitor has an email application configured. An operational server-side form requires a verified mailbox/form provider and consent/privacy review.
- For launch: approve firm text, address and all service claims; verify the map pin; test external contact links and mobile sizes; confirm Google Search Console property (and a verified Google Business Profile if appropriate). Check the deployment is the intended branch and never merge into `main` until the owner approves.
