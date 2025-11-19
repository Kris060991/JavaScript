const numbersEL = document.querySelector('.all-elements');
const numbers = [12, 5, 8, 20, 3, 16];

const buttonMin = document.querySelector('.min');
const buttonMax = document.querySelector('.max');
const minEl = document.querySelector('.minNumber');
const maxEl = document.querySelector('.maxNumber');

for (const number of numbers) {
  numbersEL.textContent = numbers;
}

buttonMin.onclick = function () {
  const min = Math.min(...numbers);
  minEl.textContent = min;
}

buttonMax.onclick = function () {
  const max = Math.max(...numbers);
  maxEl.textContent = max;
}