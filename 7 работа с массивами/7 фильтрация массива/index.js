function filter(arr, minAge) {
  const result = []
  for (const item of arr) {
    if (item >= minAge) {
      result.push(item)
    }
  }
  return result
}

const usersAge = [11, 23, 34, 11, 12, 4, 55, 21, 23]

function renderList(usersAge) {
  listEl.innerHTML = "" //способ очистить содержимое дом элемента (т.е удалить первый список, чтобы отражался только новый отфильтрованный)

  for (let i = 0; i < usersAge.length; i++) {
    const liEl = document.createElement("li")
    liEl.textContent = `${i + 1} возраст: ${usersAge[i]}`
    listEl.append(liEl)
  }
}

const filterBtn = document.createElement("button")
filterBtn.textContent = "фильтр по возрасту"
document.body.append(filterBtn)

filterBtn.onclick = function() {
  const minAge = prompt("введите возраст")

  const result = filter(usersAge, minAge)

  renderList(result)
}

const listEl = document.createElement("ul")
document.body.append(listEl)

renderList(usersAge)

