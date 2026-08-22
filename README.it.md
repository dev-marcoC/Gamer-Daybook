# 🎮 GamerDaybook

Il curriculum personale di Marco Carollo, costruito come il menu principale di un videogioco. Premi start, esplora un menu in stile scatola di un gioco da tavolo, e scegli se giocare il curriculum come capitoli di una storia oppure andare dritto a un CV semplice e completo.

_English: [README.md](./README.md)_

## ✨ Cos'è

- **Home** — schermata "premi start" → menu principale
- **Nuova Partita** — il percorso lavorativo come capitoli narrativi, sbloccati un dado alla volta
- **Chi Sono** — competenze, formazione, punti di forza, lingue
- **Contatti** — un form che invia un'email direttamente a Marco
- **Passioni** — Pokémon, giochi di ruolo, giochi da tavolo *(work in progress)*
- **Vista Rapida** (`/cv`) — l'intero curriculum su un'unica pagina semplice, senza gioco

## 🧱 Com'è fatto

**`web/`** — Vite · React 19 · TypeScript · React Router 7 · Motion · SCSS Modules
**`server/`** — un singolo Cloudflare Worker (TypeScript) che invia via email i messaggi del form di contatto tramite Resend

I componenti sono organizzati secondo l'[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/):

```
web/src/
  atoms/       icone, ProgressBar, SectionHeading, Toast, TypewriterText, StarfieldBackground
  molecules/   MenuItem, DiceReveal, SkillBar, ChapterCard, ContactLink, PassionCard...
  organisms/   HomeMenu, ChapterTimeline, ContactForm, SkillGroupList, PassionsGrid...
  templates/   PageShell, PlainPageShell
  pages/       le rotte — sottili, assemblano solo template + organismi + dati
  data/        contenuti del CV, duplicati per lingua (cv.en.ts / cv.it.ts)
  state/       GameStateProvider (salvataggio) e piccoli hook
  i18n/        dizionari di traduzione en.ts / it.ts
```

## 🚀 Come si esegue

**Sito web**

```bash
cd web
npm install
cp .env.example .env
npm run dev
```

**Function di contatto**

```bash
cd server
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

**Build di produzione**

```bash
cd web
npm run build
```