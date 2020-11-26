let seconds = 60;
let minutes = 24;

//here we areassigning a default values
let interval = null;
let status = "stop";

//--------------
let secondsString = 0;
let minutesString = 0;

const stopWatch = () => {
  if (seconds != 0) {
    seconds--;

    if (minutes != 0 && seconds == 0) {
      seconds = 60;
      minutes--;
    }
  }
  // displaying added 0
  if (seconds < 10) {
    secondsString = `0${seconds}`;
  } else {
    secondsString = seconds;
  }

  if (minutes < 10) {
    minutesString = `0${minutes}`;
  } else {
    minutesString = minutes;
  }

  document.getElementById(
    "watch-display"
  ).innerHTML = `${minutesString}:${secondsString}`;
  if (minutesString === "00" && secondsString === "00") {
    playSound();
  }
};

const startStop = () => {
  if (status == "stop") {
    interval = window.setInterval(stopWatch, 1);
    document.getElementById("startstop").innerHTML = "Stop";
    status = "start";
    playSound();
  } else {
    window.clearInterval(interval);
    document.getElementById("startstop").innerHTML = "Start";
    status = "stop";
    playSound();
  }
};

const rest = () => {
  window.clearInterval(interval);
  seconds = 60;
  minutes = 24;

  document.getElementById("startstop").innerHTML = "Start";
  document.getElementById("watch-display").innerHTML = `25:00`;
  status = "stop";
  playSound();
};
