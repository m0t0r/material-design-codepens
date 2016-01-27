$('.item').click(function (){
  $('.wrapper').addClass('active');
  $('.item').removeClass('active').removeClass('margin');
  $('.close').fadeOut(300);
  $(this).addClass('active').addClass('margin');
  $('.close', this).delay(700).fadeIn(300);
});

$('.close').click(function (event){
  event.stopPropagation();
  $('.wrapper').removeClass('active');
  $('.item').removeClass('active').removeClass('margin');
  $('.close').fadeOut(300);
});