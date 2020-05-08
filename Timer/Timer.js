//Global Variables
var t;
var myInterval;
var beep = document.getElementById("myAudio");

function setTimer() {
  clearInterval(myInterval);
  t = document.getElementById("t1").value; //Get the seconds from the input t1
  document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo

}

function countdown() {
  clearInterval(myInterval);
  myInterval = setInterval(function() {
    document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo
    t = t-1; //subtract one second

    if (t < 0) {
      document.getElementById("demo").innerHTML = 0; //Show the seconds from input t1 in in p demo
      beep.play();
    }
  }, 1000); //repeat countdown every second

}

function stopTimer() {
  clearInterval(myInterval);
}
