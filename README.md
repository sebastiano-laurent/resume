# CV Web - Sebastiano Laurent

## Avvio in locale
```bash
cd /Users/sebastiano/Documents/Lavoro/CV/Web
python3 -m http.server 8080
```
Apri [http://localhost:8080](http://localhost:8080).

## Pubblicazione su GitHub Pages
1. Commit e push dei file aggiornati sul repository.
2. In GitHub: `Settings -> Pages`.
3. Seleziona branch di publish (tipicamente `main`) e cartella root (`/`) o `Web/` in base al repo.
4. Verifica URL pubblico: [https://sebastiano-laurent.github.io/cv/](https://sebastiano-laurent.github.io/cv/).

## Dove modificare i contenuti principali
- Struttura e SEO base: `/Users/sebastiano/Documents/Lavoro/CV/Web/index.html`
- Contenuti IT/EN e sezioni CV: `/Users/sebastiano/Documents/Lavoro/CV/Web/script.js` (oggetto `cvData`)
- Design e responsive/print: `/Users/sebastiano/Documents/Lavoro/CV/Web/styles.css`
