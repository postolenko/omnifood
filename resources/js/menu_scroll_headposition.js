$(document).ready(function() {

	window.showhoverrespnav; //переменная содержащая значение необходимости показа адаптивного меню

	window.logoBoxHeight = $('.logo-box').height();	//изначальная высота блока с классом ".logo-box"

// Определение высоты меню в зависимости от количества пунктов, высоты и ширины пунктов меню
	window.mainNavHeight = ( $('.main-nav a').outerHeight(true) * $('.main-nav a').length ) / Math.floor($('.main-nav').width() / $('.main-nav a').outerWidth(true));
	
	responsivenavNeed();
	showContent();
	getHeadHeaderAndPostionHeadText();

// Определение необходимости показа меню и положение заголовка .hero-text в header при изменении размеров окна пользователем 
	$(window).resize(function() {

		responsivenavNeed();
		getHeadHeaderAndPostionHeadText();
		$('.scroll-hover').css({'left': $('.main-nav').outerWidth() - 40 + "px"});

	});

	getScrollToTopBtn();


	$(document).scroll( function() {

	// Опрделение необходимости показа меню при скроллинге
		if( $(window).scrollTop() >= $('header').height() ) {

			makeResponsiveNav("responsivenav_need");

		} else if( $(window).scrollTop() < $('header').height() && $(window).width() > 762 && mainNavHeight < logoBoxHeight ) {
			
			makeResponsiveNav("responsivenav_not_need");

		}


		getScrollToTopBtn();


	
	// Если контент данной секции попадает в окно браузера то я его отображаю уменьшая прозрачность 
		showContent();

	});


	
//  Опреджеление высоты меню при клике на "MENU"
	$(".logo, .mobile-nav-icon").click(function() {
		
		$('.logo-nav-box').append("<div class='scroll-hover'></div>");

				$('.scroll-hover').css({'height': mainNavHeight + 20 + 'px',
										'top': $('.logo-box').height() - 10 + 'px',
										'left': $('.main-nav').width() - 40 + 'px'									
									});

		if( $('.main-nav').height() <= 0 ) {			

			$('.main-nav').css({"height": mainNavHeight + "px"});

		} else {

			$('.main-nav').css({'height':'0px'});
			
			$('.scroll-hover').remove();

		}

	});

// Анимация при прокрутке и при загрузке
		function showContent() {

			if( $(".section-features").get(0).getBoundingClientRect().top <= $(window).height() && $(".section-features .row:eq(1)").css('opacity') != 1 ) {

				$(".section-features .row:eq(1)").animate({opacity:1},1000);

			}

			if( $(".section-steps").get(0).getBoundingClientRect().top <= $(window).height() && $(".section-steps .row:eq(1)").css('opacity') != 1 ) {

				$(".section-steps .row:eq(1)").animate({opacity:1},1000);

			}

			if( $(".section-cities").get(0).getBoundingClientRect().top <= $(window).height() && $(".section-cities .row:eq(1)").css('opacity') != 1) {

				$(".section-cities .row:eq(1)").animate({opacity:1},1000);

			}

			if( $(".section-testimonials").get(0).getBoundingClientRect().top <= $(window).height() && $(".testimonials").css('opacity') != 1) {

				$(".testimonials").animate({opacity:1},1000);

			}

			if( $(".section-plans").get(0).getBoundingClientRect().top <= $(window).height() && $(".section-plans .row:eq(1)").css('opacity') != 1) {

				$(".section-plans .row:eq(1)").animate({opacity:1},1000);

			}

			if( $(".section-form").get(0).getBoundingClientRect().top <= $(window).height() && $(".section-form .row:eq(1)").css('opacity') != 1) {

				$(".section-form .row:eq(1)").animate({opacity:1},1000);

			}

		}

// Получение минимальной высоты header и определение координаты положения заголовка .hero-text
	
	function getHeadHeaderAndPostionHeadText() {

		$('header, .head').css({'min-height': $(window).height() + "px"});

		if( $("nav").hasClass("nav-position") ) {

			$('.hero-text').css({'padding-top': ( $('header').height() / 2 ) - ( $('.hero-text').height() / 2 ) + 'px'});

		} else {

			$('.hero-text').css({'padding-top': ( $('header').height() / 2 ) - ( $('.hero-text').height() / 2 ) - logoBoxHeight + 'px'});

		}

		if( $(window).height() <= ( logoBoxHeight + $('.hero-text').outerHeight() ) ) {

			$('header, .head').css({'min-height': $(window).height() + logoBoxHeight + "px"});
			$('.hero-text').css({'padding-top': logoBoxHeight + 'px'});

		}

	}


//  Создание адаптивного меню
	function makeResponsiveNav(showhoverrespnav) {

		if(! $('nav').hasClass('nav-position') ) {

				if (showhoverrespnav == "responsivenav_need") {			

				$('.logo-box').css({'width': '100%'});
				$('nav').addClass('nav-position');
				$('.logo').css({'height': '55px'});
				$('.mobile-nav-icon').css({'display': 'block'});
				$('.main-nav').css({'float': '',
									'width': '100%',
									'overflow': 'auto'
									});

				$('.main-nav').css({'height': 0 + "px"});

			}

		} else if (showhoverrespnav == "responsivenav_not_need") {
			$('.logo-box').css({'width': '20%'});
			$('nav').removeClass('nav-position');
			$('.logo').css({'height': '100px'});
			$('.mobile-nav-icon').css({'display': 'none'});
			$('.main-nav').css({'float': 'right',
								'width': '80%',
								'overflow': ''
							});
			$('.main-nav').css({'height': mainNavHeight + 10 + "px"});
			$('.scroll-hover').css({'display':'none'});

		}

	}


// Определение необходимости создания адаптивного меню в зависимости от размера ширины окна браузера
	function responsivenavNeed() {

		if ( $(window).width() <= 762 ) {

			mainNavHeight = $(window).height() - $('.logo').height() + $('.main-nav a').outerHeight();
			makeResponsiveNav("responsivenav_need");

		}

		if ( $(window).width() > 762 ) {

			mainNavHeight = ( $('.main-nav a').outerHeight(true) * $('.main-nav a').length ) / Math.floor($('.main-nav').width() / $('.main-nav a').outerWidth(true));
			
			if ( mainNavHeight >= $(window).height() ) {

				mainNavHeight = $(window).height() - $('.logo').height() + $('.main-nav a').outerHeight();
			
			}

			if ( mainNavHeight > logoBoxHeight ) {
			
				makeResponsiveNav("responsivenav_need");
			
			} else if( mainNavHeight < logoBoxHeight && $(window).scrollTop() < $('header').height() ) {

				makeResponsiveNav("responsivenav_not_need");

			}

		}

	}


	// Navigation scroll

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {

					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});
	});

//  показать кнопку прокрутки в вверх страницы
	function getScrollToTopBtn() {
		if ($(window).scrollTop() > $('.header').height() ) {

        	$('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }
	}

 
    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1700);

        return false;

    });

//  Опустил footer вниз на 30px если пользователь использует Firefox.
//  Правда не по дизайну но такой я нашел подход к этому браузеру.
    f=navigator.userAgent.search("Firefox");
      
    if( f > -1 ){
        $('footer').css({'margin-bottom': '-30px'});
    }

});

