
# Camp Plitka Draga — Vite + React + SCSS (HR/EN)

Gotov osnovni front-end s komponentama, placeholder slikama i HR/EN language switcherom.

## Pokretanje
Napomena: 
Da biste pokrenuli npm install, morate biti u root folderu projekta (glavnom direktoriju) 
gdje se nalazi package.json datoteka.
Koraci:
Otvorite terminal (PowerShell, CMD, Git Bash, itd.)
Idite u folder projekta (gdje je package.json):
cd C:\putanja\do\projekta\CampPlitkaDraga
Pokrenite instalaciju:

bash
npm install
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Struktura
- `src/components` — Header, Navigation, Hero, Gallery, Accommodation, ContactForm, Footer, LanguageSwitcher
- `src/context/LanguageContext.jsx` — upravljanje jezikom (HR/EN) + `localStorage`
- `src/data/translations.js` — tekstovi za HR i EN
- `src/styles` — SCSS varijable, mixini i globalni stilovi
- `src/assets/images` — placeholder slike (zamijeni svojim)

## Promjena sadržaja
- Tekst mijenjaš u `src/data/translations.js`
- Slike mijenjaš u `src/assets/images` (promijeni nazive ili putanje u komponentama po želji)
- Dodatne sekcije lako dodaš kao novu komponentu i dodaš prijevode u `translations.js`

## Dodavanje jezika
1. U `translations.js` dodaj novi ključ (npr. `de`).
2. U `LanguageSwitcher.jsx` prilagodi prikaz (ili dodaj dropdown).
3. Nema reload-a — promjena jezika radi preko React state-a.

## Napomena
Kontakt forma ima demo submit (console.log). Zamijeni s pravim endpointom (fetch/axios) po potrebi.

