$(document).ready(function() {
  
  $('.button').click(function(e) {
    
    var top = $(this).position().top + e.offsetY,
        left = $(this).position().left + e.offsetX;
    
    $('.ripple').css({
      top: top,
      left: left
    })
    
    $('.wrapper').toggleClass('dark');
    
  })
  
})