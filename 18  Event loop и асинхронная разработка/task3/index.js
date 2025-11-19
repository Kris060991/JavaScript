const catsContainer = document.querySelector(".cats");
const dogsContainer = document.querySelector(".dogs");
const cats = ["../img/cat1.jpg", "../img/cat2.jpg", "../img/cat3.jpg"];
const dogs = ["../img/dog1.jpg", "../img/dog2.jpg", "../img/dog3.jpg"];
const getTime = () => Math.floor(Math.random() * 3) + 2;
const loadTime = getTime();

function fetchImages(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, loadTime * 1000);
  });
}

function displayImages(urls, container) {
  const div = document.createElement("div");
  urls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    div.append(img);
  });

  container.append(div);
  return div;
}

function progress(arr, container) {
  return new Promise((resolve) => {
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const timerEl = document.createElement("div");
    timerEl.className = "timer";

    progressContainer.append(progressBar, timerEl);
    container.after(progressContainer);

    let secondsPassed = 0;
    timerEl.textContent = `${secondsPassed} c`;

    const timerInterval = setInterval(() => {
      secondsPassed++;
      timerEl.textContent = `${secondsPassed} c`;
    }, 1000);

    progressBar.style.transition = `transform ${loadTime}s linear`;
    setTimeout(() => {
      progressBar.style.transform = "scaleX(1)";
    }, 50);

    fetchImages(arr).then((urls) => {
      clearInterval(timerInterval);

      displayImages(urls, container);
      resolve();
    });
  });
}

window.addEventListener("load", () => {
  progress(cats, catsContainer)
    .then(() => {
      return progress(dogs, dogsContainer);
    });
});
