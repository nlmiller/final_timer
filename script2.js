// JavaScript Document

$(document).ready(function() { 
    
	$("form").on("submit", function(event) {
     event.preventDefault();
	 $('.container').append(html);

 $("#calc").click(function(){
        getTime();

});


});
	
});


var time= 10;
var minutes;
var seconds;
 		
/*    
 function getTime()
 {
        var minutes, seconds, time;
        minutes = (parseInt( $('#mNumber').val(), 10)) * 10000;
        seconds = (parseInt( $('#sNumber').val(), 10)) * 1000;
        time = minutes + seconds;
        document.getElementById("timer").innerHTML = time;
        return false;
 }	
*/
Tick();


$('.container').append(time);

function Tick() {
     if (time > 0) {
	setTimeout(function ()
	    {
			$('.container').html(time);
			time--;
			Tick(time);
		
		},1000);
    } else {
		$('.container').html('time is up');
        PlaySound("sound1");
	}
}


	
