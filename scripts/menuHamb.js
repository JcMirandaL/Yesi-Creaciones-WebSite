// esta linea es para seleccionar el elemento con la clase menuToggle
const menuToggle = document.querySelector(".menuToggle");

// esta linea es para seleccionar el elemento con la clase listaMenu
const listaMenu = document.querySelector(".listaMenu");

// agregar evento de clic al botón del menú hamburguesa
menuToggle.addEventListener("click", () => {
  // alternar la clase 'active' para mostrar u ocultar el menú
  menuToggle.classList.toggle("active");
  // esta linea es para alternar la clase active en la lista del menu
  listaMenu.classList.toggle("active");
});

// cerrar menú al hacer clic en un enlace (excepto el toggle del dropdown)
const menuLinks = document.querySelectorAll(".listaMenu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // si es el toggle del dropdown, no cerrar el menú
    if (link.classList.contains("dropdown-toggle")) {
      e.preventDefault();
      return;
    }
    menuToggle.classList.remove("active");
    listaMenu.classList.remove("active");
  });
});

// cerrar menú al hacer clic fuera del menú
document.addEventListener("click", (event) => {
  // verificar si el clic fue fuera del menú y del botón hamburguesa
  if (!menuToggle.contains(event.target) && !listaMenu.contains(event.target)) {
    // cerrar el menú
    menuToggle.classList.remove("active");
    listaMenu.classList.remove("active");
  }
});

// Botón volver arriba
const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
  // mostrar/ocultar botón según posición del scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  // scroll suave al hero al hacer clic
  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}