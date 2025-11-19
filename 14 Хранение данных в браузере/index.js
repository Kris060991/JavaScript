let editingIndex = null;
const filmForm = document.querySelector(".form");
const sortButton = document.getElementById("sort-btn");
const submitButton = document.querySelector(".btn");
const validator = new JustValidate(document.querySelector("#film-form"));
const titleInput = document.querySelector("#title");
const genreInput = document.querySelector("#genre");
const yearInput = document.querySelector("#year");
const isWatchedInput = document.querySelector("#isWatched");
const getFilms = () => JSON.parse(localStorage.getItem("films")) || [];
const setFilms = (films) =>
  localStorage.setItem("films", JSON.stringify(films));

validator
  .addField("#title", [
    {
      rule: "required",
      errorMessage: "Пожалуйста, введите название фильма",
    },
  ])
  .addField("#genre", [
    {
      rule: "required",
      errorMessage: "Пожалуйста, укажите жанр фильма",
    },
  ])
  .addField("#year", [
    {
      rule: "required",
      errorMessage: "Пожалуйста, укажите год выпуска",
    },
    {
      rule: "number",
      errorMessage: "Год должен быть числом",
    },
  ]);

function handleFormSubmit(e) {
  e.preventDefault();

  validator.revalidate().then((isValid) => {
    if (!isValid) {
      return;
    }

    const title = titleInput.value;
    const genre = genreInput.value;
    const year = yearInput.value;
    const isWatched = isWatchedInput.checked;

    const film = {
      title: title,
      genre: genre,
      year: year,
      isWatched: isWatched,
    };

    if (editingIndex !== null) {
      updateFilmInLocalStorage(film, editingIndex);
      editingIndex = null;
      submitButton.textContent = "Добавить";
      removeCancelEditButton();
    } else {
      addFilmToLocalStorage(film);
    }

    e.target.reset();
  });
}

function addFilmToLocalStorage(film) {
  const films = getFilms();
  films.push(film);
  setFilms(films);
  renderTable();
}

function updateFilmInLocalStorage(film, index) {
  const films = getFilms();
  films[index] = film;
  setFilms(films);
  renderTable();
}

function renderTable() {
  const films = getFilms();
  const filmTableBody = document.querySelector("#film-tbody");

  filmTableBody.innerHTML = "";

  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.classList.add("tbody-tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.year}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td> 
        <button class="edit-btn">Редактировать</button>
        <button class="delete-btn">Удалить</button> 
      </td>
    `;
    filmTableBody.appendChild(row);

    row.querySelector(".delete-btn").addEventListener("click", () => {
      films.splice(index, 1);
      setFilms(films);
      renderTable();
    });

    row.querySelector(".edit-btn").addEventListener("click", () => {
      titleInput.value = film.title;
      genreInput.value = film.genre;
      yearInput.value = film.year;
      isWatchedInput.checked = film.isWatched;
      submitButton.textContent = "Обновить";
      editingIndex = index;
      addCancelEditButton();
    });
  });
}

function addCancelEditButton() {
  if (document.querySelector(".cancel-edit-btn")) return;

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Отменить редактирование";
  cancelButton.classList.add("cancel-edit-btn");
  cancelButton.addEventListener("click", () => {
    resetForm();
  });

  filmForm.appendChild(cancelButton);
}

function removeCancelEditButton() {
  const cancelButton = document.querySelector(".cancel-edit-btn");
  if (cancelButton) {
    cancelButton.remove();
  }
}

function resetForm() {
  filmForm.reset();
  submitButton.textContent = "Добавить";
  editingIndex = null;
  removeCancelEditButton();
}

function sortFilms() {
  const sortBy = document.querySelector("#sort-by").value;
  const films = getFilms();
  films.sort((a, b) => {
    if (sortBy === "year") {
      return a[sortBy] - b[sortBy];
    } else {
      return a[sortBy].localeCompare(b[sortBy]);
    }
  });

  setFilms(films);
  renderTable();
}

sortButton.addEventListener("click", sortFilms);
filmForm.addEventListener("submit", handleFormSubmit);

renderTable();
