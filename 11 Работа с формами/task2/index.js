const formEl = document.querySelector(".form");
const nameEl = document.querySelector(".name");
const weightEl = document.querySelector(".weight");
const distanceEl = document.querySelector(".distance");
const btnEl = document.querySelector(".btn");
const tableEl = document.querySelector(".product-list");
const nameErrorEl = document.getElementById("nameError");
const weightErrorEl = document.getElementById("weightError");
const distanceErrorEl = document.getElementById("distanceError");
const numberInputs = document.querySelectorAll('input[type="number"]');

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  nameErrorEl.textContent = "";
  weightErrorEl.textContent = "";
  distanceErrorEl.textContent = "";

  let isValid = true;

  if (nameEl.value == "") {
    nameErrorEl.textContent = "Введите название товара";
    isValid = false;
  }

  numberInputs.forEach((input) => {
    const value = Number(input.value);
    if (isNaN(value) || value <= 0) {
      document.getElementById(`${input.id}Error`).textContent =
        "Введите положительное число";
      isValid = false;
    }
  });

  if (isValid) {
    addProductToList(
      nameEl.value,
      Number(weightEl.value),
      Number(distanceEl.value)
    );
    formEl.reset();
  }
});

function addProductToList(name, weight, distance) {
  const row = document.createElement("tr");
  const deliveryCost = (weight * distance) / 10;

  const nameCell = document.createElement("td");
  nameCell.textContent = name;

  const weightCell = document.createElement("td");
  weightCell.textContent = weight.toFixed(1);

  const distanceCell = document.createElement("td");
  distanceCell.textContent = distance;

  const costCell = document.createElement("td");
  costCell.textContent = deliveryCost.toFixed(2) + " руб.";

  row.appendChild(nameCell);
  row.appendChild(weightCell);
  row.appendChild(distanceCell);
  row.appendChild(costCell);

  tableEl.appendChild(row);
}
