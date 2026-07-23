# Deploying the Progressive AI Lab site to progressiveailab.org

This folder (`progressive-ai-lab/`) is the complete, production-ready website for the
Progressive AI Lab. It is currently staged inside the `higherground.institute` repository so
you can preview it, but its real home is its own domain, **progressiveailab.org**.

Because a GitHub Pages repository can only serve one custom domain, and this repo's domain slot
is already used by `higherground.institute`, the Lab site needs **its own repository**. This
guide walks through moving it there and pointing the domain. Every internal link and asset path
in the site is relative, so the folder's contents drop into a new repo root with no edits.

The canonical URLs, Open Graph tags, sitemap, and CNAME are already set to `progressiveailab.org`,
so once the domain is live the SEO signal is correct with no further changes.

---

## Preview it now (optional)

Once this branch is merged and GitHub Pages rebuilds, the staging copy is viewable at:

  https://higherground.institute/progressive-ai-lab/

Note: on the staging URL the canonical tags point to `progressiveailab.org` (by design). Do not
submit the staging URL to search engines. Wait until the real domain is live.

---

## Step 1: Register the domain

Register **progressiveailab.org** with any registrar (Namecheap, Google Domains/Squarespace,
Cloudflare, etc.). If it is taken, decide on the final domain first, then update the hard-coded
`https://progressiveailab.org/...` values in the HTML `<head>` blocks, `sitemap.xml`, `llms.txt`,
and `CNAME` to match before deploying.

## Step 2: Create the new repository

1. Create a new GitHub repo, for example `progressive-ai-lab` under the
   `Higher-Ground-Institute` org (any name works with a custom domain).
2. Copy the **contents** of this `progressive-ai-lab/` folder into the **root** of the new repo
   (not the folder itself). The new repo root should contain `index.html`, `about/`, `programs/`,
   `assets/`, `CNAME`, `robots.txt`, `sitemap.xml`, `llms.txt`, `favicon.svg`, etc.

   ```
   # from a clone of the new repo, with this folder available:
   cp -r /path/to/progressive-ai-lab/. .
   git add .
   git commit -m "Add Progressive AI Lab website"
   git push
   ```

## Step 3: Enable GitHub Pages

1. In the new repo: **Settings -> Pages**.
2. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The included `CNAME` file already contains `progressiveailab.org`, so GitHub will set the
   custom domain automatically. Confirm it appears under **Custom domain**.

## Step 4: Point DNS at GitHub Pages

At your registrar's DNS settings for progressiveailab.org:

**Apex domain (progressiveailab.org)** - add four `A` records:

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

(Optionally also add the matching `AAAA` records for IPv6:
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)

**www subdomain** - add a `CNAME` record:

```
CNAME   www   <your-org-or-user>.github.io.
```

DNS can take from a few minutes to 48 hours to propagate.

## Step 5: Enforce HTTPS

Back in **Settings -> Pages**, once the domain resolves, check **Enforce HTTPS**. GitHub
provisions a free certificate automatically (may take up to an hour after DNS resolves).

## Step 6: Submit to search engines (the SEO priority)

1. **Google Search Console** (https://search.google.com/search-console): add
   `progressiveailab.org` as a property, verify (DNS TXT record is easiest), then submit
   `https://progressiveailab.org/sitemap.xml`.
2. **Bing Webmaster Tools** (optional): same process; you can import from Search Console.
3. Use the URL Inspection tool to request indexing of the home page and each key route.
4. Validate structured data with Google's Rich Results Test
   (https://search.google.com/test/rich-results) for the home page (Organization + FAQPage) and
   a couple of inner pages.

## Step 7: Build authority with cross-links (recommended)

To help the new domain rank for "Progressive AI Lab" quickly, add links to
`https://progressiveailab.org/` from properties you already control:

- The Higher Ground Institute site (`higherground.institute`) - link the phrase
  "Progressive AI Lab" to the new domain.
- AI Campaign Stack (`aicampaignstack.org`) - add a footer or about link.
- Higher Ground Labs and Cooperative Impact Lab pages that mention the Lab.
- Social profiles (LinkedIn) and the newsletter.

Consistent naming plus inbound links from these trusted sites is the fastest path to owning the
brand in both traditional search and AI answer engines.

---

## What is already handled for you

- Per-page unique titles, meta descriptions, and canonical URLs.
- Open Graph and Twitter card tags per page.
- JSON-LD structured data: Organization + WebSite + FAQPage (home), AboutPage, ItemList
  (programs, resources), ContactPage, and BreadcrumbList on inner pages.
- `robots.txt` welcoming AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
  and referencing the sitemap.
- `sitemap.xml` listing all seven routes.
- `llms.txt` giving AI engines a plain-text map of the site and the brand's key facts.
- Static HTML, so all content is visible to crawlers that do not run JavaScript.

## If you change the domain later

Search and replace `https://progressiveailab.org` across `*.html`, `sitemap.xml`, and `llms.txt`,
and update the `CNAME` file. Internal navigation and assets are relative and need no changes.
