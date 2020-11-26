let secondsSh = 60;
let minutesSh = 4;

//here we areassigning a default values
let intervalShort = null;
let statusShort = "stopSh";

//--------------
let secondsStringSh = 0;
let minutesStringSh = 0;

const stopWatchShort = () => {
  console.log(minutesSh, secondsSh);
  if (secondsSh != 0) {
    secondsSh--;

    if (minutesSh != 0 && secondsSh == 0) {
      secondsSh = 60;
      minutesSh--;
    }
  }
  // displaying added 0
  if (secondsSh < 10) {
    secondsStringSh = `0${secondsSh}`;
  } else {
    secondsStringSh = secondsSh;
  }

  if (minutesSh < 10) {
    minutesStringSh = `0${minutesSh}`;
  } else {
    minutesStringsh = minutesSh;
  }

  document.getElementById(
    "watch-display-Short"
  ).innerHTML = `${minutesStringSh}:${secondsStringSh}`;
  if (minutesStringSh === "00" && secondsStringSh === "00") {
    playSound();
  }
};

const startStopShort = () => {
  if (statusShort == "stopSh") {
    intervalShort = window.setInterval(stopWatchShort, 1);
    document.getElementById("startstop-Short").innerHTML = "Stop";
    statusShort = "startSh";
    playSound();
  } else {
    window.clearInterval(intervalShort);
    document.getElementById("startstop-Short").innerHTML = "Start";
    statusShort = "stopSh";
    playSound();
  }
};

const restShort = () => {
  window.clearInterval(intervalShort);
  secondsSh = 60;
  minutesSh = 4;

  document.getElementById("startstop-Short").innerHTML = "Start";
  document.getElementById("watch-display-Short").innerHTML = `05:00`;
  statusShort = "stopSh";
  playSound();
};
