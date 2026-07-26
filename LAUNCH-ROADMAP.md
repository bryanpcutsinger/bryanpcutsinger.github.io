# Website Launch Roadmap

This file is the durable record of website work that is planned but not yet
implemented. Keep incomplete items here instead of publishing placeholder claims
or nonfunctional controls on the live site.

## Launch definition

The site is ready for public launch when:

- search-engine `noindex` directives have been removed from both the marketing
  pages and the `/ai/` guide;
- the speaking inquiry form submits successfully without relying on the
  visitor's local email application;
- analytics and conversion events have been verified;
- page titles, descriptions, canonical URLs, social-sharing images, structured
  data, `robots.txt`, and the sitemap have been checked;
- Google Search Console has been verified and the sitemap submitted;
- the site has passed desktop, mobile, keyboard, form, and production-build
  checks.

## Confirmed decisions (2026-07-19)

- Public domain: `bryancutsinger.com` (already owned)
- DNS provider: Squarespace Domains
- Analytics provider: Plausible Analytics
- Speaking-inquiry recipient: `bryanpcutsinger@gmail.com`
- Primary audiences: business associations, financial institutions, chambers
  of commerce, universities, policy organizations, donor groups, and civic
  organizations
- Availability: local, national, and virtual; travel expenses are additional to
  the speaking fee
- Public fee language: omit it
- Newsletter/subscription program: deferred until there is a clear editorial
  promise and realistic cadence; it is not a launch blocker
- Testimonials: none yet; keep the planned component hidden rather than
  publishing filler

## Speaking content

- [x] Confirm the three signature subjects:
  - Current U.S. macroeconomic outlook
  - Regional economic conditions in South Florida
  - Monetary policy
- [x] Add an audience, format, outcome, and short description for each subject.
- [x] Remove the current non-macro signature topics for now.
- [x] Replace the homepage's long biographical introduction with shorter,
  audience-focused positioning copy.
- [x] Use a stage photograph in the primary speaking presentation where it
  improves conversion.
- [ ] Create and add a downloadable speaker one-sheet.
- [ ] Add a short speaking video or reel when one is available.
- [x] State that local, national, and virtual engagements are available and that
  travel expenses are additional, without publishing fee ranges.
- [x] Establish regional authority with Bryan's quarterly *South Florida
  Economic Outlook Report*, covering Broward, Miami-Dade, and Palm Beach
  counties: `https://business.fau.edu/south-florida-economic-report/`.

## Booking

- [ ] Create a Web3Forms account/access key or select another approved form
  endpoint.
- [x] Wire the GitHub Pages build to read `PUBLIC_WEB3FORMS_ACCESS_KEY` from a
  repository secret so the key is not committed to source.
- [ ] Replace the current `mailto:` fallback with direct form submission.
- [x] Reduce the initial inquiry form to the minimum information needed to reply.
- [ ] Add spam protection, success/error states, and a confirmation message.
- [x] Send inquiries to `bryanpcutsinger@gmail.com` through the form; do not
  present email as the primary booking path.
- [ ] Track `booking_form_start`, `booking_form_submit`, and primary speaking CTA
  clicks in analytics.
- [ ] Test the complete inquiry flow on desktop and mobile.

## Email subscriptions (deferred; not a launch blocker)

- [ ] Select and create the newsletter provider account.
- [ ] Define the newsletter name, promise, frequency, and sender identity.
- [ ] Configure the sender address/domain and required postal-address footer.
- [ ] Enable confirmed/double opt-in.
- [ ] Add subscription forms to the homepage and Writing page.
- [ ] Create confirmation, welcome, unsubscribe, and privacy language.
- [ ] Import any existing subscribers only with a valid permission record.
- [ ] Track successful subscription conversions.

## Testimonials and proof

- [x] Keep the testimonial component/data structure reserved but hidden while no
  authorized testimonials exist.
- [x] Do not publish invented quotations, anonymous filler, or a visible
  "testimonials coming soon" message.
- [ ] Add verified publication/outlet proof to the homepage now.
- [x] Add verified past speaking venues as proof without implying an
  endorsement or testimonial:
  - FAU Research Park
  - Chamber of Commerce of the Palm Beaches
  - Greater Boca Raton Chamber of Commerce
  - Creighton University
  - University of Texas at El Paso (UTEP)
  - Wabash College
  - College of Charleston
  - Salve Regina University
  - Florida Southern College
- [ ] Request named testimonials from future hosts and record permission to
  publish the name, title, organization, and quotation.

## SEO and sharing

- [ ] Remove both `noindex, nofollow` implementations at public launch.
- [ ] Add `robots.txt` and confirm the generated sitemap is public.
- [ ] Verify the site in Google Search Console and submit the sitemap.
- [ ] Create a default 1200x630 social-sharing image and appropriate page-level
  variants.
- [ ] Review every page title, H1, and meta description for one clear search
  intent without keyword stuffing.
- [ ] Expand structured data from the current `Person` record to the appropriate
  `WebSite` and page types.
- [ ] Check canonical URLs, internal links, image alternative text, and branded
  404 behavior.
- [ ] Establish a small content plan around Bryan's genuine expertise rather
  than publishing search-first filler.

## Analytics

- [x] Select Plausible Analytics.
- [x] Add the Plausible site script to the shared marketing layout and
  Starlight configuration so every generated page is measured exactly once.
- [ ] Publish an accurate privacy notice and, if required by the chosen setup,
  consent controls.
- [ ] Measure page views, referral sources, speaking CTA clicks, successful
  booking inquiries, subscription conversions, CV/one-sheet downloads, and
  outbound writing links.
- [ ] Exclude development/preview traffic and verify production events.
- [ ] Record a monthly review habit: traffic sources, top landing pages, search
  queries, and conversion counts.

## Navigation, design, and accessibility

- [ ] Simplify the primary navigation and decide whether `/ai/` is labeled
  "AI," "Guides," or moved to secondary navigation.
- [ ] Finish migrating Teaching pages to the current public-economist design
  system; then remove legacy styling/components.
- [ ] Improve mobile-menu focus management, Escape-to-close behavior, and focus
  restoration.
- [ ] Keep hidden spam controls out of the accessibility tree.
- [ ] Add a compact footer sitemap and booking/contact path.

## Decisions needed from Bryan

- Verify the Plausible installation after the updated site is deployed.
- Create the Web3Forms access key and add it to GitHub Actions as
  `PUBLIC_WEB3FORMS_ACCESS_KEY`; decide whether to publish a reply-time promise.
- Add the GitHub Pages DNS records in Squarespace Domains.
- Verified proof that may be published (outlets, venues, affiliations, titles)
