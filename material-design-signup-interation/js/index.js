// My Crappy JS Skills :/

$(".sign-up").on('click', function() {
  $(".button").addClass("expanded");
  $(".sign-up").addClass("hidden");
  $(".content").addClass("background");
  $("button").removeClass("hidden");
  $("form").toggleClass("hidden");
})

$("button").on('click', function() {
  $(this).addClass("fab");
  $("form").addClass("hidden");
  $(".button").addClass("full");
  $(".text").remove();
  $(".header").removeClass("hidden");
})