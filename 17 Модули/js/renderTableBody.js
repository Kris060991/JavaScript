export function renderTableBody(tableEl, items, deleteHandler) {
  const oldTableBody = tableEl.querySelector(".table-body");
  if (oldTableBody) {
    oldTableBody.remove();
  }
  
  const tableBodyEl = document.createElement("tbody");
  tableBodyEl.classList.add("table-body");

  items.forEach((item, index) => {
    const row = document.createElement("tr");

    // Добавляем ячейки с данными
    ["name", "text", "weight", "date"].forEach((key) => {
      const td = document.createElement("td");
      td.textContent = item[key];
      row.appendChild(td);
    });

    // Добавляем кнопку удаления
    const actionTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "btn delete-btn";
    deleteBtn.addEventListener("click", () => deleteHandler(item.id));
    actionTd.appendChild(deleteBtn);
    row.appendChild(actionTd);

    tableBodyEl.appendChild(row);
  });

  tableEl.appendChild(tableBodyEl);
}