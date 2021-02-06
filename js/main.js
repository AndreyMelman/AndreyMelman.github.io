$(function(){


  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});

var $arrowUp = $(".arrowUp")
$(window).on("scroll", function(){
  if ($(window).scrollTop() >= 100){
    $arrowUp.fadeIn();  
  }else{
    $arrowUp.fadeOut();
  }
});

$arrowUp.on("click",function(){
  $("html,body").animate({scrollTop:0}, 900)
});

function handleFormResult(t, text) {
	$.fancybox.close();
	swal({
		title: text,
		type: t,
		showConfirmButton: false,
		timer: 2000
	});
	$('input').val("");
	$('textarea').empty();
}

jQuery(document).ready(function(){
	jQuery("form").submit(function() { // Событие отправки с формы
	var form_data = jQuery(this).serialize(); // Собираем данные из полей
	fetch('https://php.evakuator-molocity.by/sendform.php', {
	    method: 'post',
	    headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	    },
	    body: form_data
	})
	.then((response) => {if(response.ok){
		handleFormResult("success", "Спасибо за заявку!")
	}})
	.catch (function (error) {
		handleFormResult("error", "Попробуйте позже!")
	});    	
        event.preventDefault();
    });
});
