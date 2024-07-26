let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isPlaying = false;
let laps = []

const playButton = document.querySelector(".play");
const lapButton = document.querySelector(".lap");
const resetButton = document.querySelector(".reset");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const play = document.getElementById("play")
const lapTime = document.querySelector(".lap-time")

playButton.addEventListener("click", function() {
  isPlaying = !isPlaying;
  start();
});

lapButton.addEventListener("click", function() {
  let lap = `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`
  
  lapTime.innerHTML += `<p>${lap}</p>`
     
});

resetButton.addEventListener("click", function() {
  pause();
  reset();
  updateTimerDisplay();
});

function start() {
if(isPlaying){
  play.src = "images/pause.png"
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateTimerDisplay();
  }, 1000);
}else{
  play.src = "images/play.png"
  pause();
}
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapTime.innerHTML = ""
  laps = null 
  play.src = "images/play.png"
}

function updateTimerDisplay() {
  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}