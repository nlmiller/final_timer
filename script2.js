// JavaScript Document

$(document).ready(function() { 
    
	//Prevents the default action of the form so it doesn't refresh page
    $("form").on("submit", function(event) {
        event.preventDefault();
     });

 //On click of submit run getTime function
    $("#calc").click(function(){
        $('#result').text(getTime());
    });

});

var time= 10; //Variable here to test if countdown works since I have having trouble getting the getTime function to work       

//Function that calculates a time variable when the user clicks the submit button
/*function getTime() {
        var minutes, seconds, time;
        minutes = (parseInt( $('#mNumber').val(), 10)) * 60;//Turns string to integer
        seconds = (parseInt( $('#sNumber').val(), 10));//Turns string to integer
        time = minutes + seconds;
        $('.container').html(time + ' seconds left');//Prints time to page
        return false;
}*/

Tick();//Run the Tick function

//Function that countsdown the time. Alerts and plays sound when time is up
function Tick() {
     if (time > 0) {
	setTimeout(function () {
			$('.container').html(time + ' seconds left');//Prints the time to the page
			time--;
			Tick(time);
		},1000);
    } else {
		$('.container').html('Time is up!');//Prints the message to the page
        PlaySound("sound1");
	}
}

//Function to play sound
function PlaySound(soundObj) {
  var sound = document.getElementById(soundObj);
  sound.Play();
}
