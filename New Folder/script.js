// JavaScript Document

$(document).ready(function() { 
    
	$("form").on("submit", function(event) {
     event.preventDefault();
	 $('.container').append(html);

$( "#black" ).click(function() {
$(this).css('background-color', 'green')
});



 /*$("#black").click(function(){
  $("body").addClass("display1");
 })*/

});

/*$(".d1").on("click", function(){
$( ".body" ).addClass( ".display1")
});*/

	
});


var time;
var minutes;
var seconds;
var count = time;

var html = time;

$('#timer').append(html); 
 		
    
 function getTime() {
        var minutes, seconds, time;
        minutes = (parseInt( $('#mNumber').val(), 10) || 0) * 10000;
        seconds = (parseInt( $('#sNumber').val(), 10) || 0) * 1000;
        time = minutes + seconds;
        document.getElementById("timer").innerHTML = time;
        return false;
    }
	

var result = time--;
$('.container').append(result);

/*var count = 10;
while (count>0) {
    console.log(count);
    count--;
}*/

/* 
while (count < 100);
for(var i= 0; i < time; --i) {
        $('.container').append(i);
		document.write(i);
    }


while (time > 0 ) {
console.log(x);
x++;
} */   
    $('.container').append(html);  
UpdateTimer() 
window.setTimeout("Tick()", 1000);


function Tick() {
Time -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
while (time>0) {
    //$('.container').append(time);
	console.log(time);
    time--;
}
$('.container').append(html);
}

function UpdateTimer() {
var count = time;
/*while (time>0) {
    $('.container').append(time);
	//console.log(time);
    time--;
}*/
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
	
