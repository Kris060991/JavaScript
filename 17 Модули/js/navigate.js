import { getLoaderEl } from "./components.js";

// Отрисовка карточки
// Назвать функцию navigate
export async function navigate(cardName) {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";

  const loaderEl = getLoaderEl();
  appEl.append(loaderEl);

  switch (cardName) {
    case "add":
      const addCard = await import("./addNewRecord.js");
      addCard.default(appEl);
      loaderEl.remove();
      break;
    default:
      const listCard = await import("./listCard.js");
      listCard.default(appEl);
      loaderEl.remove();
  }
}