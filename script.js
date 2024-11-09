let cart = [];  // Array para almacenar los productos en el carrito

// Función para añadir productos al carrito
function addToCart(productName, productPrice) {
    // Añadir el producto al array del carrito
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    
    // Limpiar el contenido previo
    cartItems.innerHTML = "";

    let total = 0;
    
    // Agregar cada producto en el carrito al HTML
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toLocaleString()} COP`;
        cartItems.appendChild(listItem);
        
        total += item.price;
    });
    
    // Actualizar el precio total
    totalPriceElement.textContent = `Total: $${total.toLocaleString()} COP`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];  // Vaciar el array del carrito
    updateCart();  // Actualizar el carrito en el HTML
    alert("Carrito vaciado");
}
