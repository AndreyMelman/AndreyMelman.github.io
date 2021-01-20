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