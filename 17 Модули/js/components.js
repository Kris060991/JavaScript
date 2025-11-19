import { renderTableBody } from "./renderTableBody.js";
import { sort } from "./sort.js";

// Получение элемента обертки
function getWrapEl() {
  const wrapEl = document.createElement("div");
  wrapEl.classList.add("wrapper");
  return wrapEl;
}

// Получение элемента блока для центрирования
function getCenterWrapEl() {
  const cardEl = document.createElement("div");
  cardEl.classList.add("center-wrap");
  return cardEl;
}

// Получение элемента заголовка
function getTiteEl(text) {
  const titleEl = document.createElement("h1");
  titleEl.textContent = text;
  titleEl.classList.add("main-title");
  return titleEl;
}

// Получение элемента кнопки
function getButtonEl(text) {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.classList.add("btn");
  return buttonEl;
}

// Получение элемента таблица
function getTableEl(items = []) {
  const tableEl = document.createElement("table");
  tableEl.classList.add("table");

  let originalItems = [...items];
  let currentSortedItems = [...items];
  let currentSortColumn = null;

  const tableHeadEl = document.createElement("thead");
  tableHeadEl.classList.add("table-head");

  const tableHeadTr = document.createElement("tr");
  tableHeadTr.classList.add("table-head-tr");

  const tableHeadTh = ["Название", "Полка", "Вес", "Время хранения", ""];

  tableHeadTh.forEach((headerText) => {
    const th = document.createElement("th");
    const buttonSort = document.createElement("button");
    buttonSort.textContent = headerText;
    buttonSort.classList.add("sort-btn");

    if (headerText !== "") {
      buttonSort.addEventListener("click", () => {
        let columnName;
        switch (headerText) {
          case "Название":
            columnName = "name";
            break;
          case "Полка":
            columnName = "text";
            break;
          case "Вес":
            columnName = "weight";
            break;
          case "Время хранения":
            columnName = "date";
            break;
          default:
            return;
        }
        currentSortColumn = columnName;
        currentSortedItems = sort(originalItems, columnName);
        renderTableBody(tableEl, currentSortedItems, deleteHandler);
      });
    }

    th.append(buttonSort);
    tableHeadTr.append(th);
  });

  tableHeadEl.append(tableHeadTr);
  tableEl.append(tableHeadEl);

  // Отрисовка тела таблицы
  const deleteHandler = (id) => {
    const updatedItems = originalItems.filter((item) => item.id !== id);
    localStorage.setItem("item", JSON.stringify(updatedItems));

    // Обновляем оба массива
    originalItems = updatedItems;
    currentSortedItems = sort(updatedItems, currentSortColumn);
    renderTableBody(tableEl, currentSortedItems, deleteHandler);
  };

  renderTableBody(tableEl, currentSortedItems, deleteHandler);

  return tableEl;
}

// Получение элемента формы
function getFormEl() {
  const formEl = document.createElement("form");
  formEl.classList.add("form");
  return formEl;
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.name = name;
  inputEl.placeholder = placeholder;
  inputEl.classList.add("text-field");
  inputEl.required = true;
  return inputEl;
}

//Получение элемента loader
function getLoaderEl() {
  const loaderEl = document.createElement("div");
  loaderEl.classList.add("loader");
  for (let i = 1; i <= 3; i++) {
    const divEl = document.createElement("div");
    loaderEl.append(divEl);
  }
  return loaderEl;
}

export {
  getWrapEl,
  getCenterWrapEl,
  getTiteEl,
  getButtonEl,
  getTableEl,
  getFormEl,
  getInputEl,
  getLoaderEl,
};