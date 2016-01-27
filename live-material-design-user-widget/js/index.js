(function(){
            var menu_trigger = $("[data-card-menu]");
            var back_trigger = $("[data-card-back]");
            
            menu_trigger.click(function(){
                $(".card, body").toggleClass("show-menu");
            });    
               
            back_trigger.click(function(){
                $(".card, body").toggleClass("show-menu");
            });       
        })();