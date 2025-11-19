function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const usersAge = [11, 23, 34, 11, 12, 4, 55, 21, 23]

function renderList(arr) {
  listEl.innerHTML = "" //очистить список

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li")
    liEl.textContent = `${i + 1}) возраст: ${arr[i]}`
    listEl.append(liEl)
  }
}

const sortBtn = document.createElement("button")
sortBtn.textContent = "сортировать"
document.body.append(sortBtn)

sortBtn.onclick = function () {
  const result = sort(usersAge)
  renderList(result)
}

const listEl = document.createElement("ul")
document.body.append(listEl)

renderList(usersAge) //вызов функции