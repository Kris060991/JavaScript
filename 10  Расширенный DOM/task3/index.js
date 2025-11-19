const price = [100, 500, 250, 750, 300];
const increaseBtn = document.querySelector(".btn-increase");
const decreaseBtn = document.querySelector(".btn-decrease");
const listEl = document.querySelector(".list");

function displayPrices(priceArr) {
  listEl.innerHTML = "";
  priceArr.forEach((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    listEl.append(itemEl);
  });
}

increaseBtn.addEventListener("click", function () {
  displayPrices(price.sort((a, b) => a - b));
});

decreaseBtn.addEventListener("click", function () {
  displayPrices(price.sort((a, b) => b - a));
});

displayPrices(price);
