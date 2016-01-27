(function() {
  var seq;

  seq = setInterval(function() {
    return $(".menu").toggleClass("active");
  }, 2000);
  seq = setInterval(function() {
    return $(".container").toggleClass("active");
  }, 2000);
  seq = setInterval(function() {
    return $(".menu_container").toggleClass("active");
  }, 2000);
  seq = setInterval(function() {
    return $(".search").toggleClass("active");
  }, 2000);
  seq = setInterval(function() {
    return $(".dots span").toggleClass("active");
  }, 2000);

}).call(this);