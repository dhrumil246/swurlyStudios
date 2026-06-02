# Swurly Studios

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer)
![GSAP](https://img.shields.io/badge/GSAP-green?logo=greensock)

**Swurly Studios** is a premium, brutalist-styled landing page built for the Minecraft server ecosystem. We help creators and brands grow through striking visual content and robust development.

## ✨ Features

- **Brutalist UI:** A sharp, dark-mode-first aesthetic with high-contrast typography, pixelated noise textures, and smooth animations.
- **High Performance:** Statically generated (SSG) with Next.js App Router. Heavy 3D components (`three.js`) are lazy-loaded dynamically to ensure sub-second initial paint times.
- **Smooth Scrolling:** Integrated with Lenis for buttery-smooth scrolling physics.
- **Discord Integration:** A built-in contact form backed by Zod schema validation that fires directly to a secure Discord Webhook via Next.js API routes.
- **Analytics Ready:** Pre-configured with both **Vercel Web Analytics** (zero-config) and **PostHog** (advanced user tracking).
- **SEO & Security:** Fully loaded with OpenGraph tags, Twitter Cards, `robots.txt`, `sitemap.xml`, and strict HTTP security headers via `vercel.json`.

---

## 🚀 Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/swurly.git
   cd swurly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Copy the example environment file and fill in your keys:
   ```bash
   cp .env.example .env.local
   ```
   *Note: You will need a Discord Webhook URL for the contact form to function locally.*

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🌍 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DISCORD_WEBHOOK_URL` | The secure Discord webhook URL where contact form submissions will be sent. | **Yes** |
| `NEXT_PUBLIC_POSTHOG_KEY` | Your PostHog Project API Key for advanced analytics. | No |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host URL (Defaults to `https://app.posthog.com`). | No |

---

## ☁️ Deployment (Vercel)

This project is meticulously configured for a seamless deployment on [Vercel](https://vercel.com).

1. Push your code to a GitHub repository.
2. Log into the Vercel dashboard and click **Add New Project**.
3. Import your Swurly Studios repository.
4. In the **Environment Variables** section, add your `DISCORD_WEBHOOK_URL` (and PostHog key if utilizing it).
5. Click **Deploy**.

**Security Note:** The included `vercel.json` file will automatically instruct Vercel's Edge Network to inject strict HTTP security headers (HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff) on every request, protecting your site out of the box.

---
*Built with precision for Swurly Studios.*
