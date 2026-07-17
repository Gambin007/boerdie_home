# bördie – Website

Marketing-Landingpage für die **bördie**-App plus eine **E-Learning**-Seite (SAE-Coursework).
Eigenständiges Projekt, Sibling zu `boerdie-app` – **nicht** Teil des App-Repos.

## Tech

- [Astro](https://astro.build) (static output, 0 JS by default)
- Helles, sportliches High-Contrast-Theme (Weiss / Schwarz / Fairway-Grün) – Tokens in `src/styles/global.css`.
  Bewusst anders als das dunkle App-Design.
- Fonts via Google Fonts: **Changa One** (Display-Headlines), **Bungee** (Akzent-Labels: Nav, Buttons),
  **Young Serif** (Fliesstext)

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # statischer Build nach dist/
npm run preview    # Build lokal ansehen
npm run check      # Astro + TypeScript Check
```

## Struktur

```
src/
  layouts/Layout.astro      geteiltes HTML-Grundgerüst (Head, Fonts, Nav, Footer)
  components/Nav.astro       Top-Nav (Logo mittig, Links links + rechts)
  components/Footer.astro
  pages/index.astro          Landing (Hero mit Video-Layering, Features, So geht's, Download)
  pages/e-learning.astro     E-Learning (aktuell Stub / Kapitel-Vorschau)
  styles/global.css          Design-Tokens + Basis-Styles
  assets/                    Bilder (werden von astro:assets optimiert)
public/
  logo/                      Logo-SVGs
  video/hero.mp4             Hero-/Demo-Video
  favicon.svg
```

## Assets

Quelle: `../boerdie-assets/Media/`. Logo, Video und Golf-Fotos (Unsplash) sind hierher kopiert.
Unsplash-Bilder bei öffentlicher Nutzung Harvard-zitieren.

## Deployment

Statischer Build (`dist/`) – deploybar auf Vercel oder Netlify ohne weitere Konfiguration.

## Naming

Anzeige: **bördie** (mit Umlaut). Technische Identifier: **boerdie** (ASCII).
