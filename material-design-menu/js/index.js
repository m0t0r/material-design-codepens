$(function() {
	$( "#main-button" ).click(function() {
		$( "#main-button" ).addClass( "disp", 190);
		$( "#a" ).addClass( "a-clicked", 200);
		$( "#b" ).addClass( "b-clicked", 200);
		$( "#c" ).addClass( "c-clicked", 200);
		$( "#d" ).addClass( "d-clicked", 200);
	});
	$( "#a, #b, #c, #d").click(function() {
		$( "#main-button" ).removeClass( "disp");
		$( "#a" ).removeClass( "a-clicked");
		$( "#b" ).removeClass( "b-clicked");
		$( "#c" ).removeClass( "c-clicked");
		$( "#d" ).removeClass( "d-clicked");
	});

});