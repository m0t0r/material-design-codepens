var btns = $('.action');
var header = $('.header');
var fill = $('.header .fill');
var btnNumber = 0;
var tl = new TimelineMax();

function promotedToggle() {
  var _this = this;
  btnNumber = $.inArray(_this, btns) + 1;
  btns.removeClass('activated');
  $(_this).toggleClass('activated');
  tl.kill();
  tl.set(this, {
    x:'50%',
    top:150,
    opacity: 0
  });
  header.removeClass().addClass('header color-'+btnNumber);
  tl.set(fill, {
    scale:0
  });
  tl.to(fill, 0.4, {
    scale:1.05,
    ease: Quad.easeInOut,
    delay: 0.2
  });
  
}

btns.on('click', promotedToggle);