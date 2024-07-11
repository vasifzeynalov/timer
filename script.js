let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");
let lapCount = 0;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", recordLap);

function startTimer() {
  timer = setInterval(updateTimer, 10);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  lapCount = 0;
  display.textContent = "00:00:00";
  lapsContainer.innerHTML = "";
  startButton.disabled = false;
}

function recordLap() {
  if (lapCount < 30) {
    lapCount++;
    const lapTime = document.createElement("div");
    lapTime.className = "lap";
    lapTime.textContent = `${lapCount}. ${display.textContent}`;
    lapsContainer.appendChild(lapTime);
  }
}

function updateTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  display.textContent =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds);
}
