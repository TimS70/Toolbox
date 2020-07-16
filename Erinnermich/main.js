let timerState = 0;
let timerInterval;
let sec;
let stopwatchState = 0;
let stopwatchInterval;
let stopwatchSec = 0;

function showHideElements() {
    let control  = document.getElementById("control");
    if (control.style.display === "none") {
      control.style.display = "block";
    } else {
      control.style.display = "none";
    }
}

//Show time
setInterval(function() {
    let dt = new Date();
    document.getElementById("datetime").innerHTML =
        dt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    if ((dt.getHours()===10 && dt.getMinutes()===0)  ||
        (dt.getHours()===12 && dt.getMinutes()===30) ||
        (dt.getHours()===15 && dt.getMinutes()===30) ||
        (dt.getHours()===18 && dt.getMinutes()===30)) {

        document.getElementById("beep").play();
        setTimeout(function() {
            document.getElementById("beep").play();
        }, 1000);
        alert("Food");
    }

    if (dt.getHours()===20 && dt.getMinutes()===0) {
        document.getElementById("beep").play();
        alert("Sleep");
    }
}, 60000)

// Timer issues

function TimerPlayStopResume(bId) {
    if (bId === "timer") {
        if (timerState === 0) {
            // start countdown
            let inputMinutes = document.getElementById("inputMinutes").value;
            let inputSeconds = document.getElementById("inputSeconds").value;
            sec = 60 * inputMinutes + parseInt(inputSeconds);
            document.getElementById("showtime").innerHTML =
                inputMinutes + ":" + inputSeconds;
            countdown();
            document.getElementById("timer").value = "Stop";
            timerState = 1;

        } else if (timerState === 1) {
            // stop countdown
            stopTimer();
            document.getElementById("timer").value = "Resume";
            timerState = 2;

        } else if (timerState === 2) {
            // resume countdown
            countdown();
            document.getElementById("timer").value = "Stop";
            timerState = 1;
        }
    }

    else if (bId === "resetTimer") {
        // reset countdown
        resetTimer();
        document.getElementById("timer").value = "Start";
        timerState = 0;
    }
}

function countdown() {
    timerInterval = setInterval(function() {
        sec -= 1;

        if (sec<=0) {
            document.getElementById("beep").play();
            open("https://docs.google.com/spreadsheets/d/19EUV_CV-yVsehXXbB-IABMfWjEw7siydBhsiAJodR9Y/edit#gid=0");
            open("file:///C:/Users/User/GitHub/Toolbox/Erinnermich/Note.html");
            clearInterval(timerInterval);
            resetTimer();
            document.getElementById("timer").value = "Start";
            timerState=0;
        }

        //Output
        document.getElementById("showtime").innerHTML =
            Math.floor(sec/60) + ":" + (sec%60);
    }, 1000) //close Interval
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    let inputMinutes = document.getElementById("inputMinutes").value;
    let inputSeconds = document.getElementById("inputSeconds").value;
    document.getElementById("showtime").innerHTML =
        inputMinutes + ":" + inputSeconds;
}

// Stopwatch issues

function StopwatchPlayStopResume(bId) {
    if (bId === "stopwatch") {
        if (stopwatchState === 0) {
            // start countdown
            stopwatchSec = 0;
            document.getElementById("showStopwatch").innerHTML =
                Math.floor(stopwatchSec/60) + ":" + (stopwatchSec%60);
                countup();
            document.getElementById("stopwatch").value = "Stop";
            stopwatchState = 1;

        } else if (stopwatchState === 1) {
            // stop countdown
            stopStopwatch();
            document.getElementById("stopwatch").value = "Resume";
            stopwatchState = 2;

        } else if (stopwatchState === 2) {
            // resume countdown
            countup();
            document.getElementById("stopwatch").value = "Stop";
            stopwatchState = 1;
        }
    }

    else if (bId === "resetStopwatch") {
        // reset countdown
        resetStopwatch();
        document.getElementById("stopwatch").value = "Start";
        stopwatchState = 0;
    }
}

function countup() {
    stopwatchInterval = setInterval(function() {
        stopwatchSec += 1;

        //Output
        document.getElementById("showStopwatch").innerHTML =
            Math.floor(stopwatchSec/60) + ":" + (stopwatchSec%60);
    }, 1000) //close Interval
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById("showStopwatch").innerHTML = 0 + ":" + 0;
}

$(document).ready(() => {
	open("file:///C:/Users/User/GitHub/Toolbox/Erinnermich/Note.html");
	TimerPlayStopResume("timer");
});