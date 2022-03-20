var id = ['#home','#money','#basket','#chart','#wrench','#logout'];


window.onload=home;

function home()
{
	$('#home').css('color','black');
	$('#workingWindow').html('<div id="image"></div>');
	$('#image').css({'width':'429px','height':'465px','margin-left':'160px','background-image':'url("img/biznesmen.jpg")'});
}
var lastClick = '#home';

/*
function basket()
{
	$(lastClick).css('color','#8e9091');
	$('#basket').css('color','black');
	$('#workingWindow').html(działa);
}

$(document).ready(function() {
	$('#basket').on("click",function (){
			$('#basket').css('color','black');
			});
	$('#home').on("click",function (){
			$('#home'.css('color','black');
			});
});
*/