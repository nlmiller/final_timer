// JavaScript Document

$(document).ready(function() {
    var minutes = $('#mNumber').val();
    var minutes = $('#sNumber').val();
	
	
    //$('.container').append(getTime());  
	
	 $("form").on("submit", function(event) {
     event.preventDefault();
	 $('.container').append(html);
});

/*$("div.test").on({
  click: function(){
  mouseenter: function(){
    $('.d1').addClass("display1");
  }
});*/

$(".d1").on("click", function(){
$( ".body" ).addClass( ".display1")
});

	
});

var time;
var minutes;
var seconds;

var html = '<div>Your Time is set for ' + time +'</div>'; 
 		/*   
        html +='<div>';
		html += time;
		html += getTime();
		html += '</div>';
    	*/
    
   

function getTime() {
	var minutes = $('#mNumber').val() * 10000;
	var seconds = $('#sNumber').val() *1000;
	var time = minutes + seconds;
	//alert('Your timer is set for ' + time);
	//console.log(time);
	return time;
}

UpdateTimer() 
window.setTimeout("Tick()", 1000);


function Tick() {
Time -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
$('.container').append(html);
}

//PLAYS SOUND WHEN TIME IS UP
function Tick() {
if (time <= 0) {
PlaySound("sound1");
//alert("Time's up!")
return;
}

time -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}

/*
TO STOP SOUND
function stopSound (){
	document.mysound.stop();
}

$('.stop').on('click', function(){
		//console.log('You just clicked #clickme!');
		// do some other stuff here
		stopSound("sound1");
	return;
	});
	*/
	
