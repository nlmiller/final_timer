// JavaScript Document

$(document).ready(function() {
    $("#calc").click(function(){
        getTime();
    });
    var time= function getTime() {
        var minutes, seconds, time;
        minutes = (parseInt( $('#mNumber').val(), 10) || 0) * 60;
        seconds = (parseInt( $('#sNumber').val(), 10) || 0);
        time = minutes + seconds;
        return time;
    };
    
$('#timer').html(time);

Tick(time);

function Tick(time) {
	if (time > 0) {
		setTimeout(function () {
			$('#timer').html(time);
			t--;
			Tick(time);
		}
		); //1000; 
    } else {
		//PlaySound("sound1");
	}
}
$( "#black" ).click(function() {
 $('.container').addClass('.display1');
//alert( "Handler for .click() called." );
});

});


//OTHER CODE
// JavaScript Document
/*
$(document).ready(function() {
    $("#calc").click(function(){
        getTime();
    });
    var t= function getTime() {
        var minutes, seconds, time;
        minutes = (parseInt( $('#mNumber').val(), 10) || 0) * 60;
        seconds = (parseInt( $('#sNumber').val(), 10) || 0);
        time = minutes + seconds;
        return time;
    };
	
$('#timer').html(t);

Tick(t);

function Tick(t) {
	if (t > 0) {
		setTimeout(function () {
			$('#timer').html(t);
			t--;
			Tick(t);
		
	); 1000}; 
    } else {
		//PlaySound("sound1");
	}
}

});

*/


