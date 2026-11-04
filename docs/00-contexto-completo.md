# Ingreso U · Contexto completo del proyecto

Este documento resume las conversaciones de estrategia que dieron origen al proyecto, del 27 de octubre al 4 de noviembre de 2026: el negocio, la ceremonia de ventas por WhatsApp, la marca, las decisiones tomadas y el plan de la plataforma. Es la fuente de contexto para cualquier persona o agente que trabaje en el repositorio.

Cuando este documento y otro archivo de `docs/` digan cosas distintas, manda el archivo más específico (por ejemplo, `02-marca.md` para colores) y avisa al dueño de la diferencia.

---

## 1. Resumen

- **Qué es:** un negocio de asesorías para el examen de admisión a preparatoria y licenciatura de la UANL, en Monterrey, presencial y en línea.
- **Nombre actual:** **Ingreso U**. Antes se llamó Asesorías CADAH y luego Asesorías UANL (ver sección 2).
- **Cómo vende:** anuncios en Facebook e Instagram que llevan a WhatsApp, donde una asesora (Karla Arriaga) sigue una secuencia de mensajes y lleva al prospecto a una sesión muestra gratuita en línea, donde se cierra la venta.
- **Qué se construye aquí:** primero una landing en HTML que alimenta ese WhatsApp; después testimonios filtrables, un diagnóstico en línea y una plataforma con perfiles de administrador, maestro y alumno.
- **Quién desarrolla:** Claude Code hace todo el desarrollo. Más adelante un programador revisará, corregirá y hará los ajustes finales. El dueño no programa.

---

## 2. Historia de la marca y decisiones

| Etapa | Nombre | Notas |
| --- | --- | --- |
| Original | Asesorías CADAH | Aún aparece en testimonios antiguos ("asesor de CADAH") y en el correo asesoriascadah@gmail.com. |
| Anterior | Asesorías UANL | Logo con la U, "ASESORÍAS UANL" y el descriptor "INGRESO SEGURO A LA UANL". |
| **Actual** | **Ingreso U** | Decidido el 3 de noviembre de 2026. |

Por qué se cambió el nombre:
- "UANL" es el nombre de la universidad; usarlo como marca propia implica riesgo legal y sugiere una afiliación que no existe.
- Las plataformas de anuncios pueden limitar anuncios que usan marcas de terceros en el nombre del anunciante.
- La U, los colores y las tipografías se conservaron, así que el cambio visual es mínimo.
- Se consideraron "Ingreso Asesorías-U" y "Asesorías Ingreso-U". Se eligió **Ingreso U** por corto, fácil de decir y sin guion.

Decisiones vigentes sobre la UANL:
- **La UANL no aparece en el logo ni en el nombre.**
- **Sí se menciona en el texto**, de forma descriptiva: "examen de admisión a preparatoria y licenciatura de la UANL". Esto ayuda a que los papás encuentren la página en Google.
- La web lleva en el pie: "Ingreso U es un servicio independiente de asesorías y no está afiliado a la Universidad Autónoma de Nuevo León (UANL)."
- El descriptor anterior "Ingreso seguro a la UANL" se retiró porque podía leerse como garantía de admisión. El nuevo descriptor es **"ASESORÍAS · EXAMEN DE ADMISIÓN"**.

El dueño pidió quitar de `CLAUDE.md` la lista de prohibiciones de contenido; las irá dando por partes. Las recomendaciones de la sección 10 siguen siendo el criterio sugerido.

---

## 3. El negocio

### Producto y precios

| Modalidad | Precio total | Forma de pago |
| --- | --- | --- |
| Presencial (sucursal) | $4,499 MXN | Inscripción de $499 + 6 pagos semanales |
| En línea ("On-live") | $3,599 MXN | Inscripción de $499 + 6 pagos semanales |

Hay una imagen de precios para prepa y otra para licenciatura. En la presentación de la sesión aparecieron otros precios ("De $4,999 a sólo $3,999" y "De $3,999 a $3,099"); se recomendó usar los mismos precios en todos los materiales. **Confirmar con el dueño cuáles son los vigentes.**

Incluye: curso principal, material por módulos según la carrera, examen de diagnóstico, examen de simulación, curso Pre-Matemáticas, sesiones de repaso, asesoría para el proceso de admisión, paquete de libros, maestros universitarios expertos en la materia, sesiones de manejo de estrés y nervios. En materiales anteriores también aparecen: Power-Class de problemas de examen, curso en línea y paquete de conferencias.

### Grupos y calendario
- Grupo **sabatino** y grupo **entre semana**, que inicia unas 3 semanas después del sabatino. El grupo entre semana funciona como segunda oportunidad para quien no alcanzó el sabatino.
- **Preparatoria:** un examen al año, a mediados de año.
- **Licenciatura:** dos oportunidades al año. El calendario académico de la UANL 2027 está en `https://www.uanl.mx/wp-content/uploads/2026/08/calendario-academico-uanl-2027.pdf` (no se pudo leer automáticamente; pedir las fechas al dueño).
- Por eso hay dos temporadas fuertes de venta al año.

### Cliente
- **Paga:** la mamá o el papá, sobre todo en preparatoria.
- **Decide o empuja:** el alumno (15 a 18 años).
- Los mensajes y la página tienen que convencer a los dos.

### Ventanas de decisión
La compra se decide rápido, a diferencia de un auto o un curso de habilidades:
1. **Inicio de la publicidad:** 10 a 14 días para decidir.
2. **2 a 3 semanas antes del curso:** menos de 7 días.
3. **Arranque del sabatino:** 2 a 3 días.

Datos reales del dueño:
- **2 de cada 3** prospectos responden el saludo automático.
- **El 80%** de las inscripciones se cierra en los primeros 10 días después del primer contacto.
- La venta en frío le funciona bien; el mercado es competido.

### Sucursales y contacto (por confirmar)
- Sucursal central, San Nicolás: Av. Central 734C, Col. Chapultepec.
- Sucursal Mitras Norte: calle Ixtapa, número 507 o 509 (los materiales no coinciden).
- WhatsApp en flyers anteriores: 81 1820 1968.
- Maestro que aparece en la presentación: I.Q. Triunfo Maldonado Herrera.

---

## 4. Ceremonia de ventas por WhatsApp

### Flujo

```
Anuncio → Saludo automático (M1) → Información, precios y testimonios (M2–M4)
  → Invitación a sesión muestra (M5)
      ├─ Sí → nombre → confirmación → recordatorios → SESIÓN → cierre (10% por 2 días hábiles) → inscripción
      ├─ No → (sugerido: una pregunta) → Descartados
      └─ No responde → Pre-S1 → S1 → S2 → Descartados
```

Etiquetas que usa el dueño: **Pre-S1**, **S1** (seguimiento 1), **S2** (seguimiento 2) y **Descartados**. Después de S2 sin respuesta no se da más seguimiento individual: el dueño considera que no vale el tiempo porque el 80% cierra en 10 días.

### Sesión muestra-informativa
- Dos por semana, en Zoom: **miércoles** (para quienes escriben de sábado a martes) y **sábado** (para quienes escriben de miércoles a viernes). Horarios mencionados: miércoles 7:30 pm; sábado 2:00 pm o 12:00 pm (no coinciden; confirmar).
- Estructura de la presentación: 1) información del examen, por separado para prepa y facultad (retos, fechas, puntajes de referencia por escuela y facultad, estructura del examen); 2) clase muestra; 3) cierre de venta con precios, horarios y forma de inscripción; 4) rifa de becas del 50% y 20%.
- Cierre: 10% de descuento a quien se conectó, pagando la inscripción a más tardar el viernes (si la sesión fue el miércoles) o el lunes (si fue el sábado). El plazo existe porque muchos quieren pagar en sucursal y los domingos no abren.
- Recordatorios actuales: un día antes (link de Zoom y confirmación), 3 horas antes y 5 minutos antes.

### Recomendaciones principales que se dieron
1. **Diagnosticar antes de vender:** el saludo pregunta quién escribe (alumno o papá) y a qué prepa o carrera quiere entrar.
2. **El examen de diagnóstico es el gancho más fuerte.** Que el alumno vea su puntaje frente al que pide su meta.
3. **Dos opciones de embudo**, para probar las dos:
   - **A, sin diagnóstico al inicio:** saludo → información y precios → testimonios → invitación.
   - **B, con diagnóstico al inicio:** saludo → diagnóstico gratuito → resultado frente a la meta → información y testimonios → invitación. Mejor en la ventana 1; la A, en la ventana 3.
4. **Precios después del valor:** probar a mandar la invitación antes que los precios.
5. **Testimonios:** 3 o 4 por envío, del área de la carrera del prospecto, con datos difuminados; en el futuro, un link filtrado en lugar de 12 imágenes.
6. **Asistencia:** pedir que vean la sesión juntos el alumno y el papá; agregar un mensaje a los 5–10 minutos de iniciada la sesión para quien no se conectó.
7. **Cierre:** que aparten ese mismo día con la inscripción de $499 por transferencia; el mensaje después de la sesión incluye el puntaje del alumno y los datos de pago. Dentro de los 2 días: un testimonio con la duda más común al día siguiente, y avisos la mañana y la tarde del día límite.
8. **Escasez solo real:** cambiar "últimos lugares" y "81% de ocupación" por el número real de lugares por grupo.
9. **S2:** de las dos opciones del dueño se recomendó la 2 ("¿Tienes alguna duda?"), con una salida que pregunte si es para este examen o el siguiente.
10. **Descartados:** no darlos por perdidos; un solo mensaje masivo en eventos reales (inicio del grupo entre semana, segunda oportunidad de licenciatura, siguiente periodo o hermanos menores).
11. **Rifa:** puede hacer que los que no ganan sientan que pagar completo es mal trato, y en México los sorteos pueden requerir permiso de Gobernación. Alternativa: un bono garantizado, o rifar solo entre quienes se inscriben ese día.
12. **Demasiados descuentos encimados** (precio rebajado, 10% y rifa) restan valor; preferir agregar valor (bonos) a bajar el precio.

El manual completo de la ceremonia, con todos los mensajes corregidos, está en un documento de claude.ai ("Ceremonia de Ventas · Asesorías UANL"); los textos originales están en el Anexo A.

### Evento de preventa
El dueño también hace un evento gratuito de orientación vocacional ("descubre la carrera de tus sueños") con información del examen y diagnóstico. Recomendación: abrir con el problema ("¿todavía no sabe qué carrera elegir?"), dar fecha y hora, prometer algo concreto (perfil de áreas fuertes y carreras afines), ofrecer un precio o bono de preventa a los asistentes y confirmar qué test vocacional se usará.

---

## 5. Testimonios

- Fuente: capturas de WhatsApp con cartas de "Carta de resultado obtenido · ACEPTADO" de alumnos reales y mensajes de agradecimiento de papás. Ejemplos vistos: Medicina Veterinaria y Zootecnia, Criminología, FACPYA, FIME, Arquitectura, Enfermería.
- Reglas: permiso del alumno; difuminar nombre completo, número de registro y teléfono; recortar mensajes automáticos y menciones a otra marca (CADAH).
- Hay 26 facultades y entre 80 y 90 carreras. No se personaliza uno por uno: **se etiqueta** cada testimonio una vez y la página filtra.
- Áreas para agrupar: salud, ingenierías, económico-administrativas, sociales y humanidades, ciencias exactas, agropecuarias. Más el nivel (prepa o facultad).
- Idea de producto: link como `/aceptados?area=salud` que muestra primero esa área, y saber quién abrió el link para darle seguimiento ese día.

---

## 6. Marca

Resumen; el detalle está en `docs/02-marca.md` y en `assets/marca/Manual de identidad - Ingreso U.pdf` (19 páginas).

- **Imagotipo:** la U (símbolo), "INGRESO U" en Montserrat ExtraBold ("INGRESO" y "U" en dos colores) y el descriptor "ASESORÍAS · EXAMEN DE ADMISIÓN".
- **Versiones:** vertical (principal) y horizontal (el símbolo hace de U del nombre), cada una para fondo amarillo, blanco, azul y negro. Símbolo solo en azul y amarillo.
- **Archivos:** SVG vectoriales en `assets/logos/`. El paquete completo (PDF para imprenta, PNG sin fondo, JPG, fotos de perfil, favicon) se entregó aparte como "Ingreso U - Logos.zip".
- **Colores:** amarillo #FFC000, azul #0049E3, azul noche #161C4D, negro, blanco. Nunca texto blanco sobre amarillo.
- **Tipografías:** Oswald (titulares, mayúsculas) y Montserrat (texto). Ambas de Google Fonts.
- **Voz:** como una asesora cercana y concreta; segunda persona; datos en lugar de adjetivos; preguntas de cierre fáciles ("Responde SÍ").
- El símbolo U original se vectorizó a partir de un JPG de 2576 px; para impresión de gran formato conviene compararlo con el archivo original del diseñador, si existe.

---

## 7. Plataforma: plan por fases

Detalle en `docs/04-fases.md`.

1. **Landing estática** (HTML, CSS, JS). Botones a WhatsApp con mensaje según el botón y el nivel. Textos en `docs/03-landing-fase-1.md`.
2. **Testimonios filtrables** por nivel y área, desde `data/testimonios.json`.
3. **Diagnóstico en línea** que se califica solo y compara con el puntaje de la meta.
4. **Plataforma con perfiles:**
   - Administrador: alumnos, grupos, pagos, testimonios, resultados.
   - Maestro: grupos, asistencia, resultados.
   - Alumno: material, calendario, simulacros, progreso.

   Requiere servidor, base de datos, inicio de sesión y, si se cobra en línea, pasarela de pagos. Proponer arquitectura y costo antes de empezar.

Oportunidades de automatización que salieron de la conversación: registro de prospectos con su etapa (Pre-S1, S1, S2, Descartados), recordatorios de sesión, registro de quién abre el link de testimonios, calificación automática del diagnóstico y mensaje masivo a Descartados en eventos.

---

## 8. Métricas que conviene medir

| Etapa | Cálculo | Dato actual |
| --- | --- | --- |
| Respuesta al saludo | responden / prospectos nuevos | 2 de cada 3 |
| Aceptan invitación | dicen SÍ / reciben invitación | Por medir |
| Asistencia | se conectan / dijeron SÍ | Por medir |
| Cierre en sesión | pagan inscripción / asistieron | Por medir |
| Rescate | pagan desde Pre-S1, S1 o S2 / entraron a seguimiento | Por medir |

---

## 9. Pendientes y decisiones abiertas

- Todos los datos de `docs/05-datos-pendientes.md`.
- Precios vigentes (hay diferencias entre flyer y presentación).
- Si la landing mostrará puntajes de referencia por prepa y facultad, y de qué fuente.
- Si se mantiene la rifa o se cambia por un bono.
- Qué test vocacional se usará en el evento de preventa.
- Verificar en el IMPI (Marcanet) que "Ingreso U" esté libre como marca, y asegurar dominio y redes.
- Actualizar el manual en línea (claude.ai), que todavía dice "Asesorías UANL".

---

## 10. Riesgos y criterios recomendados

Ninguna de estas notas es asesoría legal; conviene validarlas con un abogado.

- **Marca de la universidad:** no usar el nombre, escudo, logotipo, mascota ni fotos oficiales de la UANL como propios; mencionarla solo para describir el examen, con la nota de no afiliación.
- **Contenido del examen:** los reactivos del examen (EXANI-II de CENEVAL en licenciatura) son confidenciales. Decir "material con la misma estructura y nivel del examen", no "contenido real" ni "reactivos que se aplicaron".
- **Garantías:** no prometer el ingreso ("te garantizamos tu ingreso"); puede considerarse publicidad engañosa.
- **Datos personales:** difuminar datos de los testimonios y pedir permiso; la web necesita aviso de privacidad porque recibe datos de contacto.
- **Sorteos:** la rifa de becas puede requerir permiso de la Secretaría de Gobernación.
- **Imágenes:** nada de personajes con derechos de autor ni imágenes con marca de agua.
- **Escasez:** solo con datos reales.
- **Datos inventados:** no publicar testimonios, cifras, puntajes, fechas ni direcciones sin confirmar.

---

## 11. Archivos generados

| Archivo | Dónde |
| --- | --- |
| Este kit (`ingreso-u-landing`) | Repositorio del proyecto |
| Manual de identidad - Ingreso U.pdf | `assets/marca/` |
| Ingreso U - Logos.zip | Entregado aparte (SVG, PDF, PNG, JPG, perfil, favicon y guía de uso) |
| Ceremonia de Ventas · Asesorías UANL | Documento en claude.ai, privado del dueño |
| Manual de identidad en línea | Página en claude.ai, aún con la marca anterior |

---

## Anexo A · Mensajes originales de la ceremonia

Textos tal como los usaba el dueño antes de las recomendaciones. Sirven de referencia de tono y para plantillas futuras. Los nombres de marca son los anteriores.

**M1 · Saludo automático**
> ¿Te gustaría ver a tu hijo(a) ingresar a la *Universidad Autónoma de Nuevo León*?🐯 ¡Nuestro Curso Asesorías UANL es justo lo que necesitas! 🎓
> Te saluda Karla Arriaga, asesor para Ingreso a la UANL🙋‍♀️; te estaré apoyando en este proceso de preparación para tu hijo(a)
> Compárteme por favor
> ✔¿Con quién tengo el gusto? 🙋🏻‍♂🙋🏻‍♀️
> ✔¿Sería para preparatoria o facultad?

**M2 · Propuesta de valor** (con imagen "¡Tu lugar en la UANL… inicia con nosotros!")
> Para sentir la tranquilidad de lograr ingresar a la UANL🏆.
> Te ofrecemos:
> 1️⃣*Maestros de la UANL para la UANL*👩🏻‍🏫
> 2️⃣*Plan de pagos accesibles*📅
> 3️⃣*Sucursales en puntos estratégicos*📍
> 👉🏻 Te garantizamos contenido real y actualizado del examen de admisión
> Con nuestro programa te garantizamos que tendrás las herramientas y la seguridad para tener éxito en el difícil examen de admisión. 💪📄

**M3 · Qué incluye y precios** (con imagen de precios por nivel)
> Incluye⬇️: ✅ Curso Asesorías UANL ✅ Material de Módulos por carrera ✅ Examen de diagnóstico ✅ Examen de simulación ✅ Curso Pre-Matemáticas ✅ Sesiones de repaso💫 ✅ Asesoría para el proceso de admisión ✅ Paquete de libros📚 ✅ Docentes UANL expertos en la materia. ✅ Sesiones Dominio de estrés y nervios
> Precios: 👨‍🏫 Modalidad Presencial Precio total del curso $4,499 · 👩🏻‍🏫 Modalidad On-live Precio total del curso $3,599
> 👉🏻Precio total=Inscripción ($499)+ 6 pagos semanales (restante)

**M4 · Testimonios** (unas 12 capturas; la última con este texto)
> Estos son algunos de nuestros testimonios; y muchos estudiantes no dominaban las matemáticas. Te garantizamos material real y actualizado del examen de admisión🤩

**M5 · Invitación a la sesión** (con imagen "¿Cómo entrar a la UANL? ¡Aprende lo que no te cuenta la UANL!")
> Te comento: Por que sabemos lo que viene en el examen de admisión, el día sábado 🗓️ tendremos una Sesión de muestra-informativa en línea; llamada "Domina el examen de Admisión"💯. Será a las 2:00 pm🕑; es muy importante para conocer nuestra manera de impartir👩‍🏫.
> Veremos: ✅Información importante del examen de admisión UANL. ✅Cada sección del examen explicada. ✅Compartiremos un link para evaluar a tu hijo(a) mediante un Examen de Diagnóstico. ✅Una muestra de cómo explicamos los temas vistos.
> Nos quedan 4 espacios disponibles. ¿Les interesaría formar parte de la clase?🎯

**Rama Sí**
> Me puedes proporcionar el nombre de la persona que tomaría la sesión por favor🤓.
> Muchas gracias, hago el registro y un día antes te hago llegar el link 😄 Tendremos una rifa de dos becas del 50% y 20% al finalizar la sesión informativa🤩👌🏻

**Confirmación un día antes**
> Buen día! Anexo link de la sesión de muestra del día de mañana. Favor de confirmar ya que al final de la sesión habrá una *rifa de una beca del 50% y 20%!!*🎊🥳
> Tema: *Ingreso UANL 2026 Sesión muestra-informativa* · Hora: *sábado 12:00 p. m.* · [link de Zoom, ID y código]

**Pre-S1** (un día antes de la sesión, a quien no respondió la invitación o no respondió nada; con imagen "Últimos espacios · Gánate una beca del 20 y 50%")
> Buen día‼️ Estamos confirmando los ultimos lugares para la sesión informativa del día miércoles en horario de las 7:30 pm. Tendremos una rifa de dos becas del 50% y 20% del curso para Ingreso a la UANL al final de la sesión.🥳🤯 Veremos: ✅Información importante del examen de admisión UANL. ✅Cada sección del examen explicada. ✅Una muestra de cómo explicamos los temas vistos. ¿Te gustaría asegurar un lugar?🤓

**Después de la sesión**
> Buen día! Que les pareció la sesión?!😄 Recuerda: ✅ *Maestros de la UANL para la UANL.* ✅Plan de pagos accesibles. ✅Te garantizamos *contenido real y actualizado* del examen de admisión. Recuerda que tienes un *10% de descuento*, realizando el pago de inscripción de $499 a más tardar el día lunes😄 ¿Te gustaría inscribirte?🙌🏻

**S1** (con imagen del tigre boxeando contra el examen)
> IMPORTANTE‼️ Vence al examen desde ahorita. Obtén ventaja presentando las áreas y reactivos del examen de admisión que se aplicó el pasado 30 de mayo🐯. No cualquier te dará esta ventaja; conoce la estructura, el nivel y los reactivos que se manejan de las áreas: ✅ Pensamiento matemático ✅ Redacción indirecta ✅ Comprensión lectora. Responde la palabra "Ventaja" y te enviaremos el examen para resolución. ¿Estas list@ para tomar este beneficio?

**S2, opción 1** (imagen "Último día de promoción · 81% de ocupación")
> Última promoción‼️ Por cierre de grupos‼️ Inscríbete a más tardar el día viernes y aprovecha un 10% de descuento 😱😱 Recuerda: ✅ Maestros de la UANL para la UANL. ✅Plan de pagos accesibles. 💯Te garantizamos contenido real y actualizado del examen de admisión. ¿Gustas pasar a la inscripción o gustas que ya no te contactemos?

**S2, opción 2** (imagen "¡Se están llenando los grupos!"; la recomendada)
> Buen día! Ya estamos cerrando los últimos espacios de los grupos ya que estamos arriba del "X%" de capacidad ocupada! Podrás aprovechar la promoción del 10% de descuento pagando la inscripción a más tardar MAÑANA 🥳🤩 ¿Tienes alguna duda en la que te pueda apoyar o gustas que no te moleste por este medio?🙂

**Evento de preventa**
> Te comento: Por que sabemos lo que viene en el examen de admisión, 🗓️ tendremos un evento gratuito y sin compromiso donde tendrá como propósito ayudarte a descubrir la carrera de tus sueños y a que conozcas como entrar a la UANL👩‍🏫. Veremos: ✅Te llevarás información y herramientas🛠️ que te ayudarán a conocer las áreas donde mejor te puedes desarrollar y realizar un perfil laboral para poder elegir la carrera de tus sueños!👩🏻‍🎓👨🏻‍🎓. ✅Información importante del examen de admisión UANL.🐯 ✅Cada sección del examen explicada. ✅Compartiremos un link para evaluar a tu hijo(a) mediante un Examen de Diagnóstico. Nos quedan 4 espacios disponibles. ¿Les interesaría formar parte de la conferencia?🎯

---

## Anexo B · Versiones recomendadas clave

**Saludo (M1)**
> ¡Hola! 🐯 Te saluda Karla, asesora de Ingreso U. El ciclo pasado ayudamos a [X] alumnos a quedar en la prepa o carrera que querían.
> Para orientarte mejor, cuéntame:
> ✔ ¿Con quién tengo el gusto? ¿Eres el alumno o mamá/papá?
> ✔ ¿A qué prepa o carrera quiere entrar?

**Oferta de diagnóstico (opción B)**
> ¡Mucho gusto, [nombre]! 😊 ¿Te gustaría que [alumno] presente un *examen de diagnóstico gratuito*? Así sabrás qué tan cerca o lejos está del puntaje que normalmente pide *[carrera/prepa]*. Responde *SÍ* y te lo envío 🎯

**Invitación (M5)**
> Te comento: este [día] 🗓️ a las [hora] tendremos una sesión *gratuita en línea*: *"Domina el examen de admisión"* 💯
> ✅ El *resultado del examen de diagnóstico* de [nombre] ✅ Qué tan cerca está del puntaje de [carrera/prepa] ✅ Cómo es el examen, sección por sección ✅ Una clase muestra
> Al final rifaremos *dos becas del 50% y 20%* 🥳 ¿Te aparto tu lugar? Responde *SÍ* y te mando el link.

**Después de la sesión**
> ¡Gracias por conectarse hoy! 😄 [Nombre] obtuvo *[X] puntos* en el diagnóstico, y para *[carrera/prepa]* normalmente se necesitan alrededor de *[Y]*. Tu *10% de descuento* sigue disponible hasta el *[día]*. Para apartarlo solo necesitas la inscripción de *$499*: 💳 [datos de transferencia] 📍 [sucursales y horario]. ¿Te aparto el lugar?

**S1**
> ¡IMPORTANTE! ‼️ Vence al examen desde ahorita 🐯 Te regalamos un *examen de práctica* con la misma estructura y nivel del que se aplicó en mayo: ✅ Pensamiento matemático ✅ Redacción indirecta ✅ Comprensión lectora. Resuélvelo, mándanos tus respuestas y te decimos *qué puntaje obtendrías*. Responde *VENTAJA* y te lo enviamos 🎯

**S2**
> ¡Buen día! 😊 Ya estamos cerrando grupos: quedan *[X] lugares* en el grupo *[sabatino / entre semana]* de *[sucursal]*. Todavía puedes aprovechar el *10% de descuento* pagando la inscripción de $499 a más tardar *MAÑANA* 🥳 ¿Tienes alguna duda en la que te pueda apoyar? Y si lo están considerando para más adelante, avísame si sería para *este examen* o para *el siguiente* y te escribo en su momento 🙂

---

## Glosario

- **Ceremonia de ventas:** la secuencia de mensajes de WhatsApp desde el primer contacto hasta la inscripción.
- **Sesión muestra-informativa:** clase gratuita en Zoom, miércoles y sábado, donde se cierra la venta.
- **Diagnóstico:** examen corto para conocer el puntaje actual del alumno.
- **Pre-S1, S1, S2, Descartados:** etapas de seguimiento a quien no respondió.
- **Ventana de decisión:** tiempo que tarda un prospecto en decidir según la cercanía del curso.
- **Sabatino / entre semana:** los dos grupos de cada periodo.
