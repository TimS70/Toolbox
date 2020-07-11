//Global Variables
var t; //time
var b; //break time
var set; //set
var goalset; //How many sets do you want to do?
var myInterval; //countdown steam enginge
var myIntervalBreak; //break steam enginge
var beep = document.getElementById("beep"); //sound beep
var achiev = document.getElementById("achievement");
  //sound achievement, when it's done

function setTimer(loopNr=0) {
  clearInterval(myInterval);

  //Define Variables
  t = document.getElementById("t1").value; //Get the seconds from the input t1
  b = document.getElementById("t2").value;
  set = 1;
  goalset = document.getElementById("t3").value;

  //Define Exercises
  var ex = [];
  for (var i=1; i<=9; i++) {
    var value = document.getElementById("ex" + i).value;
    if (value !== "") {
      ex.push(value);
    }
  }

  $("#bLoop").click(function() {
      loop(ex = ex, loopNr = loopNr);
      $("#bLoop").click(stopTimer).text("Stop");
  });

  //Output
  document.getElementById("demo").innerHTML = t;
    //Show the seconds from input t1 in in p demo
  document.getElementById("loop").innerHTML = (loopNr+1) + ' out of ' + ex.length;
  document.getElementById("break").innerHTML = b;
}

function loop(ex, loopNr=1) {
  clearInterval(myInterval);

  //Get the steam engine running
  myInterval = setInterval(function() {

    t = t-1; //Countdown

    //If exercise finished
    if (t < 0) {
      beep.play();      //notification
      t = document.getElementById("t1").value; //Reset time to t
      loopNr += 1; //Go to next loop
    }

    //If set finished
    if (loopNr > ex.length) {
      alert("Set finished!");
      loopNr = 1;                  //Reset timer for next exercise
      set = set + 1;               //Go to next set
      clearInterval(myInterval);
      myBreak();
    }

    //If workout is finished
    if (set==goalset) {
      achiev.play();
      alert("You won!");
      clearInterval(myInterval);
    }

    //Update Output
    document.getElementById("demo").innerHTML = t;
      //Show the seconds from input t1 in in p demo

    if (t<10) {
      document.getElementById("demo").className = "red";
    }

    document.getElementById("loop").innerHTML = (loopNr+1) + ' out of ' + ex.length;
    document.getElementById("set").innerHTML = set;
    document.getElementById("CurrentExercise").innerHTML = ex[loopNr];
      //Show exercises
    document.getElementById("NextExercise").innerHTML = ex[loopNr+1];

    if ( (loopNr+1) < ex.length) {
      document.getElementById("NextExercise").innerHTML = ex[loopNr+1];
    }
    else {
      document.getElementById("NextExercise").innerHTML = "Set done!";
    }

    //Messages
    if (t<=10 && t>3) {
      document.getElementById("message").innerHTML = "Push yourself!";
    }
    else if (t<=3 && t>=0) {
      document.getElementById("message").innerHTML = "Prepare for the next exercise!";
    }
    else {
      document.getElementById("message").innerHTML = " ";

    } //Close message if's
  }, 1000); //Close setInterval and repeat each second
} //Close function

function stopTimer() {
  clearInterval(myInterval);
  clearInterval(myIntervalBreak);
}

function myBreak() {
  myIntervalBreak = setInterval(function() {

    //If break is over
    if (b<0) {
      beep.play();
      clearInterval(myIntervalBreak);
      loop();
    }

    b = b-1;

    if (b<10) {
      document.getElementById("break").className = "red";
    }

    document.getElementById("break").innerHTML = b;

  }, 1000) //Close setTimer and repeat every second
}

function ShowHideElements() {
    let buttonLabel = $("#ShowHideElements").text();
    //i

    if (buttonLabel === "Show Exercises (Alt + c)") {
        $(".exercise").show();
        $("#ShowHideElements").text("Hide Exercises (Alt + c)");
    } else {
        $(".exercise").hide();
        $("#ShowHideElements").text("Show Exercises (Alt + c)");
    }
}

$(document).ready(function() {
    $(".exercise").hide();
    $("#ShowHideElements").click(ShowHideElements);
    $("#bReset").click(function() {
        setTimer();
    });
});