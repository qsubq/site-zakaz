const cart = document.getElementById('cart');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
let total = 0;

function addItemToCart(itemName, price, image) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <img src="${image}">
        <span>${itemName}</span>
        <span>$${price}</span>
    `;
    total += price;
    totalAmount.textContent = total;
    cart.appendChild(item);
}

addItemToCart('Headphones', 50, 'headphones.jpg');
addItemToCart('Smartphone', 300, 'smartphone.jpg');
addItemToCart('Laptop', 800, 'laptop.jpg');

checkoutBtn.addEventListener('click', () => {
    alert(`Total amount: $${total}. Thank you for your purchase!`);
    total = 0;
    totalAmount.textContent = total;
    cart.innerHTML = '';
});