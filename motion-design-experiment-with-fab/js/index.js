$(".fab").on('click', function(){
	$(".fab").addClass("expand");
	$(".fab-sha").addClass("active");
	$(".close").addClass("active");
})

$(".close").on('click', function(){
	$(".close").removeClass("active");
	$(".fab").removeClass("expand");
	$(".fab-sha").removeClass("active");
})