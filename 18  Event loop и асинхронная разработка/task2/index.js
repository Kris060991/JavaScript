function progress(time) {
  return new Promise((resolve) => {
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const timerEl = document.createElement("div");
    timerEl.className = "timer";

    progressContainer.append(progressBar, timerEl);
    document.body.append(progressContainer);

    const animationTime = Math.max(time, 2);
    let secondsPassed = 0;
    timerEl.textContent = `${secondsPassed} c`;
    const timerInterval = setInterval(() => {
      secondsPassed++;
      timerEl.textContent = `${secondsPassed} c`;
    }, 1000);

    progressBar.style.transition = `transform ${animationTime}s linear`;
    setTimeout(() => {
      progressBar.style.transform = "scaleX(1)";
    }, 50);

    setTimeout(() => {
      clearInterval(timerInterval);
      resolve();
    }, animationTime * 1000);
  });
}

window.addEventListener("load", () => {
  progress(5);
});