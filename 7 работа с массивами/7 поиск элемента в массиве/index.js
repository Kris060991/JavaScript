const users = ["Яна", "Олег", "Витя", "Саша", "Таня", "Яна", "Василий", "Евгения", "Настя"]

const searchBtn = document.createElement("button")
searchBtn.textContent = "поиск"
document.body.append(searchBtn)

function renderList(arr) {
  const listEl = document.createElement("ul")

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li")
    liEl.textContent = `${i + 1}) ${arr[i]}`
    listEl.append(liEl)
  }

  document.body.append(listEl)
}

function find(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return i
    }
  }

  return -1
}

searchBtn.onclick = function() {
  const search = prompt("укажите имя для поиска")
  const findIndex = find(users, search)

  if(findIndex>-1) {
    document.querySelector(`li:nth-child(${findIndex + 1})`).style.color = "red"
  } else {
    alert("имя не найдено")
  }
}

renderList(users)
