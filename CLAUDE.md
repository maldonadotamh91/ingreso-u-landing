# Ingreso U · Landing y plataforma

Ingreso U es un negocio de asesorías para el examen de admisión a preparatoria y licenciatura de la UANL, en Monterrey, presencial y en línea. Este repositorio contiene su página web, que se construye por fases: primero una landing estática y después una plataforma con perfiles de administrador, maestro y alumno.

El dueño no programa: Claude Code hace el desarrollo y más adelante un programador revisará, corregirá y hará los ajustes finales. Por eso el código debe ser simple, ordenado y fácil de entender para otra persona.

## Lee primero

- `docs/00-contexto-completo.md`: todo el contexto del proyecto: historia de la marca, decisiones, ceremonia de ventas por WhatsApp con sus mensajes, riesgos y pendientes. Léelo al iniciar.
- `docs/01-negocio-y-embudo.md`: cómo vende el negocio y qué debe lograr la página.
- `docs/02-marca.md`: colores, tipografías, logos y voz. Obligatorio antes de tocar estilos o textos.
- `docs/03-landing-fase-1.md`: secciones y textos de la landing.
- `docs/04-fases.md`: el plan completo por fases.
- `docs/05-datos-pendientes.md`: datos que el dueño debe confirmar.

## Reglas del proyecto

### Tecnología (fase 1)
- HTML, CSS y JavaScript sin frameworks ni proceso de compilación. Que se pueda abrir `index.html` directamente en el navegador.
- Un archivo `index.html`, estilos en `css/` y scripts en `js/`. Los colores y tamaños salen de `css/tokens.css`; no escribas colores sueltos en otros archivos.
- Tipografías desde Google Fonts: Oswald (titulares) y Montserrat (texto).
- Imágenes en `assets/`. Logos siempre desde `assets/logos/` (SVG); nunca redibujes el logo.
- Diseño primero para celular (la mayoría llega desde anuncios de Facebook e Instagram), y que también se vea bien en computadora.
- Accesible: contraste suficiente, textos alternativos en imágenes, navegable con teclado.
- Rápida: imágenes optimizadas y sin librerías pesadas.
- Código y comentarios claros; nombres de clases en español o inglés, pero consistentes.

### Contenido
- Ingreso U prepara para el examen de admisión a preparatoria y licenciatura de la UANL. El nombre de la marca es Ingreso U.
- Si falta un dato, deja un marcador visible como `[POR CONFIRMAR: …]` y anótalo en `docs/05-datos-pendientes.md`.
- Español de México, en segunda persona ("tú"), frases cortas.

### Cómo trabajar
- Trabaja por fases y por secciones pequeñas. Al terminar cada sección, dime qué cambió y cómo verla.
- Antes de decisiones difíciles de revertir (cambiar de tecnología, contratar un servicio, publicar), pregúntame.
- Usa git desde el inicio con commits pequeños y mensajes claros en español.
- Mantén actualizado `docs/05-datos-pendientes.md` y un `README.md` que explique cómo abrir y publicar el sitio.
