//Global Variables
var t;
var myInterval;
var beep = document.getElementById("myAudio");
var loopNr;
var maxLoop;

function setTimer() {
  t = document.getElementById("t1").value; //Get the seconds from the input t1
  document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo
  loopNr = 1;
  clearInterval(myInterval);
  //Define Exercises
  var Ex1 = document.getElementById("ex1").value;
  var Ex2 = document.getElementById("ex2").value;
  var Ex3 = document.getElementById("ex3").value;
  var Ex4 = document.getElementById("ex4").value;
  var Ex5 = document.getElementById("ex5").value;
  var Ex6 = document.getElementById("ex6").value;
  var Ex7 = document.getElementById("ex7").value;
  var Ex8 = document.getElementById("ex8").value;
  var Ex9 = document.getElementById("ex9").value;

  //Set maxLoop to the number of exercises with entries
    // One day, this will work...
    // for(var i=1; i<=9; i++) {
    //   if (window['Ex'+i] == "") {
    //     maxLoop = i-1;
    //   }

  //Define maximum number of iterations per set
  if (Ex1=="") {alert("Need exercise for looping")}
  else if (Ex2=="") {maxLoop=1}
  else if (Ex3=="") {maxLoop=2}
  else if (Ex4=="") {maxLoop=3}
  else if (Ex5=="") {maxLoop=4}
  else if (Ex6=="") {maxLoop=5}
  else if (Ex7=="") {maxLoop=6}
  else if (Ex8=="") {maxLoop=7}
  else if (Ex9=="") {maxLoop=8}
  else {maxLoop=9}

  document.getElementById("loop").innerHTML = loopNr + ' out of ' + maxLoop;
}

function loop() {
  clearInterval(myInterval);
  myInterval = setInterval(function() {
    document.getElementById("demo").innerHTML = t; //Show the seconds from input t1 in in p demo
    document.getElementById("loop").innerHTML = loopNr + ' out of ' + maxLoop;
    t = t-1; //subtract one second

    if (t < 0) {
      t = document.getElementById("t1").value;
      beep.play();
      loopNr = loopNr + 1;    //Go to next loop
      document.getElementById("loop").innerHTML = loopNr;

        if (loopNr > maxLoop) {
          alert("Final exercise reached!");
          setTimer()
        }

    }


    //Show current exercise
    if (loopNr == 1) {
      document.getElementById("CurrentExercise").innerHTML = Ex1;
      document.getElementById("NextExercise").innerHTML = Ex2;
    }
    if (loopNr == 2) {
      document.getElementById("CurrentExercise").innerHTML = Ex2;
      document.getElementById("NextExercise").innerHTML = Ex3;
    }
    if (loopNr == 3) {
      document.getElementById("CurrentExercise").innerHTML = Ex3;
      document.getElementById("NextExercise").innerHTML = Ex4;
    }
    if (loopNr == 4) {
      document.getElementById("CurrentExercise").innerHTML = Ex4;
      document.getElementById("NextExercise").innerHTML = Ex5;
    }
    if (loopNr == 5) {
      document.getElementById("CurrentExercise").innerHTML = Ex5;
      document.getElementById("NextExercise").innerHTML = Ex6;
    }
    if (loopNr == 6) {
      document.getElementById("CurrentExercise").innerHTML = Ex6;
      document.getElementById("NextExercise").innerHTML = Ex7;
    }
    if (loopNr == 7) {
      document.getElementById("CurrentExercise").innerHTML = Ex7;
      document.getElementById("NextExercise").innerHTML = Ex8;
    }
    if (loopNr == 8) {
      document.getElementById("CurrentExercise").innerHTML = Ex8;
      document.getElementById("NextExercise").innerHTML = Ex9;
    }
    if (loopNr == 9) {
      document.getElementById("CurrentExercise").innerHTML = Ex9;
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
