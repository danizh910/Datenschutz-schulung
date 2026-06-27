# Datenschutz-Schulung — MS Direct Group

Interaktive Datenschutz-Schulungs-Web-App für die MS Direct Group (Projekt: Direct2Future).
Duolingo-artiges Erlebnis mit 7 Modulen zum Schweizer DSG, Gamification und Abschlusszertifikat.

## Tech Stack

| Technologie | Version | Einsatz |
|---|---|---|
| Next.js (App Router) | 16.2.6 | Frontend + API Routes |
| React | 19 | UI |
| TypeScript | 5 | Typsicherheit |
| Tailwind CSS | v4 | Styling |
| Neon Serverless Postgres | – | Datenbank |
| Drizzle ORM | 0.45 | DB-Zugriff & Migrationen |
| Framer Motion | 12 | Animationen |
| Vercel | – | Deployment |

## Setup lokal

```bash
# 1. Repository klonen
git clone https://github.com/danizh910/Datenschutz-schulung.git
cd Datenschutz-schulung

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

## Umgebungsvariablen

| Variable | Beschreibung |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL Connection String (mit `?sslmode=require`) |

Beispiel `.env.local`:
```
DATABASE_URL=postgresql://user:pass@host/neondb?sslmode=require
```

## Neon DB Setup

1. Account anlegen auf [neon.tech](https://neon.tech)
2. Neues Projekt erstellen
3. Connection String kopieren: `postgresql://user:pass@host/neondb?sslmode=require`
4. In `.env.local` als `DATABASE_URL` eintragen
5. `npx drizzle-kit push` ausführen — erstellt die 3 Tabellen automatisch

## Datenbankschema

Drei Tabellen:

| Tabelle | Inhalt |
|---|---|
| `users` | `id` (UUID), `name`, `created_at` |
| `progress` | `id`, `user_id`, `module_id`, `completed`, `score` (0–100), `completed_at` |
| `quiz_answers` | `id`, `user_id`, `module_id`, `question_index`, `is_correct`, `answered_at` |

## Vercel Deployment

1. Repository auf GitHub pushen
2. [vercel.com/new](https://vercel.com/new) → GitHub Repository verbinden
3. Umgebungsvariable setzen:
   - Key: `DATABASE_URL`
   - Value: Neon Connection String
4. Deploy klicken

## Projektstruktur

```
├── app/
│   ├── page.tsx                  # Landing: Name eingeben
│   ├── schulung/page.tsx         # Modulübersicht + Fortschritt
│   ├── modul/[id]/page.tsx       # Lerninhalt + Quiz pro Modul
│   ├── abschluss/page.tsx        # Zertifikat
│   ├── handout/page.tsx          # Druckbares Handout (DE)
│   └── api/
│       ├── user/route.ts         # POST: User anlegen
│       ├── progress/route.ts     # GET + POST: Fortschritt
│       └── quiz/route.ts         # POST: Quiz-Antwort speichern
├── components/                   # UI-Komponenten
├── data/
│   ├── modules.de.ts             # Modulinhalte Deutsch (Referenzsprache)
│   ├── modules.en.ts             # Englisch
│   ├── modules.fr.ts             # Französisch
│   ├── modules.it.ts             # Italienisch
│   ├── modules.es.ts             # Spanisch
│   ├── modules.pt.ts             # Portugiesisch
│   ├── modules.pl.ts             # Polnisch
│   ├── modules.hr.ts             # Kroatisch
│   └── modules.cs.ts             # Tschechisch
├── lib/
│   ├── db.ts                     # Neon DB Verbindung (lazy singleton)
│   ├── schema.ts                 # Drizzle Schema
│   ├── locale-context.tsx        # Sprachauswahl Context
│   └── i18n/                     # UI-Übersetzungen (9 Sprachen)
└── drizzle.config.ts
```

## Module

| # | Titel | Typ |
|---|---|---|
| 1 | Einführung in den Datenschutz | Lernen + Quiz |
| 2 | Grundsätze des Datenschutzes | Lernen + Quiz |
| 3 | Rechte der betroffenen Personen | Lernen + Quiz |
| 4 | Pflichten des Unternehmens und der Mitarbeitenden | Lernen + Quiz |
| 5 | IT-Sicherheit und Datenschutz | Lernen + Quiz |
| 6 | Interne Ansprechpartner und Meldestellen | Lernen + Quiz |
| 7 | Abschlussquiz | Nur Quiz |

## Unterstützte Sprachen

Deutsch (Referenz), Englisch, Französisch, Italienisch, Spanisch, Portugiesisch, Polnisch, Kroatisch, Tschechisch

## Gespeicherte Daten

Die App verarbeitet und speichert folgende Daten:

| Datenkategorie | Speicherort | Zweck |
|---|---|---|
| Name (Klartext) | Neon DB + localStorage | Identifikation, Zertifikat |
| User-ID (UUID) | Neon DB + localStorage | Fortschrittszuordnung |
| Modulfortschritt + Score | Neon DB | Lernstand, Zertifikat |
| Quiz-Antworten (richtig/falsch) | Neon DB | Auswertung |

**Keine** Cookies werden gesetzt. **Keine** Tracking-Skripte. Videos werden über `youtube-nocookie.com` eingebettet.

Es gibt keine Funktion zum Löschen der eigenen Daten. Benutzer können die Schulung durch Löschen der localStorage-Einträge (`userId`, `userName`) zurücksetzen; die serverseitigen Daten bleiben gespeichert.

## Tests und Build

```bash
# TypeScript prüfen
npx tsc --noEmit

# Lint
npm run lint

# Produktions-Build
npm run build
```

Es gibt keine automatisierten Unit- oder Integrationstests.

## Bekannte Einschränkungen

- Das Handout (`/handout`) ist nur auf Deutsch verfügbar, unabhängig von der gewählten Sprache.
- Die Übersetzungen für Polnisch (PL), Kroatisch (HR) und Tschechisch (CS) wurden maschinell erstellt und nicht durch Muttersprachler mit Datenschutz-Fachkenntnissen geprüft.
- Es gibt keine Möglichkeit, Benutzerdaten über die App zu löschen (kein Self-Service-Datenlöschung).
- Das Zertifikat zeigt eine statische Zeit von „~20 min" und ist kein rechtlich anerkanntes Dokument.
- Die Kontaktangaben des Datenschutzbeauftragten (Myrio Kluser, myrio.kluser@qmart.ch) müssen durch den Auftraggeber bestätigt und aktuell gehalten werden.
- Das GoodPrivacy-Zertifikat (SQS) wurde in der App erwähnt, konnte aber nicht extern verifiziert werden.
