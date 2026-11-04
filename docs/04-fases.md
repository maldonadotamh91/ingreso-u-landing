# Plan por fases

Cada fase termina con algo que se puede publicar y usar. No empieces una fase sin terminar y revisar la anterior.

## Fase 1 · Landing estática
HTML, CSS y JavaScript. Secciones en `03-landing-fase-1.md`. Botones a WhatsApp con mensaje según el botón y el nivel elegido. Publicación en un hosting estático gratuito o barato (decidir con el dueño antes de publicar).

**Listo cuando:** se ve bien en celular y computadora, todos los botones abren WhatsApp con su mensaje, y no queda ningún `[POR CONFIRMAR]` sin resolver.

## Fase 2 · Testimonios filtrables
Página `/aceptados` que lee `data/testimonios.json` y filtra por nivel (prepa o facultad) y por área: salud, ingenierías, económico-administrativas, sociales y humanidades, ciencias exactas, agropecuarias. Un enlace como `/aceptados?area=salud` muestra primero esa área. Así, en WhatsApp se manda un link en lugar de 12 imágenes. Agregar un testimonio es agregar una entrada al JSON.

## Fase 3 · Diagnóstico en línea
Examen de diagnóstico corto que el alumno resuelve en la página y que se califica solo. Muestra el puntaje frente al puntaje de referencia de su meta y termina con el botón para apartar lugar en la sesión muestra. Aquí ya se necesita guardar resultados: se decide con el dueño si es una hoja de cálculo, un formulario externo o una base de datos.

## Fase 4 · Plataforma
Perfiles con usuario y contraseña:
- **Administrador:** alumnos, grupos, pagos, testimonios y resultados.
- **Maestro:** grupos, asistencia y resultados de sus alumnos.
- **Alumno:** material, calendario, simulacros y su progreso.

Esta fase requiere servidor, base de datos, inicio de sesión seguro y, si se cobra en línea, una pasarela de pagos. Antes de empezarla, propón al dueño una arquitectura sencilla y su costo mensual, y espera su aprobación. Aquí es donde más conviene la revisión del programador.
