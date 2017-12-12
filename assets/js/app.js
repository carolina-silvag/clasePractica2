$(document).ready(function(){
	var itemsImg = $('.slider li').length;

	for(var i = 1; i<=itemsImg; i++){
		$('.pagination2').append('<a href="#"><span class="fa fa-circle"></span></a>');
	}

    $('.slider li').hide(); //ocultar todas
    $('.paisaje1').show(); //mostrar
    $('.pagination2 a:first').css({'color': '#10a08c'})

    $('.pagination2 a').click(pagination2);
    $('.right li span').click(nextSlider);
    $('.left li span').click(prevSlider);

    /*funciones*/

    function pagination2() {
    	var posPagination2 = $(this).index() + 1;
    	console.log(posPagination2)
    	$('.slider li').hide();
    	$('.slider li:nth-child("+ posPagination2 +")').fadeIn();

    }
});

