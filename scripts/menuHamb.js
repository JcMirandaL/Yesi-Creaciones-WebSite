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

// cerrar menú al hacer clic en un enlace
const menuLinks = document.querySelectorAll(".listaMenu a");
//esta linea es para recorrer todos los enlaces del menu
menuLinks.forEach((link) => {
  // agregar evento de clic a cada enlace del menú
  link.addEventListener("click", () => {
    // cerrar el menú al hacer clic en un enlace
    menuToggle.classList.remove("active");
    // esta linea es para cerrar el menu al hacer clic en un enlace
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