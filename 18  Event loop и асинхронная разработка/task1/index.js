const catsContainer = document.querySelector(".cats");
const dogsContainer = document.querySelector(".dogs");
const cats = ["../img/cat1.jpg", "../img/cat2.jpg", "../img/cat3.jpg"];
const dogs = ["../img/dog1.jpg", "../img/dog2.jpg", "../img/dog3.jpg"];
const getTime = () => Math.floor(Math.random() * 3) + 2;

function fetchImages(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, getTime() * 1000);
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
}

window.addEventListener("load", () => {
  fetchImages(cats).then((arr) => displayImages(arr, catsContainer));
  fetchImages(dogs).then((arr) => displayImages(arr, dogsContainer));
});

