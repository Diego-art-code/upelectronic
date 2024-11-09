let cart = [];  // Array para almacenar los productos en el carrito

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
    openCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    
    cartItems.innerHTML = "";  // Limpiar el contenido previo

    let total = 0;
    cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toLocaleString()} COP`;
        cartItems.appendChild(listItem);
        
        total += item.price;
    });
    
    totalPriceElement.textContent = `Total: $${total.toLocaleString()} COP`;
}

function clearCart() {
    cart = [];
    updateCart();
    alert("Carrito vaciado");
}

// Función para abrir el carrito en modal
function openCart() {
    document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}
