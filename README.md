# Mark R. Lee — website

The website for Mark R. Lee, expert witness and consulting attorney: **markrlee.com**.

It is a single page (`index.html`) styled by one stylesheet (`site.css`). There is no build step and nothing to install. Edit a file, push it, and the site updates.

- Preview address: https://angielee2.github.io/markrlee-preview/
- Live address (after launch): https://markrlee.com/

## Making a change

1. Open `index.html` in VS Code and edit the text (see "Where things are" below).
2. To preview locally, double-click `index.html` to open it in a browser.
3. Commit and push. GitHub publishes the change automatically.
4. Check it went live (see below).

Mark's source documents (CV drafts, case write-ups, publication lists) are kept **outside** this folder in `..\MarkLee-private\`. Never copy `.doc`/`.docx` files or drafts into this folder: anything here is published publicly.

## Where things are in `index.html`

Each section starts with a `<section id="...">` line. Search for the id to jump to it.

| On the page | Search for | Notes |
|---|---|---|
| Name and subtitle, top left | `class="brand"` | |
| Opening headline and paragraph | `class="hero"` | |
| The four boxes under the opening | `class="creds"` | One `<li>` per box |
| What His Clients Say | `id="clients"` | One `<blockquote>` per testimonial. The one with `class="lead"` is shown full width |
| Litigation Successes | `id="litigation"` | One `<article class="case">` per case. The Shields quote is the `pull-quote` at the top |
| Transactional Successes | `id="transactional"` | Cases, then the Organizing Businesses cards (`class="org"`) |
| Sample Retentions | `id="retentions"` | Four boxes, in page order: upper left, upper right, lower left, lower right |
| About | `id="about"` | One `<p>` per paragraph |
| Publications | `id="publications"` | Books, then Articles, then Additional Publications |
| Contact section and footer | `id="contact"`, `class="site-footer"` | Email address appears in both |
| Menu at the top | `class="site-nav"` | Keep the menu in the same order as the sections on the page |

**To add a case**, copy an existing `<article class="case"> … </article>` block, paste it where it should appear, and change the text. The `<dt>`/`<dd>` pairs are the small labels on the left (Practice area, Role, Retained by). Include only the ones that apply.

**To replace the CV**, save the new PDF over `mark-lee-resume-update.pdf` with exactly the same name, then commit and push.

**Colors and fonts** are set at the top of `site.css` (the `:root` block).

## Checking that a change is live

- Go to https://github.com/AngieLee2/markrlee-preview/actions. Each push shows a "pages build and deployment" run: yellow = still building, green check = live, red X = failed.
- Then reload the site. If the change doesn't show, refresh with Ctrl+F5 (the browser may be showing a saved copy).

## Other files

| File | Purpose |
|---|---|
| `404.html` | Branded "page not found" page for any missing address |
| `cases.html`, `business.html`, `contact.html`, `resume.html` | Old pages from the previous site, now redirects to the matching section, so old links still work |
| `mockups/` | Old design-mockup links, redirecting to the homepage |
| `design-options/` | The three original design drafts, kept so people can give feedback. Not listed by search engines |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser-tab and phone home-screen icons |
| `images/share-card.jpg` | Image shown when the link is shared by email, text, or LinkedIn |
| `robots.txt`, `sitemap.xml` | Help search engines find the site |

## Launch checklist

- [x] Remove the homepage's no-index tag
- [ ] LittleJon5 removes `markrlee.com` from **LittleJon5/MarkLeeWebsite → Settings → Pages**, and sets Source to **None**
- [ ] In **AngieLee2/markrlee-preview → Settings → Pages**, set Custom domain to `markrlee.com` and Save (this adds a `CNAME` file; pull it before the next local change)
- [ ] Once the certificate is issued, tick **Enforce HTTPS**
- [ ] Confirm every section loads at https://markrlee.com/

### After getting the domain registrar login
- [ ] At the registrar, point `www` to `angielee2.github.io` (it currently points to `littlejon5.github.io`)
- [ ] Verify the domain in GitHub (account Settings → Pages → Add a verified domain)
- [ ] In `index.html`, change `og:url` and `og:image` from the preview address to `https://markrlee.com/`, and add `<link rel="canonical" href="https://markrlee.com/">`
- [ ] Ask LittleJon5 to delete **LittleJon5/MarkLeeWebsite** (its history contains Mark's private documents)
- [ ] Turn on two-factor authentication for GitHub and the registrar
- [ ] Add the site to Google Search Console and submit `https://markrlee.com/sitemap.xml`
- [ ] Optional: rename this repo from `markrlee-preview` to something permanent
