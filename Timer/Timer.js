var x;
var myInterval;
var beep = document.getElementById("myAudio");

function setTimer() {
  x = document.getElementById("t1").value; //Get the seconds from the input t1
  document.getElementById("demo").innerHTML = x; //Show the seconds from input t1 in in p demo
}

function countdown() {
  clearInterval(myInterval);
  myInterval = setInterval(function() {
    x = x-1; //subtract one second
    document.getElementById("demo").innerHTML = x; //Show the seconds from input t1 in in p demo

    if (x < 0) {
      beep.play();
      alert("Done!");
      document.getElementById("demo").innerHTML = 0;
      clearInterval(myInterval);
    }

//Labels
    if (x<=10 && x>0) {
      document.getElementById("message").innerHTML = "Push yourself!";
    }
    else if (x==0) {
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
    x = x-1; //subtract one second
    document.getElementById("demo").innerHTML = x; //Show the seconds from input t1 in in p demo

    if (x == 0) {
      beep.play();
      x = document.getElementById("t1").value;
    }

//Labels
    if (x<=10 && x>3) {
      document.getElementById("message").innerHTML = "Push yourself!";
    }
    else if (x<=3 && x>=0) {
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
