
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    saveCart();
}

function updateCart() {
    const cartStatus = document.querySelector('.cart-status');
    const subtotal = document.querySelector('.summary-item:nth-child(1) span:last-child');
    const total = document.querySelector('.summary-item:nth-child(3) span:last-child');

    if (cart.length === 0) {
        cartStatus.textContent = 'Your Cart is Empty :(';
        subtotal.textContent = '$0.00';
        total.textContent = '$0.00';
    } else {
        cartStatus.textContent = `${cart.length} item(s) in your cart`;
        const subtotalValue = cart.reduce((sum, item) => sum + item.price, 0);
        subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
        total.textContent = `$${subtotalValue.toFixed(2)}`;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

document.addEventListener('DOMContentLoaded', loadCart);