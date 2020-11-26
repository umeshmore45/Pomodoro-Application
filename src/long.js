let secondsLg = 60;
let minutesLg = 14;

//here we areassigning a default values
let intervalLong = null;
let statusLong = "stopLg";

//--------------
let secondsStringLg = 0;
let minutesStringLg = 0;

const stopWatchLong = () => {
  console.log(minutesLg, secondsLg);
  if (secondsLg != 0) {
    secondsLg--;

    if (minutesLg != 0 && secondsLg == 0) {
      secondsLg = 60;
      minutesLg--;
    }
  }
  // displaying added 0
  if (secondsLg < 10) {
    secondsStringLg = `0${secondsLg}`;
  } else {
    secondsStringLg = secondsLg;
  }

  if (minutesLg < 10) {
    minutesStringLg = `0${minutesLg}`;
  } else {
    minutesStringLg = minutesLg;
  }

  document.getElementById(
    "watch-display-Long"
  ).innerHTML = `${minutesStringLg}:${secondsStringLg}`;
  if (minutesStringLg === "00" && secondsStringLg === "00") {
    playSound();
  }
};

const startStopLong = () => {
  if (statusLong == "stopLg") {
    intervalLong = window.setInterval(stopWatchLong, 1);
    document.getElementById("startstop-Long").innerHTML = "Stop";
    statusLong = "startLg";
    playSound();
  } else {
    window.clearInterval(intervalLong);
    document.getElementById("startstop-Long").innerHTML = "Start";
    statusLong = "stopLg";
    playSound();
  }
};

const restLong = () => {
  window.clearInterval(intervalLong);
  secondsLg = 60;
  minutesLg = 14;

  document.getElementById("startstop-Long").innerHTML = "Start";
  document.getElementById("watch-display-Long").innerHTML = `15:00`;
  statusLong = "stopLg";
  playSound();
};
