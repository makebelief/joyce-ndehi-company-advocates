# Joyce Ndehi website — production-demo verification

## Implemented
- Canonical domain uses the existing production alias: https://joyce-ndehi-company-advocates.vercel.app/
- Secondary Vercel team alias redirects to the canonical host on production (verify HTTP 308 after merging). Preview URLs are not redirected.
- SEO: unique page titles and descriptions, canonical tags, social cards (1200×630), favicon and manifest, crawlable HTML, Kiambu location, LegalService / WebSite / WebPage structured data, BreadcrumbList for inner pages, sitemap and robots. Error pages have `noindex`.
- Contact: floating green WhatsApp button, no sliding rail; telephone and email links retained elsewhere.
- Map: OpenStreetMap iframe of central Kiambu Town, visible attribution, link to exact-text Google Maps directions query, and text address always visible as a fallback. A verified office pin was not supplied.
- Security: Vercel CSP extended to allow the OSM frame; existing security headers preserved.

## Before the owner merges the preview branch into production
1. Open each navigation route at mobile, tablet and desktop widths. Verify the menu, practice areas, phone and WhatsApp links and all images.
2. Check the `/contact` embed on an actual internet-connected browser. If the OSM provider is blocked, the Google Maps directions link and address remain accessible. Confirm precise map location with the firm before placing an office pin.
3. Confirm all published service claims, Joyce Ndehi professional profile, address and office contacts against the firm's approval.
4. Test the contact form: it intentionally prepares a draft in the visitor's mail client; it does not send via a backend.
5. When the branch preview is approved, merge the reviewed SHA into `main`, check Vercel production is READY, and verify 200 responses for canonical URLs, favicon, and sitemap, plus 308 from the secondary alias.
6. Submit the sitemap in Google Search Console for the canonical URL; verify Google Business Profile with the actual firm owner where appropriate. Search visibility and indexing are not immediate or guaranteed.
7. If a custom domain is later purchased, connect it first, then change canonical and OG URLs, redirects, `robots.txt`, sitemap and structured data to that verified domain before publication.

## Limits
No authoritative location coordinates for Telcom Exchange House have been supplied or independently verified. The OSM view is the town centre rather than an office marker. Neither Google indexing nor exact map provider uptime can be guaranteed.
