let myInterval;
let myBreakInterval;
let maxLoop = null;
let maxSet = null;
let loopNr = 1;
let set = 1;

function updateInput() {
    maxLoop = $("#iMaxLoops").val();
    maxSet = $("#iMaxSets").val();
    $("#loop").text((loopNr) + ' out of ' + maxLoop);
    $("#set").text(set);
}

function startLoop() {
    clearInterval(myInterval);
    let t = $("#iSeconds").val();

    myInterval = setInterval(function() {
        if (t < 10) {
            if (t < 1) {
                endCountdown();
                t = $("#iSeconds").val();

                if (loopNr >= maxLoop) {
                    if (set >= maxSet) {
                        endTimer();
                    }
                    else {
                        loopNr = 1;
                        endSet();
                        set++;
                        $("#set").text(set);
                    }
                } else {
                    loopNr++;
                    $("#loop").text((loopNr) + ' out of ' +
                        maxLoop);
                }

            } else {
                $("#showSeconds").css("color", "red");
            }
        }
        $("#showSeconds").text(t);
        t--; //Countdown
    }, 1000);
}

function myBreak() {
    let b = $("#iBreak").val();
    myBreakInterval = setInterval(function() {

        if (b < 10) {
            $("#break").css("color", "red");

            //If break is over
            if (b < 1) {
                clearInterval(myBreakInterval);
                endCountdown();
                loopNr = 1;
                set = 1;
                startLoop();
            }
        }
        $("#break").text(b);
        b--;
    }, 1000) //Close setTimer and repeat every second
}

function endCountdown() {
    document.getElementById("beep").play();
    $(".countdown").css("color", "black");
}

function endSet() {
    clearInterval(myInterval);
    myBreak();
}

function endTimer() {
    clearInterval(myInterval);
    clearInterval(myBreakInterval);
    document.getElementById("achievement")
        .play();
}

$(document).ready(function() {
    updateInput();

    $("#Start").click(function() {
        startLoop();
    });

    $(".myInput").change(function() {
       updateInput();
    });
});