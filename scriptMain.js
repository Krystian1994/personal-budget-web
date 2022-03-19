var information = ['Masz problem z kontrolowaniem wydatków?', 'Chcesz mieć stały dostęp do informacji o Twoim bilansie?', 'Ta strona jest właśnie dla Ciebie!'];


function changeColor()
{
	$('#introduction').css('color','#faf8f5');
}


var nr = 0;
function start()
{
	if(nr>2)nr = 0;
	$('#introduction').css('color','#26231c');
	$('#introduction').html(information[nr]);
	nr++;
	setTimeout(changeColor,3500);
	setTimeout(start,4000);
}
window.onload=start;

