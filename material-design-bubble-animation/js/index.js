var btn = $('.button');
var background = $('.background');


var width = 0;
var height = 0;
var r = 0;
setSize();

function setSize() {
  width = $(window).width();
	height = $(window).height();
  r = Math.sqrt(width * width + height * height);
}
$(window).resize(setSize);

btn.click(function(e) {
  btn.removeClass('current');
  $(this).addClass('current');
  var circle = $("<div unselectable='on' id='circle'></div>");
  background.append(circle);
  circle.css({
    position: 'absolute',
    'background-color': $(this).css('background-color'),
    width: 0,
    height: 0,
    "border-radius": "50%",
    left: e.pageX,
    top: e.pageY,
    'margin-left': 0,
    'margin-top': 0,
    'webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none'
  });
  circle.animate({
    width: (r * 2),
    height: (r * 2),
   	'margin-left': -r,
    'margin-top': -r
  }, {
    duration: 600,
    easing: "easeInOutCubic",
    queue: false,
    complete: function() {
     circle.parent().css('background-color',
                    $(this).css('background-color'));
     circle.detach();
    }
  });
});