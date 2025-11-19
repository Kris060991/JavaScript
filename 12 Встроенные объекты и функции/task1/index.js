const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/discount.svg",
  },
  {
    title: "Скидка 10% на всё!",
    icon: "img/discount_2.svg",
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/gift.svg",
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "img/delivery.svg",
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "img/discount_3.svg",
  },
];

const popupEl = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup-title");
const popupIcon = document.querySelector(".popup-icon");
const popupButton = document.querySelector(".popup-button");

function randomGift() {
  const randomIndex = Math.floor(Math.random() * giftArr.length);
  return giftArr[randomIndex];
}

function showPopup() {
  const gift = randomGift();
  popupTitle.textContent = gift.title;
  popupIcon.src = gift.icon;
  popupEl.classList.add("popup-active")
}

popupButton.addEventListener("click", () => {
  popupEl.style.display = "none";
});

setTimeout(showPopup, 3000);
