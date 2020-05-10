var state = 0;
var myInterval;
var sec;

function playStopResume(bId) {
    if (bId == "play") {
        if (state == 0) {
            // start countdown
            var inputMinutes = document.getElementById("inputMinutes").value;
            var inputSeconds = document.getElementById("inputSeconds").value;
            sec = 60 * inputMinutes + parseInt(inputSeconds);
            document.getElementById("showtime").innerHTML =
                inputMinutes + " : " + inputSeconds;
            countdown();
            document.getElementById("play").value = "Stop";
            state = 1;

        } else if (state == 1) {
            // stop countdown
            stopTimer();
            document.getElementById("play").value = "Resume";
            state = 2;

        } else if (state == 2) {
            // resume countdown
            countdown();
            document.getElementById("play").value = "Stop";
            state = 1;
        }
    }

    else if (bId == "reset") {
        // reset countdown
        reset();
        document.getElementById("play").value = "Start";
        state = 0;
    }
}

function countdown() {
    myInterval = setInterval(function() {
        sec -= 1;

        if (sec<=0) {
            var beep = document.getElementById("beep"); //sound beep
            beep.play();
            alert("Stretching, Musik, Wasser")
            open("https://docs.google.com/spreadsheets/d/19EUV_CV-yVsehXXbB-IABMfWjEw7siydBhsiAJodR9Y/edit#gid=0", "_blank")
            clearInterval(myInterval);
            reset();
            document.getElementById("play").value = "Start";
            state=0;
        }

        //Output
        document.getElementById("showtime").innerHTML =
            Math.floor(sec/60) + " : " + (sec%60);
    }, 1000) //close Interval
}

function stopTimer() {
    clearInterval(myInterval);
}

function reset() {
    clearInterval(myInterval);
    var inputMinutes = document.getElementById("inputMinutes").value;
    var inputSeconds = document.getElementById("inputSeconds").value;
    document.getElementById("showtime").innerHTML =
        inputMinutes + " : " + inputSeconds;
}
