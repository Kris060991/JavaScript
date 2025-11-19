const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
const addBtn = document.createElement("button");
addBtn.textContent = "Добавить элемент";
container.append(addBtn);
const removeBtn = document.createElement("button");
removeBtn.textContent = "Удалить элемент";
container.append(removeBtn);
const listEl = document.createElement("ul");
document.body.prepend(listEl);

addBtn.addEventListener("click", function () {
  const itemEl = document.createElement("li");
  itemEl.textContent = "Новый элемент списка";
  listEl.prepend(itemEl);
});

removeBtn.addEventListener("click", function () {
  if (listEl.lastChild) {
    listEl.lastChild.remove();
  }
});
