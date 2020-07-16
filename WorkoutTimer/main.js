let myInterval;
let myBreakInterval;
let tInit = null;
let t = null
let b = null;
let bInit = null;
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

function startLoop() {
    clearInterval(myInterval);
    t = tInit;

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
    b = bInit;
    myBreakInterval = setInterval(function() {

        if (b < 10) {
            $("#iBreak").css("color", "red");

            //If break is over
            if (b < 1) {
                clearInterval(myBreakInterval);
                endCountdown();
                b = bInit;
                callback();
                startLoop();
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
}

function showControl() {
    $("#control").show();
    $("#bHide").click(function() {
        hideControl();
    });
}

// TODO: Stop and Resume
function stopTimer() {
    clearInterval(myInterval);
    clearInterval(myBreakInterval);

    $("#Start").text("Resume").click(function() {
        resumeTimer();
    });
}

function resumeTimer() {
    startLoop();

    $("#Start").text("Stop").click(function() {
        stopTimer();
    });
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
        startLoop();
        $("#Start").click(function() {
           $(this).text("Stop").click(function() {
               stopTimer();
           });
        });
    });

    $(".myInput").change(function() {
       updateInput();
    });


// TODO: Tooltips for the numbers
    $( "#iSeconds" ).tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        }
    });
});