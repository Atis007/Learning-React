// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timer status

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch function

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // if seconds, minutes or hours are a one digit number, then adding there a 0 before the number to make it look like a timer
  seconds < 10
    ? (leadingSeconds = "0" + seconds.toString())
    : (leadingSeconds = seconds);

  minutes < 10
    ? (leadingMinutes = "0" + minutes.toString())
    : (leadingMinutes = minutes);

  hours < 10 ? (leadingHours = "0" + hours.toString()) : (leadingHours = hours);

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

//window.setInterval(stopWatch, 10000); // 1 second = 1000 milliseconds, so for every 1 second, the second value will be incremented by 1

startStopBtn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStopBtn").innerHTML =
      `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";

    return;
  }

  window.clearInterval(timerInterval);
  document.getElementById("startStopBtn").innerHTML =
    `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerText = "00:00:00";
  document.getElementById("startStopBtn").innerHTML =
    `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});
