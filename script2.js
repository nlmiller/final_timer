// JavaScript Document

$(document).ready(function() {
    var minutes = $('#mNumber').val();
    var minutes = $('#sNumber').val();
	
	
    //$('.container').append(getTime());  
	
	 $("form").on("submit", function(event) {
     event.preventDefault();
});

/*$("div.test").on({
  click: function(){
  mouseenter: function(){
    $('.d1').addClass("display1");
  }
});*/

$(".d1").on("click", function(){
$( ".container" ).addClass( ".display1")
});

	
});

var time;

var html = '<div>Your Time</div>'; 
    
        html +='<div>';
		//html += time;
		html += getTime();
		html += '</div>';
    
    
    

function getTime() {
	var minutes = $('#mNumber').val() * 10000;
	var seconds = $('#sNumber').val() *1000;
	var time = minutes + seconds;
	//alert('Your timer is set for ' + time);
	//console.log(time);
	//return '<p class="timer">' + time + '</p>';
	//$('.container').append(getTime()); 
	$('.container').append(html);
}

s