var information = ['Masz problem z kontrolowaniem wydatków?', 'Chcesz mieć stały dostęp do informacji o Twoim bilansie?', 'Ta strona jest właśnie dla Ciebie!'];

var nr = 0;
function start()
{
	if(nr>2)nr = 0;
	$('#introduction').html(information[nr]);
	nr++;
	window.setTimeout(start,3000);
}

window.onload=start;