document.addEventListener("DOMContentLoaded", () => {

    /* ================= HERO CARRUSEL INICIO ================= */

    const heroImages = document.querySelectorAll(".carousel-hero img");

    if (heroImages.length > 0) {
        let heroIndex = 0;

        setInterval(() => {
            heroImages[heroIndex].classList.remove("active");
            heroIndex = (heroIndex + 1) % heroImages.length;
            heroImages[heroIndex].classList.add("active");
        }, 3500);
    }

    /* ================= PRODUCTOS ================= */

   const productos = [
    {
        nombre: "Buzo Deportivo",
        precio: 68000,
        imagenes: [
            "img/buzo1.jpg",
            "img/buzo2.jpg",
            "img/buzo3.jpg"
        ],
        linkImagen: "https://indumpirata.netlify.app/img/buzo1.jpg"
    },
    {
        nombre: "Chomba Deportiva",
        precio: 48000,
        imagenes: [
            "img/chomba1.jpg",
            "img/chomba2.jpg",
            "img/chomba3.jpg"
        ],
        linkImagen: "https://indumpirata.netlify.app/img/chomba1.jpg"
    },
    {
        nombre: "Medias Antideslizantes",
        precio: 20000,
        imagenes: [
            "img/medias1.jpg",
            "img/medias2.jpg",
            "img/medias3.jpg"
        ],
        linkImagen: "https://indumpirata.netlify.app/img/medias1.jpg"
    },
    {
        nombre: "Conjunto de Entrenamiento",
        precio: 58000,
        imagenes: [
            "img/conjunto1.jpg",
            "img/conjunto2.jpg"
        ],
        linkImagen: "https://indumpirata.netlify.app/img/conjunto1.jpg"
    },
    {
        nombre: "Cuello Térmico",
        precio: 16000,
        imagenes: [
            "img/cuello1.jpg",
            "img/cuello2.jpg"
        ],
        linkImagen: "https://indumpirata.netlify.app/img/cuello1.jpg"
    }
];

const contenedor = document.querySelector(".grid");

    if (!contenedor) return;

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgGrande");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".modal-next");
    const prevBtn = document.querySelector(".modal-prev");

    let imagenesActuales = [];
    let indexActual = 0;

    productos.forEach(producto => {

        const card = document.createElement("div");
        card.classList.add("card");

        let index = 0;

        const mensaje = encodeURIComponent(
            `Hola! Me interesa el producto: ${producto.nombre}
Precio: $${producto.precio.toLocaleString()}
Foto: ${producto.linkImagen}`
        );

        card.innerHTML = `
            <div class="carousel">
                <img src="${producto.imagenes[0]}" class="img-producto">

                <button class="prev">←</button>
                <button class="next">→</button>
            </div>

            <div class="info-producto">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio.toLocaleString()}</p>
                <p class="detalle">Calidad premium • Edición deportiva</p>
            </div>

            <a
                class="whatsapp"
                target="_blank"
                href="https://wa.me/5492962433128?text=${mensaje}">
                Comprar por WhatsApp
            </a>
        `;

        const img = card.querySelector(".img-producto");
        const prev = card.querySelector(".prev");
        const next = card.querySelector(".next");

        /* mini carrusel */

        prev.addEventListener("click", (e) => {
            e.stopPropagation();
            index = (index - 1 + producto.imagenes.length) % producto.imagenes.length;
            img.src = producto.imagenes[index];
        });

        next.addEventListener("click", (e) => {
            e.stopPropagation();
            index = (index + 1) % producto.imagenes.length;
            img.src = producto.imagenes[index];
        });

        /* abrir modal */

        img.addEventListener("click", () => {
            imagenesActuales = producto.imagenes;
            indexActual = index;

            modal.classList.add("active");
            modalImg.src = imagenesActuales[indexActual];
        });

        contenedor.appendChild(card);
    });

    /* ================= MODAL ================= */

    function cerrarModal() {
        modal.classList.remove("active");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", cerrarModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            indexActual = (indexActual + 1) % imagenesActuales.length;
            modalImg.src = imagenesActuales[indexActual];
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            indexActual = (indexActual - 1 + imagenesActuales.length) % imagenesActuales.length;
            modalImg.src = imagenesActuales[indexActual];
        });
    }

});