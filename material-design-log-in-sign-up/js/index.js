$('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

$('#moveleft').click(function() {
  $('#textbox').animate({
    'marginLeft': "0" //moves left
  });

  $('.toplam').animate({
    'marginLeft': "100%" //moves right
  });
});

$('#moveright').click(function() {
  $('#textbox').animate({
    'marginLeft': "50%" //moves right
  });

  $('.toplam').animate({
    'marginLeft': "0" //moves right
  });
});