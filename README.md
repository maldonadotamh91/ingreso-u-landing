# Ingreso U · Landing

Página web de Ingreso U, negocio de asesorías para el examen de admisión a preparatoria y licenciatura de la UANL.

## Cómo abrir el sitio

No requiere instalación ni servidor. Abre `index.html` directamente en cualquier navegador.

## Estructura de archivos

```
ingreso-u-landing/
├── index.html          ← página principal
├── css/
│   ├── tokens.css      ← colores y medidas (no editar directamente)
│   └── estilos.css     ← estilos de la landing
├── js/
│   ├── config.js       ← número de WhatsApp y mensajes (editar aquí)
│   └── main.js         ← comportamiento: selector de nivel, FAQ, botón flotante
├── data/
│   └── testimonios.json ← estructura para la Fase 2 (testimonios filtrables)
├── assets/
│   ├── logos/          ← logos en SVG (nunca redibujar)
│   ├── iconos/         ← favicon e íconos de app
│   └── marca/          ← manual de identidad e imagen para compartir
└── docs/               ← contexto, marca, contenido y pendientes
```

## Datos por confirmar

Ver `docs/05-datos-pendientes.md` para la lista completa. Los datos faltantes aparecen como `[POR CONFIRMAR: …]` en la página.

El más urgente: el número de WhatsApp en `js/config.js`.

## Cómo publicar

Fase 1 es HTML estático: se puede subir a cualquier hosting (GitHub Pages, Netlify, Hostinger…). No requiere servidor ni base de datos.

## Fases

1. **Landing estática** (esta carpeta) — HTML, CSS, JS sin frameworks.
2. Testimonios filtrables por nivel y área desde `data/testimonios.json`.
3. Diagnóstico en línea con calificación automática.
4. Plataforma con perfiles de administrador, maestro y alumno (requiere servidor y base de datos).
