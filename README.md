# 🎮 GamerDaybook

Marco Carollo's personal resume, built as a video game main menu. Press start, explore a menu styled like a tabletop game box, and either play through the resume as story chapters or skip straight to a plain, complete CV.

_Italiano: [README.it.md](./README.it.md)_

## ✨ What it is

- **Home** — press-start gate → main menu
- **New Game** — work history as narrative chapters, unlocked one dice roll at a time
- **About Me** — skills, education, strengths, languages
- **Contact** — a form that emails Marco directly
- **Passions** — Pokémon, tabletop RPGs, board games _(work in progress)_
- **Quick View** (`/cv`) — the whole resume on one plain page, no game required

## 🧱 How it's built

**`web/`** — Vite · React 19 · TypeScript · React Router 7 · Motion · SCSS Modules
**`server/`** — a single Cloudflare Worker (TypeScript) that emails contact form submissions via Resend

Components are organized by [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/):

```
web/src/
  atoms/       icons, ProgressBar, SectionHeading, Toast, TypewriterText, StarfieldBackground
  molecules/   MenuItem, DiceReveal, SkillBar, ChapterCard, ContactLink, PassionCard...
  organisms/   HomeMenu, ChapterTimeline, ContactForm, SkillGroupList, PassionsGrid...
  templates/   PageShell, PlainPageShell
  pages/       the routes — thin, just assemble templates + organisms + data
  data/        CV content, duplicated per language (cv.en.ts / cv.it.ts)
  state/       GameStateProvider (save file) and small hooks
  i18n/        en.ts / it.ts translation dictionaries
```

## 🚀 Running it

**Web app**

```bash
cd web
npm install
cp .env.example .env
npm run dev
```

**Contact function**

```bash
cd server
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

**Production build**

```bash
cd web
npm run build
```
