# Datenschutz-Schulung — MS Direct Group

Interaktive Datenschutz-Schulungs-Web-App für die MS Direct Group (Projekt: Direct2Future).
Duolingo-artiges Erlebnis mit 5 Modulen zum Schweizer DSG, Gamification und Abschlusszertifikat.

## Tech Stack

| Technologie | Einsatz |
|---|---|
| Next.js 15 (App Router) | Frontend + API Routes |
| TypeScript | Typsicherheit |
| Tailwind CSS v4 | Styling |
| Neon Serverless Postgres | Datenbank |
| Drizzle ORM | DB-Zugriff & Migrationen |
| Vercel | Deployment |

## Setup lokal

```bash
# 1. Repository klonen
git clone https://github.com/danizh910/Datenschutz-schulung.git
cd datenschutz-schulung

# 2. Abhängigkeiten installieren
npm install

# 3. Umgebungsvariablen konfigurieren
cp .env.local.example .env.local
# Trage deinen Neon DATABASE_URL in .env.local ein

# 4. Datenbanktabellen erstellen
npx drizzle-kit push

# 5. Entwicklungsserver starten
npm run dev
```

Die App läuft auf [http://localhost:3000](http://localhost:3000).

## Neon DB Setup

1. Account anlegen auf [neon.tech](https://neon.tech)
2. Neues Projekt erstellen (Region: us-east-1 empfohlen)
3. Connection String kopieren: `postgresql://user:pass@host/neondb?sslmode=require`
4. In `.env.local` als `DATABASE_URL` eintragen
5. `npx drizzle-kit push` ausführen — erstellt die 3 Tabellen automatisch

## Vercel Deployment

1. Repository auf GitHub pushen
2. [vercel.com/new](https://vercel.com/new) → GitHub Repository verbinden
3. Umgebungsvariable setzen:
   - Key: `DATABASE_URL`
   - Value: dein Neon Connection String
4. Deploy klicken — fertig!

## Ordnerstruktur

```
datenschutz-schulung/
├── app/
│   ├── page.tsx                  # Landing: Name eingeben
│   ├── schulung/page.tsx         # Modulübersicht + Fortschritt
│   ├── modul/[id]/page.tsx       # Lerninhalt + Quiz pro Modul
│   ├── abschluss/page.tsx        # Badge + Zertifikat
│   └── api/
│       ├── user/route.ts         # POST: User anlegen
│       ├── progress/route.ts     # GET + POST: Fortschritt
│       └── quiz/route.ts         # POST: Quiz-Antwort speichern
├── components/
│   ├── ProgressBar.tsx           # Fortschrittsbalken
│   ├── ModuleCard.tsx            # Modul-Kachel
│   ├── QuizQuestion.tsx          # Quiz-Frage (single/multi)
│   └── FeedbackBanner.tsx        # Richtig/Falsch Feedback
├── lib/
│   ├── db.ts                     # Neon DB Verbindung
│   └── schema.ts                 # Drizzle Schema (users, progress, quiz_answers)
├── data/
│   └── modules.ts                # Alle 5 Module mit Lerninhalten + Quiz
└── drizzle.config.ts             # Drizzle Kit Konfiguration
```

## Module

| # | Titel | Typ |
|---|---|---|
| 1 | Einführung in den Datenschutz | Lernen + Quiz |
| 2 | Personendaten und Kategorien | Lernen + Quiz |
| 3 | Risiken und sicherer Umgang | Lernen + Quiz |
| 4 | Pflichten und Meldewege | Lernen + Quiz |
| 5 | Abschlussquiz | Nur Quiz |

## Features

- Kein Login — userId via localStorage
- Mobile-First Design (min. 48px Touch-Targets)
- Gamification: Punkte pro Modul, Gesamtpunktzahl, Abschlusszertifikat
- Single + Multi-Choice Quiz mit sofortigem Feedback
- Fortschritt wird in Neon Postgres persistiert
- Module sequenziell freischalten
