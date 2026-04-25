# kwantumZero

Personal site at **[kwantumzero.com](https://kwantumzero.com)** — a Vite + React + TypeScript resume site with a markdown-powered blog, hosted on AWS, deployed via GitHub Actions on every push to `main`.

This repo doubles as a portfolio piece. The site itself is the front door; the `infra/` folder provisions the entire production environment with Terraform, and `.github/workflows/` automates deploys with no long-lived AWS credentials.

## Architecture

GitHub (push to main)
│
▼
GitHub Actions  ──(OIDC)──▶  AWS IAM Role
│                              │
│  npm run build               │  s3:PutObject
▼                              ▼  cloudfront:CreateInvalidation
dist/  ───────────────▶  S3 (private bucket)
│
▼  Origin Access Control
CloudFront (HTTPS, SPA fallback)
│
▼
Route53 alias  ──▶  kwantumzero.com

## Stack

**Frontend**
- Vite + React 18 + TypeScript with React Router
- Markdown-driven blog — drop a `.md` file into `src/posts/`, it renders
- `three` + `@react-three/fiber` for the 50k-particle vortex background
- Zero component libraries — plain CSS variables, every pixel owned

**Infrastructure (AWS)**
- **S3** — private bucket, blocked from public access
- **CloudFront** — CDN with HTTPS, SPA fallback for client-side routing, Origin Access Control to S3
- **ACM** — TLS certificate (us-east-1, DNS-validated)
- **Route53** — apex + www alias records
- **AWS Budgets** — $5/month alert as a guardrail

**CI/CD & IaC**
- **Terraform** — one-shot infra provisioning, ~15 resources
- **GitHub Actions** — build + deploy on push to `main`
- **OIDC federation** — short-lived credentials only, zero AWS access keys stored in GitHub

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production build into dist/
npm run preview      # serve the production build locally
```

## Project layout
kwantumZero/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Build + deploy on push to main
├── infra/                          # Terraform — full AWS stack
│   ├── providers.tf
│   ├── variables.tf
│   ├── main.tf                     # S3, CloudFront, ACM, Route53, Budget
│   ├── oidc.tf                     # GitHub OIDC provider + IAM role
│   └── outputs.tf
├── public/
└── src/
├── App.tsx                     # Route definitions
├── main.tsx                    # Entry
├── components/
│   ├── Layout.tsx              # Shared shell (nav + background)
│   ├── QuantumBackground.tsx   # Three.js vortex
│   ├── SideNav.tsx             # Section indicator on landing
│   └── TopNav.tsx              # Resume / Blog navigation
├── sections/                   # Landing-page sections
│   ├── Hero.tsx
│   ├── Certifications.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── BlogTeaser.tsx          # Recent-posts strip on landing
│   └── Footer.tsx
├── routes/                     # React Router pages (blog index + post)
├── posts/                      # ✏️ Markdown blog posts go here
│   └── 2026-04-15-hello.md
├── lib/
│   └── posts.ts                # Loads + parses markdown via Vite glob import
├── data/
│   └── resume.ts               # ✏️ Resume content — single source of truth
└── styles/
└── global.css              # Theme tokens

## Where to edit

**Resume content** — `src/data/resume.ts`. Update `profile`, `certifications`, `experience`, `projects`, `skills`. Section components consume it.

**Blog posts** — drop a markdown file into `src/posts/`. Filename convention: `YYYY-MM-DD-slug.md`. Frontmatter (title, date, summary, tags) is parsed by `src/lib/posts.ts` at build time. No CMS, no database, no rebuild step beyond `npm run build`.

**Theme tokens** — `--bg`, `--accent`, `--font-display`, etc. in `src/styles/global.css`.

**The vortex** — `src/components/QuantumBackground.tsx`. Audio engine from the reference theme is preserved as a commented block; drop `kwantum.mp3` / `ambient-dark.mp3` into `public/` to re-enable.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow:

1. Checkout + Node 20 setup
2. `npm ci && npm run build`
3. Assume AWS role via OIDC (no static keys)
4. `aws s3 sync dist/ s3://kwantumzero.com --delete`
5. CloudFront cache invalidation on `/*`

End-to-end deploy time: ~2 minutes including cache propagation. **Writing a new blog post = `git push`. That's the entire publishing pipeline.**

## Reproducing this infrastructure

If you fork this repo to host your own site:

```bash
cd infra
# Edit variables.tf — set your domain, bucket name, GitHub repo path
terraform init
terraform plan
terraform apply
```

Then add the two outputs (`github_actions_role_arn`, `cloudfront_distribution_id`) to your GitHub repo as `AWS_ROLE_ARN` and `CF_DISTRIBUTION_ID` secrets.

**Prerequisites:** AWS account, domain registered in Route53, AWS CLI configured locally.

## Cost

Approximately **$0.50/month** at low traffic — Route53 hosted zone is the only fixed cost. CloudFront's always-free tier (1 TB egress + 10M requests) covers personal site traffic indefinitely. Budget alert at $5 for safety.

## Design notes

Two intentional deviations from the reference theme:

1. **No autoplay audio.** Recruiters open sites in quiet offices; autoplaying ambient tracks is a fast way to get tab-closed. Audio code preserved in comments behind a future mute toggle.
2. **`position: fixed` on the canvas** instead of `absolute`, so the vortex stays put while content scrolls. `pointerEvents: "none"` lets clicks pass through.

## License

MIT