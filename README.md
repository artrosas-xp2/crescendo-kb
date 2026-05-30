# Hardware Security Key KB

Docusaurus-powered technical documentation site. Sanitized field notes on
diagnosing and recovering enterprise smart card and FIDO2 hardware keys.

## Local development

```bash
# Install dependencies
npm install

# Start the dev server (hot-reload on save)
npm start
```

Visit `http://localhost:3000/kb/` (note the `/kb/` base path — set in
`docusaurus.config.js`).

## Build for production

```bash
npm run build
```

Output goes to `build/`. Static HTML, ready to deploy anywhere.

## Deploy options

### Option 1 — GitHub Pages (cheapest)

```bash
# In docusaurus.config.js, confirm:
# url: 'https://artrosas.com'
# baseUrl: '/kb/'
# organizationName: '<your-github-username>'
# projectName: 'kb'

GIT_USER=<your-github-username> npm run deploy
```

### Option 2 — Cloudflare Pages or Vercel (cleanest)

1. Push this repo to GitHub
2. Connect the repo in Cloudflare Pages / Vercel
3. Build command: `npm run build`
4. Output directory: `build`
5. Point a CNAME from `kb.artrosas.com` (or wherever) to the platform

### Option 3 — Drop on existing artrosas.com infrastructure

```bash
npm run build
# Upload contents of build/ to your existing web host
# under the /kb/ path (or wherever baseUrl points)
```

## Structure

```
docs/
  intro.mdx                    Landing page with card grid
  runbooks/
    lockout-diagnosis.mdx      Main diagnostic runbook
  reference/
    cli-commands.mdx           Command reference organized by capability
    applet-architecture.mdx    Conceptual model of the applets
src/
  css/custom.css               Stripe/Linear-inspired theme overrides
docusaurus.config.js           Site config (URL, baseUrl, theme)
sidebars.js                    Navigation structure
```

## Customization checklist

Before publishing:

1. Replace `static/img/logo.svg` and `static/img/favicon.ico` with your branding
2. Update `docusaurus.config.js`:
   - `url` / `baseUrl` if hosting somewhere other than `artrosas.com/kb/`
   - `organizationName` / `projectName` for GitHub Pages deploy
   - Footer links
3. Add an "Edit this page" link by setting `editUrl` in the docs preset
4. Add Google Analytics or similar if desired (Docusaurus has built-in
   support — see their plugin docs)

## Adding new pages

Drop a new `.mdx` file in `docs/runbooks/` or `docs/reference/` and add
the file path to `sidebars.js`. The frontmatter at the top of each file
controls the title, sidebar position, and description.

## License

Content: CC BY 4.0 — share with attribution.
Code: MIT.
