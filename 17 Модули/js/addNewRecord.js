import * as components from "./components.js";
import { navigate } from "./navigate.js";
import { addToLocalStorage } from "./localStorage.js";

// Добавление новой записи
export default function addNewRecord(containerEl) {
  const wrapEl = components.getWrapEl();
  const titleEl = components.getTiteEl("Добавить запись");
  titleEl.classList.add("add-title");
  const formEl = components.getFormEl();

  let nameInputEl = components.getInputEl("text", "name", "Название");
  let textInputEl = components.getInputEl("text", "text", "Полка");
  let weightInputEl = components.getInputEl("number", "weight", "Вес");
  let dateInputEl = components.getInputEl("date", "date", "dd.mm.yyyy");
  const addButtonEl = components.getButtonEl("Добавить запись", "submit");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: nameInputEl.value,
      text: textInputEl.value,
      weight: weightInputEl.value,
      date: dateInputEl.value,
    };
    addToLocalStorage(newItem);
    navigate();
  });

  wrapEl.append(titleEl, formEl);
  formEl.append(
    nameInputEl,
    textInputEl,
    weightInputEl,
    dateInputEl,
    addButtonEl
  );
  containerEl.append(wrapEl);
}