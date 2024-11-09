// Carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Elementos del carrito
const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');
const cartList = document.getElementById('cart-list');
const checkoutButton = document.getElementById('checkout-button');
const closeCartButton = document.getElementById('close-cart-button');

// Botones de "Agregar al carrito"
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.dataset.name;
        const price = parseInt(event.target.dataset.price);

        agregarAlCarrito(name, price);
    });
});

// Función para agregar un producto al carrito
function agregarAlCarrito(name, price) {
    // Verifica si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.name === name);
    if (productoExistente) {
        productoExistente.quantity += 1; // Si ya está, aumenta la cantidad
    } else {
        carrito.push({ name, price, quantity: 1 }); // Si no está, agrega el producto
    }
    
    // Actualiza el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualiza el contador del carrito
    actualizarCarrito();
}

// Función para actualizar el contador de productos en el icono
function actualizarCarrito() {
    const carritoCount = document.querySelector('.cart-icon span');
    if (carritoCount) {
        carritoCount.textContent = carrito.reduce((total, item) => total + item.quantity, 0);
    }
}

// Función para mostrar el carrito
cartIcon.addEventListener('click', () => {
    mostrarCarrito();
});

// Función para mostrar los productos del carrito
function mostrarCarrito() {
    cartList.innerHTML = ''; // Limpia la lista de productos

    // Si el carrito está vacío, muestra un mensaje
    if (carrito.length === 0) {
        cartList.innerHTML = '<li>El carrito está vacío</li>';
    } else {
        // Muestra los productos en el carrito
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartList.appendChild(li);
        });
    }

    // Muestra el carrito
    cartContainer.style.display = 'block';
}

// Función para cerrar el carrito
closeCartButton.addEventListener('click', () => {
    cartContainer.style.display = 'none';
});

// Actualiza el carrito al cargar la página
document.addEventListener('DOMContentLoaded', actualizarCarrito);

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


// Llamar a la función para actualizar el carrito cuando se cargue la página
actualizarCarrito();


startCountdown();
