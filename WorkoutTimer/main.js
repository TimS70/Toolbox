let myInterval;
let myBreakInterval;
let tInit = null;
let t = tInit;
let bInit = null;
let b = bInit;
let maxLoop = null;
let maxSet = null;
let loop = 1;
let set = 1;

function initInput() {
    tInit = $("#iSeconds").val();
    bInit = $("#iBreak").val();
}

function updateInput() {
    tInit = $("#iSeconds").val();
    bInit = $("#iBreak").val();
    maxLoop = $("#iMaxLoops").val();
    maxSet = $("#iMaxSets").val();
    $("#loop").text(loop + '/');
    $("#set").text(set + '/');
}

function myTimer() {
    clearInterval(myInterval);

    myInterval = setInterval(function() {
        if (t < 10) {
            if (t < 1) {
                endCountdown();
                t = tInit;

                if (loop >= maxLoop) {
                    if (set >= maxSet) {
                        endTimer();
                    }
                    else {
                        clearInterval(myInterval);
                        myBreak(function() {
                            loop = 1;
                            $("#loop").text(loop + '/');
                            set++;
                            $("#set").text(set + '/');
                        });
                    }
                } else {
                    loop++;
                    $("#loop").text(loop + '/');
                }
            } else {
                $("#iSeconds").css("color", "red");
            }
        }
        $("#iSeconds").val(t);
        t--; //Countdown
    }, 1000);
}

function myBreak(callback) {
    myBreakInterval = setInterval(function() {

        if (b < 10) {
            $("#iBreak").css("color", "red");

            //If break is over
            if (b < 1) {
                clearInterval(myBreakInterval);
                endCountdown();
                b = bInit;
                callback();
                myTimer();
            }
        }
        $("#iBreak").val(b);
        b--;
    }, 1000) //Close setTimer and repeat every second
}

function endCountdown() {
    document.getElementById("beep").play();
    $("#iSeconds").css("color", "#D79922");
    $("#iBreak").css("color", "#F13C20");
}

function endTimer() {
    clearInterval(myInterval);
    clearInterval(myBreakInterval);
    document.getElementById("achievement")
        .play();
    reset();
}

function showControl() {
    $("#control").show();
    $("#bHide").click(function() {
        hideControl();
    });
}

function initTimer() {
    t = tInit;
    b = bInit;
    myTimer();

    $("#Start").text("Stop (q)").click(function() {
        stopTimer();
    });
}

// TODO: Stop and Resume
function stopTimer() {
    clearInterval(myInterval);
    clearInterval(myBreakInterval);

    $("#Start").text("Resume (q)").click(function() {
        resumeTimer();
    });
}

function resumeTimer() {
    t = $("#iSeconds").val();
    b = $("#iBreak").val();
    myTimer();

    $("#Start").text("Stop (q)").click(function() {
        stopTimer();
    });
}

function resetTimer() {
    clearInterval(myInterval);
    clearInterval(myBreakInterval);
    $("#iSeconds").val(tInit);
    $("#iBreak").val(bInit);
    loop = 1;
    set = 1;
    $("#loop").text(loop + '/');
    $("#set").text(set + '/');
}

function hideControl() {
    $("#control").hide();
    $("#bHide").click(function() {
        showControl();
    });
}

$(document).ready(function() {
    initInput();
    updateInput();
    hideControl();

    $("#Start").click(function() {
        initTimer();
    });

    $(".myInput").change(function() {
       updateInput();
    });

    $("#bReset").click(function() {
        resetTimer();
    });

// TODO: Tooltips for the numbers
    $( "#iSeconds" ).tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        }
    });
});