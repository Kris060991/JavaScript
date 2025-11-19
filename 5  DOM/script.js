function addToCart(productName) {
  const cart = document.getElementById("cart");

  const cartItem = document.createElement("li");

  cartItem.textContent = productName;

  cart.append(cartItem);
}
