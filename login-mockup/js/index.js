$('.fab').click(function(e) {
  $(this).toggleClass('active');
  $(this).children('i').toggleClass('zmdi-account-add');
  $(this).children('i').toggleClass('zmdi-close');
});