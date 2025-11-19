import Delivery from "./Delivery.js";
import EditDelivery from "./EditDelivery.js";

const app = document.getElementById("app");

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
  new Delivery("Иван", "ул. Вымыслов, д. 54", 10),
];

// Функция для отображения доставок
function renderDeliveries() {
  app.innerHTML = "";

  // Создаем кнопку для расчета общего расстояния
  const totalButton = document.createElement("button");
  totalButton.textContent = "Общее расстояние";
  totalButton.classList.add("total-button");
  totalButton.addEventListener("click", updateTotalDistance);

  document.body.append(totalButton);

  deliveryArr.forEach((delivery) => {
    const card = delivery.getElement();
    app.append(card);
  });
}

// Функция для расчета и отображения общего расстояния
function updateTotalDistance() {
  // Удаляем старый результат, если есть
  const oldResult = document.querySelector(".total-distance");
  if (oldResult) {
    oldResult.remove();
  }
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr);

  // Создаем элемент для отображения результата
  const resultElement = document.createElement("div");
  resultElement.classList.add("total-distance");
  resultElement.innerHTML = `
        <p>Общее расстояние: <strong>${totalDistance} км</strong></p>
    `;

  document.body.append(resultElement);
}

renderDeliveries();