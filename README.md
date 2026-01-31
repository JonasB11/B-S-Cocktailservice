"# B&S-Cocktailservice

Eine moderne React-Website für den B&S-Cocktailservice.

## Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18 oder höher)
- npm (wird mit Node.js installiert)

## Installation

```bash
cd react-app
npm install
```

## Entwicklung starten

```bash
npm run dev
```

Die Website ist dann unter `http://localhost:5173` erreichbar.

## Build für Produktion

```bash
npm run build
```

Die fertigen Dateien werden im `dist/` Ordner erstellt.

## Projektstruktur

```
react-app/
├── public/             # Statische Dateien (Logo, Manifest)
├── src/
│   ├── components/     # Wiederverwendbare Komponenten
│   │   └── Navbar.jsx
│   ├── pages/          # Seiten-Komponenten
│   │   ├── Home.jsx
│   │   └── Impressum.jsx
│   ├── App.jsx         # Haupt-App-Komponente mit Routing
│   ├── main.jsx        # React Entry Point
│   └── *.css           # Stylesheets
├── index.html          # HTML Template
├── package.json        # Dependencies und Scripts
└── vite.config.js      # Vite Konfiguration
```

## Technologien

- [React](https://react.dev/) - UI Library
- [React Router](https://reactrouter.com/) - Client-side Routing
- [Vite](https://vitejs.dev/) - Build Tool
- [Beer CSS](https://www.beercss.com/) - CSS Framework
" 
