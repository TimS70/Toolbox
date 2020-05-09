//Global Variables
var t; //time
var loopNr;
var maxLoop;
var b; //break time
var set; //set
var goalset; //How many sets do you want to do?
var myInterval; //countdown steam enginge
var myIntervalBreak; //break steam enginge
var beep = document.getElementById("beep"); //sound beep
var achiev = document.getElementById("achievement");
  //sound achievement, when it's done

//Exercise Variables
var Ex1;
var Ex2;
var Ex3;
var Ex4;
var Ex5;
var Ex6;
var Ex7;
var Ex8;
var Ex9;

function setTimer() {
  clearInterval(myInterval);

  //Define Variables
  t = document.getElementById("t1").value; //Get the seconds from the input t1
  b = document.getElementById("t2").value;
  loopNr = 1;
  set = 1;
  goalset = document.getElementById("t3").value;

  //Define Exercises
  Ex1 = document.getElementById("ex1").value;
  Ex2 = document.getElementById("ex2").value;
  Ex3 = document.getElementById("ex3").value;
  Ex4 = document.getElementById("ex4").value;
  Ex5 = document.getElementById("ex5").value;
  Ex6 = document.getElementById("ex6").value;
  Ex7 = document.getElementById("ex7").value;
  Ex8 = document.getElementById("ex8").value;
  Ex9 = document.getElementById("ex9").value;

  //Set maxLoop to the number of exercises with entries
    // One day, this will work...
    // for(var i=1; i<=9; i++) {
    //   if (window['Ex'+i] == "") {
    //     maxLoop = i-1;
    //   }

  //Define maxloop (maximum number of iterations) per set
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

  //Output
  document.getElementById("demo").innerHTML = t;
    //Show the seconds from input t1 in in p demo
  document.getElementById("loop").innerHTML = loopNr + ' out of ' + maxLoop;
  document.getElementById("break").innerHTML = b;
}

function loop() {
  clearInterval(myInterval);

  //Get the steam engine running
  myInterval = setInterval(function() {

    t = t-1; //Countdown

    //If exercise finished
    if (t < 0) {
      beep.play();      //notification
      t = document.getElementById("t1").value; //Reset time to t
      loopNr = loopNr + 1; //Go to next loop
    }

    //If set finished
    if (loopNr > maxLoop) {
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

    document.getElementById("loop").innerHTML = loopNr + ' out of ' + maxLoop;
    document.getElementById("set").innerHTML = set;

    //Show exercises
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
