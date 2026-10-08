# MarkLeeWebsite
Website for Mark R. Lee — markrlee.com

## Status: redesign in progress (preview deployment)
The redesign is published to a temporary GitHub Pages address for review.
The live site at markrlee.com is still served from the original repo
(github.com/LittleJon5/MarkLeeWebsite) and is not affected by this repo.

## Go-live checklist
- [ ] Remove every `<meta name="robots" content="noindex, nofollow">` line (marked "PREVIEW ONLY")
- [ ] In `index.html`, change `og:url` and `og:image` from `https://angielee2.github.io/markrlee-preview/` to `https://markrlee.com/`
- [ ] Re-add a `CNAME` file containing `markrlee.com`
- [ ] Release the domain from the old repo (its Settings → Pages), then set it on this repo
- [ ] Confirm HTTPS is enforced and every page loads at markrlee.com
