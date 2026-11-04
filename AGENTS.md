<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Business info and toggles live in `src/config/site.ts`; pages must read from it rather than hardcoding contact details.
- All form notifications go through the single `submitInquiry` server function so Telegram secrets stay server-side.
- Serve the approved wordmark from `public/zaptask-wordmark.png` through the shared `Logo` component, with its matching letterform icons at `public/favicon.png` and `public/apple-touch-icon.png`; replace the set together. Keep branding self-hosted so external deployments such as Vercel do not depend on Lovable-only asset URLs.
