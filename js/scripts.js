//EVENTOS
//CLICK
$('.botao-menu').click(function() {
	$('.menu ul').slideToggle();
});

$('.submenu').click(function() {
	$('.menu ul li ul').slideToggle();
});