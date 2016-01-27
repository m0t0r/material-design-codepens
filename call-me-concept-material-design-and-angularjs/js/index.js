//Get the background of the element clicked
function insertBg(e) {
    var src = e.find('img').attr('src');
    $('.calling-bg').css({
        'background': 'url(' + src + ') no-repeat -90px -90px'
    });
}

angular.module("appContact", []);
angular.module("appContact").controller("appContactCtrl", function ($scope) {
//List contacts
var contacts = $scope.contacts = [
		{
			img: "http://www.topherci.cz/wp-content/gallery/adam-sandler/adam-sandler-1.jpg",
			name: "Adam Sandler",
			phone: "98761435"
		},
		{
			img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdx0GyMNP4AfCdH2MnyyWFPtqZGOyXMAyPdt8vNoIS3TEkHhxn",
			name: "Jason Derulo",
			phone: "88999846"
		},
		{
			img: "http://www.redblackhair.com/wp-content/uploads/demi-lovato-ombre-hair-color.jpg",
			name: "Demi Lovato",
			phone: "98895674"
		},
		{
			img: "http://katyperryceara.com.br/wp-content/uploads/2014/07/katy-5.jpg",
			name: "Katy Perry",
			phone: "77998747"
		},
		{
			img: "http://cache29.fansshare.com/images/willsmith/will-smith-fresh-prince-506802794.jpg",
			name: "Will Smith",
			phone: "88991765"
		},
		{
			img: "http://4.bp.blogspot.com/-4P0s3awgEO0/VHkKJ4pqPXI/AAAAAAAABC4/U_lukwfVYEM/s1600/ID-%2BEden.jpg",
			name: "Cara Delevingne",
			phone: "99887865"},
		{
			img: "http://images1.laweekly.com/imager/me-without-you-is-like-uestlove-without-t/u/original/2473272/snoop_dogg_smoking.jpg",
			name: "Snoop Dog",
			phone: "99887766"},
		{
			img: "https://onethousandinone.files.wordpress.com/2015/04/bruno-1.jpg",
			name: "Bruno Mars",
			phone: "75908748"},
		{
			img: "http://suprtickets.com/blog/wp-content/uploads/2014/05/rita-ora-selfie.jpg",
			name: "Rita Ora",
			phone: "95899830"
		}
	];
  //Clear the numbers clicked
    $scope.clear = function (number) {
        if (number) {
            var number_length = number.length - 1;
            var number_clear = number.substring(0, number_length);

            return $scope.number = number_clear;
        }
    }

    $(document).ready(function () {

        var listContact = $('.list-contact'),
            calling = $('.calling'),
            dialpad = $('.dialpad'),
            contactImgBox = $('.contact-img-box'),
            callingContactImg = calling.find('img'),
            callingOptions = $('.calling-options'),
            contactInfo = $('.calling > div > div:nth-child(2)'),
            dialpad = $(".dialpad"),
            buttonWrapper = $(".button-wrapper"),
            layer = $(".layer"),
            dialpadBox = $(".dialpad-box");

        openDialpad = function () {
            dialpad.toggleClass('active');
            layer.toggleClass('active');
            buttonWrapper.toggleClass('active');

            setTimeout(

            function () {
                layer.toggleClass('animation');
                setTimeout(

                function () {
                    dialpadBox.toggleClass('active');
                }, 200);
            }, 200);
        }

        closeDialpad = function () {
            if (dialpad.hasClass('active') && layer.hasClass('active') && buttonWrapper.hasClass('active')) {
                setTimeout(

                function () {
                    layer.toggleClass('animation');
                    setTimeout(

                    function () {
                        dialpadBox.toggleClass('active');
                    }, 200);
                }, 200);
                dialpad.toggleClass('active');
                layer.toggleClass('active');
                buttonWrapper.toggleClass('active');
            }
        }

        $('.list-iten').click(function() {
            if (dialpad.hasClass('active')) {
                console.log('fecha dialped');
                dialpad.toggleClass('active');
                layer.toggleClass('active');
                layer.toggleClass('animation');
                buttonWrapper.toggleClass('active');
                dialpadBox.toggleClass('active');
            }
            var contactImg = $(this).find('.contact-img'),
                imgPosition = $(this).find('.contact-img').offset(),
                parentPosition = $(this).find('.contact-img').parent().offset(),
                imgClone = $(this).find('img').clone(),
                contactImgTop = imgPosition.top - 78,
                positionTop = contactImgTop + 'px',
                positionLeft = imgPosition.left + 'px';
            contactName = $(this).find($('.name')).text();
            contactPhone = $(this).find($('.phone-number')).text();

            $('.contact-name').html(contactName);
            $('.contact-number').html(contactPhone);

            $(imgClone).appendTo('#contactImg').currentSrc;
            $(contactImgBox).css({
                'top': positionTop,
                'left': '16px',
                'width': '40px',
                'height': '40px',
                'transition': 'all .3s'
            });
            listContact.toggleClass('desactive');
            calling.toggleClass('active');
            setTimeout(function () {
                calling.toggleClass('animate');
            }, 100)
            setTimeout(function () {
                contactImgBox.toggleClass('active');
                calling.find('.contact-img').toggleClass('active');
                setTimeout(function () {
                    contactImgBox.toggleClass('bg');
                    setTimeout(function () {
                        contactInfo.toggleClass('active');
                    }, 300)
                }, 200)
            }, 300)

            setTimeout(function () {
                $('.calling-options div').each(function (index, el) {
                    setTimeout(function () {
                        $(el).toggleClass('active');
                    }, index * 50)
                });
            }, 600)
        });

        stopCall = function (event) {
            $('.calling-options div').each(function (index, el) {
                setTimeout(function () {
                    $(el).toggleClass('active');
                }, index * 30)
            });

            setTimeout(function () {
                contactInfo.toggleClass('active');
                contactImgBox.toggleClass('bg');
                setTimeout(function () {
                    contactImgBox.toggleClass('active');
                    calling.find('.contact-img').toggleClass('active');
                    setTimeout(function () {
                        $('.calling.active').find('img').fadeOut('slow').remove();
                        calling.toggleClass('active');
                        listContact.toggleClass('desactive');
                        calling.toggleClass('animate');
                    }, 300)
                }, 100)
            }, 100)
        }
    })
})