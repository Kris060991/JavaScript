const catsEl = document.querySelectorAll(".cats img");
const bigEl = document.querySelector(".cats-big");

catsEl.forEach((element) => {
  element.addEventListener("click", function () {
    bigEl.innerHTML = `<img class="big-img" src="${element.src}" alt="${element.alt}">`;
  });
});
