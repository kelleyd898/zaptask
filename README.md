# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Zaptask LLC website

Built on TanStack Start (React 19 + Vite + TypeScript + Tailwind v4, file-based routing, Lucide icons).

- Business details, address placeholder, legal placeholders and portfolio toggle: `src/config/site.ts`
- Services content: `src/data/services.ts`
- Contact + booking forms post to the server function in `src/lib/notify.functions.ts`, which validates input, applies a honeypot / timing check and a per-IP rate limit, then sends a Telegram message.

### Setup
1. `bun install` then `bun run dev`
2. Copy `.env.example` to `.env` and set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` (server-only, never `VITE_`).
3. In Lovable, add the same two values as project secrets before publishing.
