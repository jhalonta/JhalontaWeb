# Sitio Informativo — Vite + Vue + Tailwind

## Comandos
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura por tipos
```
src/
  assets/
    styles/tailwind.css
  api/            # datos o llamadas HTTP
  configs/        # config del sitio (marca, redes, etc.)
  components/     # componentes Vue
  hooks/          # composables (useX)
  lib/            # utilidades genéricas
  services/       # servicios externos (email, etc.)
  states/         # estado global simple
  utils/          # helpers puros
```

Edita `src/configs/siteConfig.js` con tu marca y enlaces.
