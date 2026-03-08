# Studia MVP

Comparador de programas tech en LATAM creado con **React + Vite + TypeScript + TailwindCSS + HashRouter**, listo para desplegarse en GitHub Pages sin backend.

## Funcionalidades

- Home con hero, buscador y filtros.
- Cards comparables por modalidad, precio, duración y nivel.
- Página de detalle por programa.
- Página de Nosotros (misión, visión, propuesta de valor).
- Página de Instituciones aliadas (mock grid).
- Formulario de lead en modal.
- Guardado de leads en `localStorage`.
- Exportación de leads a CSV.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

- Se usa `HashRouter`, por lo que no requiere rewrites.
- `vite.config.ts` incluye `base: '/CursosIA2026/'` para publicar en este repo.
