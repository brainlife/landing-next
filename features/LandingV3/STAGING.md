# Staging the new landing page for collaborator feedback

Production is GitHub Pages at https://brainlife.github.io/landing-next/, deployed from `main` by
`.github/workflows/deploy.yml`. The staging copy uses the same mechanism in a **fork**, so collaborators
see the real build — real Geist font, real publication clips playing — at a URL that cannot touch
production. Nothing in `brainlife/landing-next` changes until you merge.

## One-time setup (about five minutes)

1. Fork `brainlife/landing-next` to your own account (GitHub → Fork; include all branches is
   not needed).
2. From your local clone of the main repo, apply the branch and push it to the fork:

       git am brainlife-landing-v3.patch                  # or: git fetch brainlife-landing-v3.bundle landing-v3:landing-v3
       git remote add staging https://github.com/<you>/landing-next.git
       git push staging landing-v3

3. In the fork: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. In the fork: **Actions** tab → enable workflows if GitHub asks → "Deploy preview (fork only)" runs on
   the push (or press *Run workflow*). It fetches live publications and Apps, builds with
   `NEXT_PUBLIC_PREVIEW=1`, and deploys.

The preview is then at **https://<you>.github.io/landing-next/** — same base path as production,
so the build is byte-for-byte what production would be.

## What collaborators see

- A bar at the top: "Preview build · not the live site", the hero and logo pair they are looking at,
  *Shuffle logo pair*, *Next hero*, and **Leave feedback →**, which opens a pre-filled GitHub issue in
  the main repo (label `landing-v3`) with the hero/pair/URL already noted. Create the `landing-v3` label
  once in brainlife/landing-next so the issues group.
- The page is `noindex, nofollow`, so the preview does not end up in search results.
- `#field`, `#lens`, `#ruler` pin a hero; `?pair=redorange` (any pair name without spaces) pins a pair.

## Iterating

Every push to `landing-v3` in the fork redeploys the preview in a few minutes. When you are satisfied,
open a PR from the fork's `landing-v3` to `brainlife/landing-next:main`; merging triggers the
normal production deploy. The preview workflow is inert in the production repository (it checks the
repository name), so merging it does no harm.

## Safety notes

- The production workflow is unchanged and still deploys only from `main`.
- The fork needs no secrets: the brainlife API endpoints used are public.
- If the API is unreachable from Actions, the build keeps the committed snapshot and still deploys.
