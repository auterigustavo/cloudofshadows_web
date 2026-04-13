//swiper de fotos
const swiper = new Swiper(".mySwiper", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "slide",
  speed: 800,
});

//swiper productos
const productoSwiper = new Swiper(".productoSwiper", {
  loop: true,

  navigation: {
    nextEl: ".productoSwiper .swiper-button-next",
    prevEl: ".productoSwiper .swiper-button-prev",
  },

  autoplay: false,
});


const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
//hacer menu visible
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

//ocultar menu
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

//movilidad del header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-black/70", "backdrop-blur-md", "border-b", "border-white/10");
  } else {
    header.classList.remove("bg-black/70", "backdrop-blur-md", "border-b", "border-white/10");
  }
});

//para formulario compra remera
const btnComprar = document.getElementById("btnComprar");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const enviarPedido = document.getElementById("enviarPedido");

btnComprar.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
});

cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

enviarPedido.addEventListener("click", () => {
  const cantidad = document.getElementById("cantidad").value;
  const talle = document.getElementById("talle").value;
  const envio = document.getElementById("envio").value;
  const pago = document.getElementById("pago").value;

  if (!cantidad || !talle || !envio || !pago) {
    alert("Por favor completá todos los campos");
    return;
  }

  const mensaje = `Hola! Quiero comprar una remera
  
Modelo: El arbol de la muerte
Cantidad: ${cantidad}
Talle: ${talle}
Envío: ${envio}
Pago: ${pago}`;

  const numero = "5491157291014";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

  modal.classList.add("hidden");

// limpiar
document.getElementById("cantidad").value = "";
document.getElementById("talle").value = "";
document.getElementById("envio").value = "";
document.getElementById("pago").value = "";
});

//para formulario compra entradas
const btnComprar2 = document.getElementById("btnComprar2");
const modal2 = document.getElementById("modal2");
const cerrarModal2 = document.getElementById("cerrarModal2");
const enviarPedido2 = document.getElementById("enviarPedido2");

btnComprar2.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.classList.remove("hidden");
});

cerrarModal2.addEventListener("click", () => {
  modal2.classList.add("hidden");
});

enviarPedido2.addEventListener("click", () => {
  const cantidad2 = document.getElementById("cantidad2").value;
  const envio2 = document.getElementById("envio2").value;
  const pago2 = document.getElementById("pago2").value;
  const seleccionEvento = document.getElementById("seleccionEvento").value;

  if (!cantidad2 || !envio2 || !pago2 || !seleccionEvento) {
    alert("Por favor completa todos los campos");
    return;
  }

  const mensaje2 = `Hola, quiero una entrada
  
Evento: ${seleccionEvento}
Cantidad: ${cantidad2}
Envío: ${envio2}
Pago: ${pago2}`;

  const numero2 = "5491157291014";

  const url2 = `https://wa.me/${numero2}?text=${encodeURIComponent(mensaje2)}`;

  window.open(url2, "_blank");

  modal2.classList.add("hidden");

// limpiar
document.getElementById("cantidad2").value = "";
document.getElementById("SeleccionEvento").value = "";
document.getElementById("envio2").value = "";
document.getElementById("pago2").value = "";
});

//agrandar imagen producto
const modalImagen = document.getElementById("modalImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");

// abrir imagen
document.querySelectorAll(".producto-img").forEach(img => {
  img.addEventListener("click", () => {
    modalImagen.classList.remove("hidden");
    imagenAmpliada.src = img.src;
  });
});

// cerrar al hacer click
modalImagen.addEventListener("click", () => {
  modalImagen.classList.add("hidden");
});