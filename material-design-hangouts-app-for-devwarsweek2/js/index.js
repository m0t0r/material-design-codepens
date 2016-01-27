    // First route to show
    var GLOBALSTATE = {
        route: '.list-account'
    };

    // Set first Route
    setRoute(GLOBALSTATE.route);
    $('.nav > li[data-route="' + GLOBALSTATE.route + '"]').addClass('active');

    //dirtiest, ugliest, hackiest ripple effect solution ever... but they work xD
    $('.floater').on('click', function(event) {
        var $ripple = $('<div class="ripple tiny bright"></div>');
        var x = event.offsetX;
        var y = event.offsetY;
        var $me = $(this);

        $ripple.css({
            top: y,
            left: x
        });
        $(this).append($ripple);

        setTimeout(function() {
            $me.find('.ripple').remove();
        }, 530)

    });

    // Have to Delegate ripple due to dom manipulation (add)
    $('ul.mat-ripple').on('click', 'li', function(event) {
        if ($(this).parent().hasClass('tiny')) {
            var $ripple = $('<div class="ripple tiny"></div>');
        } else {
            var $ripple = $('<div class="ripple"></div>');
        }
        var x = event.offsetX;
        var y = event.offsetY;

        var $me = $(this);

        $ripple.css({
            top: y,
            left: x
        });

        $(this).append($ripple);

        setTimeout(function() {
            $me.find('.ripple').remove();
        }, 530)
    });

    // Set Name
    setName(localStorage.getItem('username'));

    // Dyncolor ftw
    if (localStorage.getItem('color') !== null) {
        var colorarray = JSON.parse(localStorage.getItem('color'));
        stylechange(colorarray);
    } else {
        var colorarray = [15, 157, 88]; // 15 157 88 = #0f9d58
        localStorage.setItem('color', JSON.stringify(colorarray));
        stylechange(colorarray);
    }

    // Helpers
    function setName(name) {
        $.trim(name) === '' || $.trim(name) === null ? name = 'John Doe' : name = name;
        $('h1').text(name);
        localStorage.setItem('username', name);
        $('#username').val(name).addClass('used');
        $('.card.menu > .header > h3').text(name);
    }

    // Stylechanger
    function stylechange(arr) {
        var x = 'rgba(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ',1)';
        $('#dynamic-styles').text('.dialog h3 {color: ' + x + '} .i-group input:focus ~ label,.i-group input.used ~ label {color: ' + x + ';} .bar:before,.bar:after {background:' + x + '} .i-group label {color: ' + x + ';} ul.nav > li.active {color:' + x + '} .style-tx {color: ' + x + ';}.style-bg {background:' + x + ';color: white;}@keyframes navgrow {100% {width: 100%;background-color: ' + x + ';}} ul.list li.context {background-color: ' + x + '}');
    }

    function closeModal() {
        $('#new-user').val('');
        $('.overlay').removeClass('add');
        $('.floater').removeClass('active');
        $('#contact-modal').fadeOut();

        $('#contact-modal').off('click', '.btn.save');

    }

    function setModal(mode, $ctx) {
        var $mod = $('#contact-modal');
        switch (mode) {
            case 'add':
                $mod.find('h3').text('Add Contact');
                break;

            case 'edit':
                $mod.find('h3').text('Edit Contact');
                $mod.find('#new-user').val($ctx.text()).addClass('used');
                break;
        }

        $mod.fadeIn();
        $('.overlay').addClass('add');
        $mod.find('#new-user').focus();
    }

    $('.mdi-arrow-left').on('click', function() {
        $('.shown').removeClass('shown');
        setRoute('.list-text');
    });

    // Set Routes - set floater
    function setRoute(route) {
        GLOBALSTATE.route = route;
        $(route).addClass('shown');

        if (route !== '.list-account') {
            $('#add-contact-floater').addClass('hidden');
        } else {
            $('#add-contact-floater').removeClass('hidden');
        }

        if (route !== '.list-text') {
            $('#chat-floater').addClass('hidden');
        } else {
            $('#chat-floater').removeClass('hidden');
        }

        if (route === '.list-chat') {
            $('.mdi-menu').hide();
            $('.mdi-arrow-left').show();
            $('#content').addClass('chat');
        } else {
            $('#content').removeClass('chat');
            $('.mdi-menu').show();
            $('.mdi-arrow-left').hide();
        }
    }

    // Colorpicker
    var cv = document.getElementById('colorpick');
    var ctx = cv.getContext('2d');
    var img = new Image();
    // Meh .. Thx 2 Browser Security i need BASE64
    img.src = 'data:image/gif;base64,R0lGODlh8gDYAPepAP///8yZ/zNm////Zsz/ZmbM//+ZZplm/zPMzMz/M//MZmb/mZkz/8wAzMz/mcwA/wD/mf//AMwz//8A//8AAP/MmTPM////mZn/mf8AZmb/zGb/ZgD/zAD//5mZ/wCZmf+ZzAD/AP+Z/wDMAJn/Zpn/zDPMM5nM//9mzP+Zmcxm/5nMAP8zmf9QUGaZ/2YA/wBmzGb//zMz/wBmmQAA/wAzzDMzzDOZ/wBm/2aZAACZAADMZgCZzP8zzJn/M8wzmWZm/wDM//8zAMwAAGb/M8wAmQCZM8zMAMxmmQCZ//9mAMxmAADMmf9mmcyZAP/MAMwAZv9mZv9m//+ZM/+ZAMz/zMz//8zM/zOZMwBmZpmZZmZmM5kAmZkAzGYAM2YAzJkAM5kA/2ZmmQBmADNmAJkzmTMzAGaZmTMzmZlmMzOZZpkzZpkAADNmzMwzAJkzADNmmZlmAIAAAAAzmQAAzAAAmf//zAAAZmYzAAAzZpkzMwAzAGYAZv/M///MzAo7CmwKbLFjYwo7bGw7CgoKbJ1sCmOKsQo7nZ0KCs47CoUKCgoKnQoKzmOK2J07CqmpxgpsbGwKzmNjsbFjsZ0K/4qKYzs7CjtsCrGKY7FjigpsCmOxY50KO2wKO2OxisbGqZ0KnanGxp0Kzv/Ozv//zs7O///O/87//87/zv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNUIxREUxODJBRTMxMUU1ODYyMkREQ0Q3NUZENjdFMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNUIxREUxOTJBRTMxMUU1ODYyMkREQ0Q3NUZENjdFMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1QjFERTE2MkFFMzExRTU4NjIyRERDRDc1RkQ2N0UwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1QjFERTE3MkFFMzExRTU4NjIyRERDRDc1RkQ2N0UwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEg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';

    img.onload = function() {
        ctx.drawImage(img, 0, 0, img.width, img.height);
    };


    //todo optimize
    $('#username').on('blur', function() {
        setName($(this).val());

        $('.card.menu > .header > img').addClass('excite');
        setTimeout(function() {
            $('.card.menu > .header > img').removeClass('excite');
        }, 800);

    });

    // Dirty Colorpicker
    $('#colorpick').on('mousedown', function(eventDown) {
        var x = eventDown.offsetX;
        var y = eventDown.offsetY;

        if (eventDown.button === 0) {
            $('.card.menu > .header > img').addClass('excite');
            setTimeout(function() {
                $('.card.menu > .header > img').removeClass('excite');
            }, 800);

            var imgData = ctx.getImageData(x, y, 1, 1).data;
            localStorage.setItem('color', JSON.stringify(imgData));
            stylechange(imgData);
        }
    });

    $('.mdi-send').on('click', function() {
        var $chatmessage = '<p>' + $('.chat-input').val() + '</p>';
        $('ul.chat > li > .current').append($chatmessage);
        $('.chat-input').val('');
    });

    $('.chat-input').on('keyup', function(event) {
        event.preventDefault();
        if (event.which === 13) {
            $('.mdi-send').trigger('click');
        }
    });

    $('.list-text > ul > li').on('click', function() {
        $('ul.chat > li').eq(1).html('<img src="' + $(this).find('img').prop('src') + '"><div class="message"><p>' + $(this).find('.txt').text() + '</p></div>');

        // timeout just for eyecandy...
        setTimeout(function() {
            $('.shown').removeClass('shown');

            $('.list-chat').addClass('shown');
            setRoute('.list-chat');
            $('.chat-input').focus();
        }, 300);
    });

    // List context
    // Delegating for dom manipulated list elements
    $('.list-account > .list').on('click', 'li', function() {
        $(this).parent().children().removeClass('active');
        $(this).parent().find('.context').remove();
        $(this).addClass('active');
        var $TARGET = $(this);
        if (!$(this).next().hasClass('context')) {
            var $ctx = $('<li class="context"><i class="mdi mdi-pencil"></i><i class="mdi mdi-delete"></i></li>');

            $ctx.on('click', '.mdi-pencil', function() {
                setModal('edit', $TARGET);

                $('#contact-modal').one('click', '.btn.save', function() {
                    $TARGET.find('.name').text($('#new-user').val());
                    closeModal();
                });
            });

            $ctx.on('click', '.mdi-delete', function() {
                $TARGET.remove();
            });


            $(this).after($ctx);
        }
    });

    // Navigation
    $('.nav li').on('click', function() {
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        $('.shown').removeClass('shown');
        var route = $(this).data('route');
        $(route).addClass('shown');
        setRoute(route);
    });

    $('#head').on('click', '.mdi-fullscreen', function() {
        $(this).removeClass('mdi-fullscreen').addClass('mdi-fullscreen-exit');
        $('#hangout').css({
            width: '900px'
        });
    });

    $('#head').on('click', '.mdi-fullscreen-exit', function() {
        $(this).removeClass('mdi-fullscreen-exit').addClass('mdi-fullscreen');
        $('#hangout').css({
            width: '400px'
        });
    });

    // menuclick
    $('#head .mdi-menu').on('click', function() {
        $('.menu').toggleClass('open');
        $('.overlay').toggleClass('add');
    });

    // viewtoggle > 1000
    $('#head .mdi-chevron-down').on('click', function() {
        if ($('#hangout').hasClass('collapsed')) {
            $(this).removeClass('mdi-chevron-up').addClass('mdi-chevron-down');
            $('#hangout').removeClass('collapsed');
        } else {
            $(this).removeClass('mdi-chevron-down').addClass('mdi-chevron-up');
            $('#hangout').addClass('collapsed');
        }

    });

    // Filter
    $('.search-filter').on('keyup', function() {
        var filter = $(this).val();
        $(GLOBALSTATE.route + ' .list > li').filter(function() {
            var regex = new RegExp(filter, 'ig');

            if (regex.test($(this).text())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // killit
    $('#contact-modal').on('click', '.btn.cancel', function() {
        closeModal();
    });

    $('#new-user').on('keydown', function(event) {
        switch (event.which) {
            case 13:
                event.preventDefault();
                $('.btn.save').trigger('click');
                break;

            case 27:
                event.preventDefault();
                $('.btn.cancel').trigger('click');
                break;
        }

    });

    $('#add-contact-floater').on('click', function() {
        if ($(this).hasClass('active')) {
            	closeModal();
            $(this).removeClass('active');

        } else {

            $(this).addClass('active');
            setModal('add');
            $('#contact-modal').one('click', '.btn.save', function() {
                $('.list-account > .list').prepend('<li><img src="http://lorempixel.com/100/100/people/1/"><span class="name">' + $('#new-user').val() + '</span><i class="mdi mdi-menu-down"></i></li>');
                closeModal();
            });
        }
    });