let cart = [];  // Array para almacenar los productos en el carrito

// Función para añadir productos al carrito
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Función para actualizar la visualización del carrito
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

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
    alert("Carrito vaciado");
}

// Función para filtrar productos por categoría
function filterByCategory(category) {
    const allProducts = document.querySelectorAll(".product-category");
    allProducts.forEach((productCategory) => {
        if (category === "all" || productCategory.classList.contains(category)) {
            productCategory.style.display = "block";
        } else {
            productCategory.style.display = "none";
        }
    });
}
