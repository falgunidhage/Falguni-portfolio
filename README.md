# Falguni Portfolio

A responsive, multi-page portfolio for Falguni, a full-stack web and software developer. It is built with plain HTML, CSS, and JavaScript and does not require a package manager or build step.

## Pages

- **Home** (`index.html`): Introduction, developer profile, highlights, and quick stats.
- **About** (`about.html`): Background, education, and development approach.
- **Skills** (`skills.html`): Technical skills with interactive category filters.
- **Contact** (`contact.html`): Contact details and a message form.

The contact page's information is also available in [`contact.md`](./contact.md).

## Project structure

```text
.
├── index.html
├── about.html
├── skills.html
├── contact.html
├── contact.md
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Run locally

No dependencies need to be installed. Open `index.html` in a browser, or start a local server from the project directory:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Features

- Responsive portfolio pages with shared navigation and styling.
- Dark visual theme with gradient accents, glass-style cards, and responsive layouts.
- Mobile navigation toggle and automatic active-page link highlighting.
- Client-side skill category filtering.
- Google Fonts typography using Plus Jakarta Sans and Fira Code, with local fallback fonts.

## Notes

- The contact form is currently presentation-only; no backend or form submission service is configured.
- The home page links to `projects.html`, but that page is not currently included in the project.
- Google Fonts are loaded from Google Fonts when an internet connection is available.
