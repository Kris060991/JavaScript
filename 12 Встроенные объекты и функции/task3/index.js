const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".text");
const btnEl = document.querySelector(".btn");
const promocodeArr = [
  {
    promocode: "PROM10",
    gift: "Скидка 10%",
  },
  {
    promocode: "PROM50",
    gift: "Скидка 50%",
  },
  {
    promocode: "GIFT",
    gift: "Подарок в корзине",
  },
];

function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
}

function getCookie() {
  const cookies = {};
  document.cookie.split(";").forEach((item) => {
    const [name, value] = item.trim().split("=");
    cookies[name] = decodeURIComponent(value);
  });
  return cookies;
}

function successMessage(gift) {
  const successMessage = document.createElement("p");
  successMessage.textContent = `Промокод применён. ${gift}`;
  successMessage.classList.add("success-text");
  formEl.appendChild(successMessage);
}

const cookies = getCookie();
if (cookies["activePromo"]) {
  const activePromo = promocodeArr.find(
    (item) => item.promocode === cookies["activePromo"]
  );
  if (activePromo) {
    successMessage(activePromo.gift);
    inputEl.value = activePromo.promocode;
  }
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const removeMessage = document.querySelector(".success-text");
  if (removeMessage) {
    removeMessage.remove();
  }

  const enteredPromo = inputEl.value;
  const foundPromo = promocodeArr.find(
    (item) => item.promocode === enteredPromo
  );

  if (foundPromo) {
    setCookie("activePromo", foundPromo.promocode);
    successMessage(foundPromo.gift);
    inputEl.value = foundPromo.promocode;
  } else {
    inputEl.value = "";
  }
});
