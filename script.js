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

  const mensaje = `Hola! Quiero comprar:
  
Remera: El arbol de la muerte
Cantidad: ${cantidad}
Talle: ${talle}
Envío: ${envio}
Pago: ${pago}`;

  const numero = "5491123430468";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
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
  const seleccionEvento = getElementById("seleccionEvento").value;

  const mensaje2 = `Detalle del pedido:
  
Entrada: ${seleccionEvento}
Cantidad: ${cantidad2}
Envío: ${envio2}
Pago: ${pago2}`;

  const numero2 = "5491123430468";

  const url2 = `https://wa.me/${numero2}?text=${encodeURIComponent(mensaje2)}`;

  window.open(url2, "_blank");
});