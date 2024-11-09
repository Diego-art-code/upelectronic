// Función para mostrar el contador de tiempo de la oferta especial
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 1 día de descuento

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Oferta Expirada";
        } else {
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            countdownElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}
// Obtener el carrito desde el almacenamiento local o iniciar un carrito vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el número de productos en el carrito
function actualizarCarrito() {
    const carritoCount = document.querySelector('.cart-icon span');
    if (carritoCount) {
        carritoCount.textContent = carrito.length;
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(name, price) {
    const producto = {
        name: name,
        price: price,
        quantity: 1
    };

    // Verificar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.name === name);
    if (index === -1) {
        carrito.push(producto);
    } else {
        carrito[index].quantity += 1;
    }

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la visualización del carrito
    actualizarCarrito();
}

// Añadir evento a cada botón "Agregar al carrito"
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.dataset.name;
        const price = parseInt(event.target.dataset.price);
        agregarAlCarrito(name, price);
    });
});

// Llamar a la función para actualizar el carrito cuando se cargue la página
actualizarCarrito();


startCountdown();
