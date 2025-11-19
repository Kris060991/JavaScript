const formEl = document.querySelector(".form");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const genderEl = document.querySelector(".gender");
const serviceEl = document.querySelector(".service");
const interestsEl = document.querySelector(".custom-checkbox__field");
const commentEl = document.querySelector(".comment");
const buttonEl = document.querySelector(".btn");
const outputEl = document.querySelector(".output");

inputName.addEventListener("invalid", function () {
  inputName.setCustomValidity("Введите имя");
});
inputName.addEventListener("input", function () {
  inputName.setCustomValidity("");
});

inputEmail.addEventListener("invalid", function () {
  inputEmail.setCustomValidity(
    "Введите корректный email. Email должен содержать символ '@'"
  );
});
inputEmail.addEventListener("input", function () {
  inputEmail.setCustomValidity("");
});

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = inputName.value;
  const email = inputEmail.value;
  const selectedValue = document.querySelector('input[name="gender"]:checked')?.value;
  const service = serviceEl.value;
  const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedInterests = Array.from(selectedCheckboxes).map(cb => cb.value);
  const comments = commentEl.value;

  outputEl.innerHTML = `
      <h2> Результаты опроса: </h2>
      <p>Имя пользователя: ${name}</p>
      <p>Email: ${email}</p>
      <p>Пол: ${selectedValue}</p>
      <p>Оценка сервиса: ${service}</p>
      <p>Интересы пользователя: ${selectedInterests}</p>
      <p>Дополнительные комментарии: ${comments}</p>
    `;
});
