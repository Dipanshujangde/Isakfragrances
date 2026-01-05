const cart = document.getElementById("cart");
const overlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const totalItems = document.getElementById("totalItems");
const cartCount = document.getElementById("cartCount");

function openCart() {
  cart.classList.add("active");
  overlay.style.display = "block";
}

function closeCart() {
  cart.classList.remove("active");
  overlay.style.display = "none";
}

function increaseQty(button) {
  const qtySpan = button.previousElementSibling;
  qtySpan.innerText = parseInt(qtySpan.innerText) + 1;
  updateCount();
}

function decreaseQty(button) {
  const qtySpan = button.nextElementSibling;
  let qty = parseInt(qtySpan.innerText);

  if (qty > 1) {
    qtySpan.innerText = qty - 1;
    updateCount();
  }
}

function updateCount() {
  let total = 0;
  document.querySelectorAll(".qty").forEach((qty) => {
    total += parseInt(qty.innerText);
  });

  document.getElementById("totalItems").innerText = total;
  document.getElementById("cartCount").innerText = total;
}

function removeItem(button) {
  const item = button.closest(".cart-item");
  item.remove();
  updateCount();
}

/* Initial Count */
updateCount();
