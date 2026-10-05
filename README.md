# TravelTrackerCompanion Public Legal & Documentation System

Centralized, multilingual public legal and documentation repository for **TravelTrackerCompanion**, hosted via GitHub Pages.

## URL & Path Structure

Centralized Base URL: `https://traveltrackercompanion.github.io/traveltrackercompanion-web/` or `https://legal.traveltrackercompanion.app/`

### Canonical Path Mapping

For each of the 18 supported languages (`en`, `ar`, `de`, `es`, `fr`, `hi`, `id`, `it`, `ja`, `ko`, `pl`, `pt`, `ru`, `th`, `tr`, `ur`, `vi`, `zh`):

- **Hub**: `/{lang}/`
- **Privacy Policy**: `/{lang}/privacy/`
- **Terms of Service**: `/{lang}/terms/`
- **Refund Policy**: `/{lang}/refunds/`
- **Subscription & Billing**: `/{lang}/subscriptions/`
- **Account & Data Deletion**: `/{lang}/account-deletion/`
- **Data Export**: `/{lang}/data-export/`
- **Open Source Licenses**: `/{lang}/licenses/`
- **About & Methodology**: `/{lang}/about/`

## Repository Features

1. **Zero Tracking**: No analytics, third-party trackers, or marketing pixels.
2. **Mobile-First & Accessible**: Clean responsive layout, high contrast, text-scaling support, and native dark mode (`prefers-color-scheme`).
3. **Machine-Readable Manifest**: `manifest.json` provides automated document versioning and route mapping for application consumption.
4. **Language Selector**: Seamless language switching on every document page preserving document context.
5. **GitHub Actions Workflow**: Automated deployment pipeline (`.github/workflows/deploy.yml`) enforcing JSON and HTML integrity.

## Editing & Updating Documents

1. Edit the authoritative HTML document in the appropriate `/<lang>/<doc>/index.html`.
2. Update `manifest.json` document version and effective date if legal terms or privacy policies change materially.
3. Commit and push to `main` or `master`. GitHub Actions will automatically validate and deploy to GitHub Pages.
