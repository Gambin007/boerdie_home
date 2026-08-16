# Bördie: Website & E-Learning

Website zum Major Project **Bördie**, einem digitalen Golf-Caddie auf Basis eines
neuro-symbolischen Empfehlungssystems.

> **Für die Abgabe zählt vor allem das E-Learning.**
> Es liegt unter [`/e-learning`](https://boerdie.ch/e-learning) und ist der
> Prüfungsgegenstand (Creative Studio 3: Research and Practice). Landing- und
> Demo-Seite bilden den Rahmen, in dem der Kurs steht.

**Autor:** Noé Schertenleib  
**Studiengang:** BSc Web Development, SAE Institute Zürich  
**Modul:** Creative Studio 3: Research and Practice (6FSC0WD102)  
**Betreuung:** Samuel Radvilla (Tutor), Hasan Atak (Fachexperte)  
**Stand:** 19.08.2026

## Live

| Seite | URL | Zweck |
|---|---|---|
| **E-Learning** | **https://boerdie.ch/e-learning** | **Abgabe-Gegenstand:** interaktiver Klick-Kurs, 8 Kapitel, ca. 15 Min |
| Landing | https://boerdie.ch | Produktauftritt der App |
| Demo | https://boerdie.ch/demo | Klickbare App-Tour (praktische Vorarbeiten) |

> **Falls die Live-Seite nicht erreichbar ist:** Der Kurs läuft vollständig ohne
> Internetverbindung. Repository klonen, `npm install`, `npm run dev`, dann
> http://localhost:4321/e-learning öffnen. Alle Inhalte, Quizze und das Caddie-Spiel
> funktionieren lokal identisch, es werden keine externen Dienste aufgerufen.

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

## Einordnung in das Major Project

Das E-Learning gehört zu den praktischen Vorarbeiten und ist in der schriftlichen Arbeit
in Kapitel 2.2 dokumentiert. Der fachliche Gegenstand, das neuro-symbolische
Empfehlungssystem, ist in Kapitel 1.1 und 2.1 hergeleitet. Der weitere Ausbau ist im
Prozessdesign in Kapitel 3 sowie im separaten Projektplan geplant.

Inhalte, die in mehreren Dokumenten vorkommen, etwa Phasenzahl, Zielkatalog oder die
Datenlage mit 118 importierten und 3 vollständig hinterlegten Plätzen, müssen mit der
schriftlichen Arbeit übereinstimmen. Bei Änderungen am Kurs bitte gegenprüfen.

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
npm run zip       # Abgabe-ZIP erzeugen (ohne node_modules, dist, .git, .astro)
```

Das ZIP landet als `boerdie-website-abgabe.zip` eine Ebene über dem Projektordner.
Es enthält alles, was zum Bauen nötig ist: Nach dem Entpacken genügen `npm install`
und `npm run dev`.

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
- Schrift: Poppins (dieselbe wie im Bördie-Logo)

**Barrierefreiheit:** Die Glossar-Tooltips sind tastaturbedienbar (`tabindex`, sichtbarer
Fokusring), der Kapitel-Stepper ist mit `aria-label` beschriftet, Diagramme tragen eine
Textalternative über `role="img"` und `aria-label`. Farben erfüllen den WCAG-AA-Kontrast,
Animationen respektieren `prefers-reduced-motion`. Bei einem Lernprodukt ist das kein
Beiwerk, sondern Teil der Qualität.

### Konventionen

- **Kein `any`** in TypeScript. Typen ausschreiben statt Prüfungen abschalten.
- Farben und Abstände über die Variablen aus `global.css`, keine Hex-Werte im Markup.
- Deutsche Texte. **Keine Gedankenstriche** („–") im Fliesstext, stattdessen Komma,
  Doppelpunkt oder Punkt. Bei Zahlenbereichen wie `S. 9459–9474` ist er korrekt.
- Anzeigename ist **Bördie**, technische Bezeichner nutzen die ASCII-Form `boerdie`.

## Deployment

Statischer Build, deploybar ohne weitere Konfiguration:

```bash
npm run build   # erzeugt dist/
```

Der Ordner `dist/` kann direkt auf Vercel, Netlify oder jeden Webspace. Die Domain
**boerdie.ch** muss bis zum Abgabedatum auf diesen Build zeigen, damit die Seite
online erreichbar ist.

## Assets

Alle verwendeten Medien liegen vollständig im Projekt (`public/` und `src/assets/`).
Das Projekt ist damit eigenständig lauffähig und benötigt keine Nachbarordner. Die
Originaldateien werden separat im Asset-Repository des Projekts verwaltet.

| Asset | Herkunft | Lizenz |
|---|---|---|
| Logo, Wortmarke | eigene Gestaltung | eigenes Werk |
| Schrift **Poppins** | Google Fonts | SIL Open Font License 1.1, Einbettung erlaubt |
| Hero-Video (`public/video/hero.mp4`) | Pexels, Video-ID 854185 | Pexels-Lizenz, kostenlos auch für kommerzielle Nutzung |
| Golf-Fotos (`src/assets/`) | Unsplash | Unsplash-Lizenz |
| Illustrationen, App-Mockups | eigene Umsetzung in SVG und CSS | eigenes Werk |

Alle externen Medien sind im digitalen Anhang der Arbeit nach Harvard zitiert.

## Hilfsmittel

Bei Entwicklung und Textarbeit kamen KI-gestützte Werkzeuge zum Einsatz (Claude,
ChatGPT, Cursor sowie ein automatisierter Code-Review über GitHub Actions). Konzept,
fachliche Inhalte, Architekturentscheidungen und die didaktische Struktur stammen vom
Autor. Alle fachlichen Aussagen sind über die im Kurs zitierten Quellen belegt.

## Verwandte Projekte

Diese Website ist ein eigenständiges Projekt. Zum Major Project gehören ausserdem zwei
getrennt verwaltete Repositories, die für den Betrieb dieser Seite nicht benötigt werden:

- **boerdie-app**: Expo/React-Native-App und Express-Backend mit der Regel-Engine
- **boerdie-assets**: Originaldateien von Logos, Videos und Prototypen

## Vor der Abgabe prüfen

- [ ] `npm run check` und `npm run build` laufen fehlerfrei durch
- [ ] boerdie.ch, /demo und /e-learning sind öffentlich erreichbar
- [ ] Kurs vollständig durchgeklickt, alle Quizze und das Caddie-Spiel funktionieren
- [ ] Auf Mobilgerät geprüft, mindestens Safari iOS und Chrome
- [ ] Inhalte stimmen mit der schriftlichen Arbeit und dem Projektplan überein
- [ ] Quellenangaben im Kurs vollständig, Zugriffsdatum aktuell
