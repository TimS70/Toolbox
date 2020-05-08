var t;
var myInterval;
var beep = document.getElementById("myAudio");
var loopNr;
function setTimer() {
  t = document.getElementById("t1").value; //Get the seconds from the input t1
  document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo
  loopNr = 1;
}

function countdown() {
  clearInterval(myInterval);
  myInterval = setInterval(function() {
    document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo
    t = t-1; //subtract one second

    if (t < 0) {
      document.getElementById("demo").innerHTML = 0;
      beep.play();
      alert("Done!");
      clearInterval(myInterval);
    }

//Labels
    if (t<=10 && t>0) {
      document.getElementById("message").innerHTML = "Push yourself!";
    }
    else if (t==0) {
      document.getElementById("message").innerHTML = "Done!";
    }
    else {
      document.getElementById("message").innerHTML = " ";
    }
  }, 1000); //repeat countdown every second
}

function loop() {

  clearInterval(myInterval);
  myInterval = setInterval(function() {
    document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo
    t = t-1; //subtract one second

    if (t < 0) {
      t = document.getElementById("t1").value;
      beep.play();
    //  loopNr = loopNr + 1;
    loopNr = loopNr + 1;
    document.getElementById("loopNr").innerHTML = loopNr;
    }


//Labels
    if (t<=10 && t>3) {
      document.getElementById("message").innerHTML = "Push yourself!";
    }
    else if (t<=3 && t>=0) {
      document.getElementById("message").innerHTML = "Prepare for the next exercise!";
    }
    else {
      document.getElementById("message").innerHTML = " ";
    }
  }, 1000); //repeat countdown every second

}

function stopTimer() {
  clearInterval(myInterval);
}
