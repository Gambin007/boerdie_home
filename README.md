# bördie: Website & E-Learning

Website zum Major Project **bördie**, einem digitalen Golf-Caddie auf Basis eines
neuro-symbolischen Empfehlungssystems.

> **Für die Abgabe zählt vor allem das E-Learning.**
> Es liegt unter [`/e-learning`](https://boerdie.ch/e-learning) und ist der
> Prüfungsgegenstand (Creative Studio 3: Research and Practice). Landing- und
> Demo-Seite bilden den Rahmen, in dem der Kurs steht.

## Live

| Seite | URL | Zweck |
|---|---|---|
| **E-Learning** | **https://boerdie.ch/e-learning** | **Abgabe-Gegenstand:** interaktiver Klick-Kurs, 8 Kapitel, ca. 15 Min |
| Landing | https://boerdie.ch | Produktauftritt der App |
| Demo | https://boerdie.ch/demo | Klickbare App-Tour (praktische Vorarbeiten) |

## Das E-Learning

Ein interaktiver Klick-Kurs statt einer Scroll-Seite: Man arbeitet sich kapitelweise
durch, mit Fortschrittsanzeige, Übungen und einem Caddie-Spiel.

**Thema:** Wie aus Spielerdaten über eine deterministische Regel-Engine und ein
Sprachmodell eine begründete Schlägerempfehlung entsteht.

**Aufbau (8 Kapitel):**

1. Start & Kontext: Lernziele, Problemstellung, Marktvergleich
2. Architektur: die drei Schichten, echte Rechenbeispiele, Prompt-Aufbau
3. Entstehung: wie der Prototyp gebaut wurde
4. Learnings: vier übertragbare Lektionen
5. Reflexion: Kolbs Erfahrungslernzyklus, am Projekt gespiegelt
6. Caddie-Spiel: die Regel-Engine selbst anwenden
7. Quellen: acht kommentierte Fachquellen (Harvard)
8. Fazit: Takeaways und Ausblick

**Didaktischer Rahmen:** Kolb (1984), Constructive Alignment (Biggs & Tang, 2011),
Micro-Learning, Retrieval Practice durch Quizze mit Sofort-Feedback.

**Interaktive Elemente:** Fortschritts-Header mit klickbaren Kapiteln, drei Quizze,
drei Loch-Situationen zum Selberlösen, Glossar-Tooltips für Golf-Fachbegriffe
(die Zielgruppe spielt nicht zwingend Golf).

### Wichtig zum Reifegrad

Der Kurs zeigt bewusst einen **Zwischenstand, kein fertiges Produkt**. Die Regel-Engine
läuft als **Version 1**: Sie rechnet mit Distanz, Streuung, Handicap und Stroke-Index.
Wind, Lie und Hindernisse sind im Code angelegt, aber noch nicht mit Daten versorgt.
Diese Einschränkung ist an mehreren Stellen im Kurs ausgewiesen und darf beim Bearbeiten
nicht wegretuschiert werden.

## Lokal starten

Voraussetzung: Node.js 20 oder neuer.

```bash
npm install
npm run dev
```

Die Seite läuft dann auf http://localhost:4321, das E-Learning unter
http://localhost:4321/e-learning

### Weitere Befehle

```bash
npm run build     # statischer Build nach dist/
npm run preview   # den Build lokal ansehen
npm run check     # Astro- und TypeScript-Check
```

Vor jedem Commit sollten `npm run check` und `npm run build` fehlerfrei durchlaufen.

> **Hinweis bei Style-Problemen im Dev-Modus:** Astros HMR wird nach grösseren
> Änderungen an scoped `<style>`-Blöcken manchmal inkonsistent, Styles greifen dann
> scheinbar nicht. Dev-Server neu starten, bevor man mit der Fehlersuche beginnt.

## Struktur

```
src/
  pages/
    e-learning.astro     ← der Kurs (Abgabe-Gegenstand)
    index.astro          Landing
    demo.astro           App-Tour
  components/
    AppDemo.astro        iPhone-Mockup mit 4 klickbaren Screens
    PhoneMockup.astro    statisches iPhone-Mockup
    HoleGraphic.astro    Golfloch-Illustrationen (SVG)
    Nav.astro / Footer.astro
  layouts/Layout.astro   Grundgerüst, Fonts, Meta
  styles/global.css      Design-Tokens und Basis-Styles
public/
  logo/ video/ favicon.svg
```

Das E-Learning ist bewusst **eine einzelne Datei**: Inhalt, Logik und Styles liegen
zusammen in `src/pages/e-learning.astro`. Für einen Kurs dieser Grösse ist das
übersichtlicher als eine Aufteilung in Dutzende Komponenten.

## Technik

- **Astro** (statischer Output, kein JavaScript-Framework im Frontend)
- Interaktivität in **Vanilla TypeScript** direkt in den Seiten
- Eigenes Design-System über CSS-Variablen, keine UI-Bibliothek
- Schrift: Poppins (dieselbe wie im bördie-Logo)

### Konventionen

- **Kein `any`** in TypeScript. Typen ausschreiben statt Prüfungen abschalten.
- Farben und Abstände über die Variablen aus `global.css`, keine Hex-Werte im Markup.
- Deutsche Texte. **Keine Gedankenstriche** („–") im Fliesstext, stattdessen Komma,
  Doppelpunkt oder Punkt. Bei Zahlenbereichen wie `S. 9459–9474` ist er korrekt.
- Anzeigename ist **bördie**, technische Bezeichner nutzen die ASCII-Form `boerdie`.

## Deployment

Statischer Build, deploybar ohne weitere Konfiguration:

```bash
npm run build   # erzeugt dist/
```

Der Ordner `dist/` kann direkt auf Vercel, Netlify oder jeden Webspace. Die Domain
**boerdie.ch** muss bis zum Abgabedatum auf diesen Build zeigen, damit die Seite
online erreichbar ist.

## Assets

Logos, Video und Bilder stammen aus `../boerdie-assets/Media/` und sind in `public/`
kopiert. Die Golf-Fotos sind von Unsplash und im digitalen Anhang der Arbeit nach
Harvard zitiert.

## Verwandte Projekte

- `../boerdie-app`: Expo/React-Native-App und Express-Backend mit der Regel-Engine
- `../boerdie-assets`: Logos, Videos, Prototypen
