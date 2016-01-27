var $menuToggle = $('.js-toggle-menu');

$menuToggle.click(function () {
	
  // Disable further click events until transition has complete
  // limited use IE11+.
  
  $(this).addClass('disable-pointer');
  
  // Toggle animation states
  //
  // .hamburger          - rotation 0deg (no css transition).
  // .hamburger--open    - rotation 180deg.
  // .hamburger--closed  - rotation 360deg.
  
  var $hamburger = $('.hamburger', this);
	
  if ($hamburger.hasClass('hamburger--open')) {
		$hamburger.addClass('hamburger--close')
		     .removeClass('hamburger--open');
	} else {
		$hamburger.addClass('hamburger--open');
	}
});

// Reset menu state now transition has complete.

$menuToggle.on('webkitTransitionEnd transitionend', function() {
  $(this).removeClass('disable-pointer');
	
  $('.hamburger', this).removeClass('hamburger--close');
});