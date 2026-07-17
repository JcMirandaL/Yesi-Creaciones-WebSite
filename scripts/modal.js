// modal.js — Logica para abrir el modal de productos y poblar sus datos
// Este archivo se encarga de:
// 1. Leer los atributos data-* de la tarjeta clickeada
// 2. Llenar el modal de Bootstrap con la info del producto
// 3. Generar el link de WhatsApp con el nombre del producto
// 4. Manejar el boton de compartir (Web Share API o copiar al portapapeles)

// DOMContentLoaded espera a que todo el HTML este cargado antes de ejecutar el JS.
// Sin esto, los elementos del modal podrian no existir aun cuando se ejecute el script.
document.addEventListener("DOMContentLoaded", () => {

    // === REFERENCIAS A ELEMENTOS DEL MODAL ===
    // Obtengo cada elemento del modal por su ID para poder modificar su contenido dinamicamente
    const modal = document.getElementById("modalProducto");
    const modalImg = document.getElementById("modalImg");
    const modalLabel = document.getElementById("modalProductoLabel");
    const modalPrecio = document.getElementById("modalPrecio");
    const modalWhatsApp = document.getElementById("modalWhatsApp");
    const modalCompartir = document.getElementById("modalCompartir");

    // Numero de WhatsApp del negocio — si cambia, se edita solo aca
    const WHATSAPP_NUM = "50763247221";

    // Dominio de producción — se usa para generar links de compartir correctos
    // En localhost (Live Server) window.location.href genera 127.0.0.1, asi que usamos este dominio fijo
    const BASE_URL = "https://yesicreaciones.vercel.app/";

    // === POBLAR MODAL AL HACER CLIC EN UNA TARJETA ===
    // Selecciono todas las tarjetas que tengan data-bs-toggle="modal"
    // Esto funciona para cualquier cantidad de tarjetas sin modificar el JS
    const tarjetas = document.querySelectorAll(".card[data-bs-toggle='modal']");

    tarjetas.forEach((tarjeta) => {
        // Cada tarjeta tiene sus propios data-* con la info del producto
        tarjeta.addEventListener("click", () => {
            // Leo los atributos data-* de la tarjeta clickeada
            const nombre = tarjeta.getAttribute("data-nombre");
            const img = tarjeta.getAttribute("data-img");
            const precio = tarjeta.getAttribute("data-precio");

            // Lleno los elementos del modal con la info leida
            modalImg.src = img;                    // imagen del producto
            modalImg.alt = nombre;                 // texto alternativo = nombre del producto
            modalLabel.textContent = nombre;       // titulo del modal
            modalPrecio.textContent = "Precio: " + precio;  // precio con prefijo centrado

            // Genero el link de WhatsApp con un mensaje que incluye el nombre del producto y la URL de la imagen
            // encodeURIComponent convierte espacios y caracteres especiales a formato URL
            const imgFullUrl = BASE_URL + img;  // URL completa de la imagen en dominio de producción
            const msg = encodeURIComponent(
                `Hola Yesi Creaciones, me interesa el producto "${nombre}".\n\nMira la foto: ${imgFullUrl}`
            );
            modalWhatsApp.href = `https://wa.me/${WHATSAPP_NUM}?text=${msg}`;
        });
    });

    // === BOTON COMPARTIR ===
    // Usa Web Share API (nativa en moviles) con fallback a copiar al portapapeles en desktop
    modalCompartir.addEventListener("click", async () => {
        // Construyo los datos que se van a compartir
        const nombre = modalLabel.textContent;

        // Obtengo solo el nombre del archivo actual (ej: "asistencia.html")
        // window.location.pathname te da "/asistencia.html", split("/").pop() te da "asistencia.html"
        const pagina = window.location.pathname.split("/").pop();
        const pageUrl = BASE_URL + pagina;  // URL completa en dominio de producción

        const shareData = {
            title: `${nombre} - Yesi Creaciones`,
            text: `¿Qué te parece esta Manualidad? ¡Es de Yesi Creaciones! ✨: ${nombre}`,
            url: pageUrl  // link a la pagina actual en dominio de producción
        };

        // navigator.share es la API nativa del navegador para compartir
        // Solo existe en dispositivos moviles (Android, iOS) y algunos navegadores
        if (navigator.share) {
            try {
                await navigator.share(shareData);  // abre el menu nativo de compartir
            } catch (err) {
                // Si el usuario cancela el share, no pasa nada (es comportamiento normal)
            }
        } else {
            // FALLBACK PARA DESKTOP: copiar texto al portapapeles
            // navigator.clipboard.writeText es la API moderna para copiar texto
            try {
                await navigator.clipboard.writeText(
                    `${shareData.text}`
                );
                // Cambio temporalmente el texto del boton para dar feedback visual
                const original = modalCompartir.innerHTML;  // guardo el contenido original
                modalCompartir.innerHTML =
                    '<i class="fa-solid fa-check"></i> ¡Copiado!';
                // Despues de 2 segundos, restauro el boton original
                setTimeout(() => {
                    modalCompartir.innerHTML = original;
                }, 2000);
            } catch (err) {
                // Si clipboard tambien falla, no se puede hacer nada mas
            }
        }
    });
});
