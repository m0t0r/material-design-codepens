var container = $('#container');

$(document).on('click', '.list-view li', function(){
  $(this).addClass('active');
  container.addClass('details');
});

$('.back').click(function(){
  container.removeClass('details');
  $('.list-view li').removeClass('active');
});