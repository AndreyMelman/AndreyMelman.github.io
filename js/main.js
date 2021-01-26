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

jQuery(document).ready(function(){
	jQuery("form").submit(function() { // Событие отправки с формы
		var form_data = jQuery(this).serialize(); // Собираем данные из полей
		jQuery.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: swal({
				title: "Спасибо за заявку!",
                type: "success",
                showConfirmButton: false,
                timer: 2000
            })
        });
        $(this).find('input, textarea').prop('disabled', true);
        event.preventDefault();
    });
});