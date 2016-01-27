(function(){
    'use strict';

    var $mainButton = $(".main-button"),
        $closeButton = $(".close-button"),
        $buttonWrapper = $(".button-wrapper"),
        $ripple = $(".ripple"),
        $layer = $(".layered-content");

    $mainButton.on("click", function(){
        $ripple.addClass("rippling");
        $buttonWrapper.addClass("clicked").delay(1500).queue(function(){
            $layer.addClass("active");
        });
    });

    $closeButton.on("click", function(){
        $buttonWrapper.removeClass("clicked");
        $ripple.removeClass("rippling");
        $layer.removeClass("active");
    });

})();