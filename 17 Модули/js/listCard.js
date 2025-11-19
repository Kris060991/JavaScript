import * as components from "./components.js";
import { navigate } from "./navigate.js";

// Создание страницы списка
export default function createListCard(containerEl) {
  const wrapEl = components.getWrapEl();
  const centerWrapEl = components.getCenterWrapEl();
  const titleEl = components.getTiteEl("Склад");
  const buttonEl = components.getButtonEl("Добавить запись");

  const items = JSON.parse(localStorage.getItem("item")) || [];
  const tableEl = components.getTableEl(items);

  buttonEl.addEventListener("click", () => navigate("add"));

  wrapEl.append(centerWrapEl, tableEl);
  centerWrapEl.append(titleEl, buttonEl);
  containerEl.append(wrapEl);
}