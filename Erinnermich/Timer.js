var timerState = 0;
var timerInterval;
var sec;
var stopwatchState = 0;
var stopwatchInterval;
var stopwatchSec = 0;
var hideState = 0;

//alert("Hello!");

function showHideElements() {
    var control  = document.getElementById("control");
    if (control.style.display === "none") {
      control.style.display = "block";
    } else {
      control.style.display = "none";
    }
}

//Show time
setInterval(function() {
    var dt = new Date();
    var currentTime = dt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("datetime").innerHTML = currentTime;
    if ((dt.getHours()==12 && dt.getMinutes()==00) ||
        (dt.getHours()==15 && dt.getMinutes()==00) ||
        (dt.getHours()==18 && dt.getMinutes()==00)) {
        document.getElementById("Achievement").play();
        alert("Food");
    }

    if (dt.getHours()==20 && dt.getMinutes()==00) {
        document.getElementById("Achievement").play();
        alert("Sleep");
    }
}, 60000)

// Timer issues

function TimerPlayStopResume(bId) {
    if (bId == "timer") {
        if (timerState == 0) {
            // start countdown
            var inputMinutes = document.getElementById("inputMinutes").value;
            var inputSeconds = document.getElementById("inputSeconds").value;
            sec = 60 * inputMinutes + parseInt(inputSeconds);
            document.getElementById("showtime").innerHTML =
                inputMinutes + ":" + inputSeconds;
            countdown();
            document.getElementById("timer").value = "Stop";
            timerState = 1;

        } else if (timerState == 1) {
            // stop countdown
            stopTimer();
            document.getElementById("timer").value = "Resume";
            timerState = 2;

        } else if (timerState == 2) {
            // resume countdown
            countdown();
            document.getElementById("timer").value = "Stop";
            timerState = 1;
        }
    }

    else if (bId == "resetTimer") {
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
            alert("Stretching, Musik, Wasser");
            open("https://docs.google.com/spreadsheets/d/19EUV_CV-yVsehXXbB-IABMfWjEw7siydBhsiAJodR9Y/edit#gid=0", "_blank")
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
    var inputMinutes = document.getElementById("inputMinutes").value;
    var inputSeconds = document.getElementById("inputSeconds").value;
    document.getElementById("showtime").innerHTML =
        inputMinutes + ":" + inputSeconds;
}

// Stopwatch issues

function StopwatchPlayStopResume(bId) {
    if (bId == "stopwatch") {
        if (stopwatchState == 0) {
            // start countdown
            stopwatchSec = 0;
            document.getElementById("showStopwatch").innerHTML =
                Math.floor(stopwatchSec/60) + ":" + (stopwatchSec%60);
                countup();
            document.getElementById("stopwatch").value = "Stop";
            stopwatchState = 1;

        } else if (stopwatchState == 1) {
            // stop countdown
            stopStopwatch();
            document.getElementById("stopwatch").value = "Resume";
            stopwatchState = 2;

        } else if (stopwatchState == 2) {
            // resume countdown
            countup();
            document.getElementById("stopwatch").value = "Stop";
            stopwatchState = 1;
        }
    }

    else if (bId == "resetStopwatch") {
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
