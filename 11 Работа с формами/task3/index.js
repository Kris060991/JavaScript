const nameEl = document.querySelector(".name");
const colorEl = document.querySelector(".color");
const cardEl = document.querySelector(".card");
const originalStyles = {
  backgroundColor: nameEl.style.backgroundColor,
};

nameEl.addEventListener("input", function () {
  cardEl.textContent = nameEl.value;
});

nameEl.addEventListener("focus", function () {
  nameEl.style.backgroundColor = "lightgreen";
});

nameEl.addEventListener("blur", function () {
  nameEl.style.backgroundColor = originalStyles.backgroundColor;
});

colorEl.addEventListener("change", function () {
  const selectedColor = colorEl.value;
  cardEl.style.backgroundColor = selectedColor;
});
