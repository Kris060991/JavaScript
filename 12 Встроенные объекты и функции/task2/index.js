const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".text");
const bntEl = document.querySelector(".btn");
const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%",
};

function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/`;
}

function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}

function successMessage() {
  inputEl.value = promocodeObj.promocode;
  const successMessage = document.createElement("p");
  successMessage.textContent = `Промокод применён. ${promocodeObj.gift}`;
  successMessage.classList.add("success-text");
  formEl.append(successMessage);
}

const cookie = getCookie();
if (cookie["activePromo"] == promocodeObj.promocode) {
  successMessage();
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const removeMessage = document.querySelector(".success-text");
  if (removeMessage) {
    removeMessage.remove();
  }

  if (inputEl.value == promocodeObj.promocode) {
    setCookie("activePromo", promocodeObj.promocode);
    successMessage();
  } else {
    inputEl.value = "";
  }
});

