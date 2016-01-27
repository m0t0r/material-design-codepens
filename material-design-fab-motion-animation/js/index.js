$(".fab").on('click', function(){
	$(this).parent(".card").toggleClass("is-expandend");
	$("body").toggleClass("is-expandend");
})