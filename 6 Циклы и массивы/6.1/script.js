const productsEL = document.querySelector('.products');
const products = ["Mышка", "Клавиатура", "Наушники"];

function displayProducts() {
  for (const item of products) {
    const itemEL = document.createElement('li');
    itemEL.textContent = item;
    productsEL.append(itemEL);
  }
}

products.push("Монитор");
products.push("Принтер");
products.push("Флешка");

displayProducts();


