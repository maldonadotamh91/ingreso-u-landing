/* Ingreso U · Comportamiento de la landing */

var nivelSeleccionado = null;

function getMensaje(clave) {
  if (nivelSeleccionado === "prepa")    return CONFIG.mensajesPrepa[clave]    || CONFIG.mensajes[clave];
  if (nivelSeleccionado === "facultad") return CONFIG.mensajesFacultad[clave] || CONFIG.mensajes[clave];
  return CONFIG.mensajes[clave] || CONFIG.mensajes["hola-info"];
}

function actualizarBotonesWA() {
  document.querySelectorAll(".js-wa-btn").forEach(function(btn) {
    var clave  = btn.dataset.mensaje || "hola-info";
    var texto  = getMensaje(clave);
    btn.href   = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(texto);
  });
}

/* Selector de nivel */
document.querySelectorAll(".tarjeta-nivel").forEach(function(tarjeta) {
  tarjeta.addEventListener("click", function() {
    nivelSeleccionado = tarjeta.dataset.nivel;

    document.querySelectorAll(".tarjeta-nivel").forEach(function(t) {
      t.classList.remove("activa");
      t.setAttribute("aria-pressed", "false");
    });
    tarjeta.classList.add("activa");
    tarjeta.setAttribute("aria-pressed", "true");

    actualizarBotonesWA();
  });
});

/* Botón flotante WhatsApp — aparece al hacer scroll en celular */
var waFlotante = document.getElementById("wa-flotante");
if (waFlotante) {
  window.addEventListener("scroll", function() {
    waFlotante.classList.toggle("visible", window.scrollY > 300);
  });
}

/* Acordeón FAQ */
document.querySelectorAll(".faq__pregunta").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var estaAbierto  = btn.getAttribute("aria-expanded") === "true";
    var respuestaId  = btn.getAttribute("aria-controls");
    var respuesta    = document.getElementById(respuestaId);

    /* Cerrar todos primero */
    document.querySelectorAll(".faq__pregunta").forEach(function(otroBtn) {
      otroBtn.setAttribute("aria-expanded", "false");
      var otroId = otroBtn.getAttribute("aria-controls");
      var otraRespuesta = document.getElementById(otroId);
      if (otraRespuesta) otraRespuesta.hidden = true;
    });

    /* Abrir el seleccionado si estaba cerrado */
    if (!estaAbierto && respuesta) {
      btn.setAttribute("aria-expanded", "true");
      respuesta.hidden = false;
    }
  });
});

/* Inicializar URLs de WhatsApp */
actualizarBotonesWA();
