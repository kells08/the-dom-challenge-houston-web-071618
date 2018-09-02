var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let timer = setInterval(setTime, 1000);
var paused = false;
var heart = 0;
document.getElementById('-').addEventListener('click', clickMinus);
document.getElementById('+').addEventListener('click', clickPlus);
document.getElementById("pause").addEventListener('click', togglePause)
document.getElementById("<3").addEventListener('click', countHeart)


function setTime() {
  if(!paused){
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function clickMinus() {
  --totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function clickPlus() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function togglePause(){
  paused = paused ? false : true
  if(paused){
    document.getElementById("pause").innerHTML="Resume" 
  } else {
    document.getElementById("pause").innerHTML="Pause"
  }
}
 function countHeart(){
  //  for in loop??

 }