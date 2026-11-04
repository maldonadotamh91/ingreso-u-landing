# Landing · Fase 1

Una sola página, en este orden. Los textos son la base: se pueden pulir, pero mantén la intención de cada sección. Lo que está entre `[POR CONFIRMAR: …]` se deja visible hasta que el dueño dé el dato.

Todos los botones de WhatsApp abren `https://wa.me/52[NÚMERO]?text=[mensaje]` con el mensaje indicado (codificado para URL). El número va en una sola constante en `js/config.js`.

---

## 1. Encabezado fijo

- Logo horizontal a la izquierda (`ingreso-u-horizontal-fondo-blanco-sin-fondo.svg`).
- A la derecha, botón primario **"Escríbenos por WhatsApp"**. Mensaje: "Hola, quiero información de los cursos de Ingreso U".
- En celular, además, un botón flotante de WhatsApp abajo a la derecha que aparece al hacer scroll.

## 2. Portada (hero)

Fondo amarillo.

- Etiqueta: **EXAMEN DE ADMISIÓN UANL · PREPA Y FACULTAD**
- Titular (Oswald, azul noche): **VAMOS POR TU LUGAR EN LA PREPA O FACULTAD QUE QUIERES**
- Texto: Te preparamos para el examen de admisión a preparatoria y licenciatura de la UANL, presencial o en línea, con maestros universitarios, material con la misma estructura y nivel del examen, y simulacros para que llegues con confianza.
- Botón primario: **"Quiero mi examen de diagnóstico gratis"**. Mensaje: "Hola, quiero mi examen de diagnóstico gratuito".
- Botón secundario: **"Ver modalidades y precios"** (baja a la sección 7).
- Línea pequeña: Próxima sesión muestra gratuita: [POR CONFIRMAR: día y hora].

## 3. ¿Para qué examen te preparas?

Dos tarjetas que el visitante puede tocar. Al elegir una, los botones de la página cambian su mensaje de WhatsApp para incluir el nivel.

- **Preparatoria.** Un examen al año. Te preparamos para llegar con el puntaje que pide la prepa que quieres.
- **Facultad.** Dos oportunidades al año. Material por módulos según la carrera que eliges.

## 4. Lo que hace difícil el examen

Titular: **NO ES SOLO SABER, ES SABER RESPONDER A TIEMPO**

Tres bloques:
- **Dominar el contenido.** Matemáticas, comprensión lectora, redacción y las áreas de tu carrera.
- **El tiempo límite.** Muchos saben la respuesta pero no alcanzan a terminar.
- **La presión del día.** Los nervios hacen que fallen temas que sí sabían.

Cierre: Nuestro curso trabaja las tres cosas: contenido, estrategia de tiempo y manejo de estrés.

## 5. Cómo funciona

Tres pasos numerados (aquí el orden sí importa):

1. **Presenta tu diagnóstico gratis.** Sabrás tu puntaje de hoy y qué tan lejos estás del que pide tu meta.
2. **Prepárate con método.** Clases por área, material por carrera, repasos y Pre-Matemáticas si lo necesitas.
3. **Practica con simulacros.** Llegas al examen habiendo resuelto uno igual en estructura y tiempo.

## 6. Qué incluye

Lista con palomitas (íconos de línea, sin emoji):
Curso completo de preparación · Material por módulos según tu carrera · Examen de diagnóstico · Examen de simulación · Curso Pre-Matemáticas · Sesiones de repaso · Asesoría para el proceso de admisión · Paquete de libros · Maestros universitarios expertos en cada área · Sesiones para manejar el estrés y los nervios

## 7. Modalidades y precios

Titular: **ELIGE CÓMO PREPARARTE**

Dos tarjetas lado a lado (una debajo de otra en celular):

| | Presencial | En línea |
| --- | --- | --- |
| Precio total | $4,499 | $3,599 |
| Pago | Inscripción de $499 + 6 pagos semanales | Inscripción de $499 + 6 pagos semanales |
| Dónde | En sucursal | Clases en vivo desde casa |
| Botón | "Apartar mi lugar presencial" | "Apartar mi lugar en línea" |

Mensajes: "Hola, quiero apartar mi lugar en la modalidad presencial" / "… en línea".
Nota: Aparta tu lugar con la inscripción de $499.

## 8. Horarios y sucursales

- **Grupo sabatino:** inicia [POR CONFIRMAR: fecha], horario [POR CONFIRMAR].
- **Grupo entre semana:** inicia [POR CONFIRMAR: fecha], horario [POR CONFIRMAR].
- Sucursales: [POR CONFIRMAR: direcciones exactas]. Cada una con un enlace "Cómo llegar" a Google Maps (enlace normal, sin mapa incrustado en esta fase).

## 9. Sesión muestra gratuita

Fondo azul, texto blanco.

- Titular: **CONÓCENOS ANTES DE INSCRIBIRTE**
- Texto: Una sesión gratuita en línea de una hora: presentas tu examen de diagnóstico, te explicamos cómo es el examen sección por sección y tomas una clase muestra. Te recomendamos verla junto con tu mamá o tu papá.
- Horarios: miércoles y sábado, [POR CONFIRMAR: horas].
- Botón primario: **"Apartar mi lugar en la sesión"**. Mensaje: "Hola, quiero apartar mi lugar en la sesión muestra gratuita".

## 10. Testimonios

Titular: **ELLOS YA ENTRARON**

- 3 a 6 testimonios reales: captura de la carta de aceptación o mensaje, con datos personales difuminados, más nombre de pila y carrera o prepa.
- En esta fase, deja la estructura lista con tarjetas de ejemplo marcadas como `[TESTIMONIO DE EJEMPLO, reemplazar]`.
- Los testimonios se guardan en `data/testimonios.json` (nombre de pila, nivel, área, carrera, imagen, texto) para que en la fase 2 se puedan filtrar.

## 11. Preguntas frecuentes

Acordeón accesible.

- **¿Y si no es bueno para matemáticas?** El curso incluye Pre-Matemáticas para reforzar las bases antes de los temas del examen. Muchos de nuestros alumnos aceptados empezaron así.
- **¿Cómo se paga?** Inscripción de $499 para apartar tu lugar y el resto en 6 pagos semanales. [POR CONFIRMAR: formas de pago aceptadas].
- **¿Presencial o en línea?** Las dos llevan el mismo contenido y material. En línea las clases son en vivo; presencial, en sucursal.
- **¿Qué pasa si falto a una clase?** [POR CONFIRMAR: política de clases grabadas o reposición].
- **¿Garantizan el ingreso?** Nadie puede garantizar un resultado: depende del puntaje de cada alumno y del cupo de cada escuela. Lo que sí garantizamos es preparación completa, material actualizado y acompañamiento hasta el día del examen.
- **¿Puedo conocer la forma de enseñar antes de pagar?** Sí: en la sesión muestra gratuita tomas una clase de prueba.

## 12. Cierre y pie de página

- Bloque final en amarillo: **TU LUGAR SE PREPARA DESDE HOY** + botón "Quiero mi examen de diagnóstico gratis".
- Pie en azul noche: logo horizontal para fondo azul (o símbolo), WhatsApp, redes [POR CONFIRMAR], sucursales.
- Nota legal pequeña, siempre visible: "Ingreso U es un servicio independiente de asesorías y no está afiliado a la Universidad Autónoma de Nuevo León (UANL)."
- Enlace a "Aviso de privacidad" [POR CONFIRMAR: texto; se requiere porque la página recibe datos de contacto].

## SEO y compartir

- `<title>`: Ingreso U · Preparación para el examen de admisión UANL, prepa y facultad
- Meta descripción: Cursos presenciales y en línea para el examen de admisión a preparatoria y licenciatura de la UANL en Monterrey. Examen de diagnóstico gratis.
- Imagen para compartir: `assets/marca/imagen-para-compartir.jpg`. Favicon desde `assets/iconos/`.
