// JavaScript Document

$(document).ready(function() {
    $("#calc").click(function(){
        getTime();
    });
    function getTime() {
        var minutes, seconds, time;
        minutes = (parseInt( $('#mNumber').val(), 10) || 0) * 10000;
        seconds = (parseInt( $('#sNumber').val(), 10) || 0) * 1000;
        time = minutes + seconds;
        document.getElementById("timer").innerHTML = time;
        return false;
    }
    
	//NEW CODE
	

var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
Timer = document.getElementById(TimerID);
TotalSeconds = time;

UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function Tick() {
TotalSeconds -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
Timer.innerHTML = TotalSeconds;
}

function Tick() {
if (TotalSeconds <= 0) {
alert("Time's up!")
return;
}

TotalSeconds -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}
 
//END NEW CODE

});

function UpdateTimer() {
var Seconds = TotalSeconds;

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);


var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)


Timer.innerHTML = TimeStr;
}


function LeadingZero(Time) {

return (Time < 10) ? "0" + Time : + Time;

}
