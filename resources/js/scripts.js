$(document).ready(function() {

	// Для пользователей Windows не предоставляется возможность скачать последнюю версию браузера Safari.
	// На данный момент для пользователей Windows последняя версия этого браузера 5.1.
	// CSS3 анимация и единицы измерения " vh " не работает в этой версии Safari как для пользователей Macintosh которым уже на сегодня разработана версия 8.0.6. 
	// Поэтому высчитать высоту блока header и положение заголовка " .hero-text h1 " я решил с посощью JQuery.

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

		$('header, .head').css({"height": $(window).height() + "px"});

	}

	getHeadHeaderAndPostionHeadText();

	// По умолчанию при загрузке страницы я вызываю функцию  showStickyNav() 
	// которая определяет нужно ли отображать фиксированное меню или нет.

 	showStickyNav();
	
 	// Те же функции я вызываю при изменении размера окна браузера. 

	$(window).resize(function() {
		
		showStickyNav();		
		// getHeadHeaderAndPostionHeadText();

	});

	// Я скрыл конетент который выходит за пределы окна браузера при загрузке. 
	// Если пользователь будет находиться к примеру по середине всей страницы, загружена будет только верхняя часть контента сайта,
	// а нижняя от нижнеко края окна браузера будет не загруженой.
	// Если пользователь первый раз зашел на сайт или выполнил перезагрузку страницы находясь до этого в header,
	// весь нижний коненте сайта в невидимой для пользователя области загружен не будет.
	// Таким образом я уменьшаю нагрузку на браузер при загрузке страницы.

	$(".section-features .row:eq(1), .section-steps .row:eq(1), .section-cities .row:eq(1), .testimonials, .section-plans .row:eq(1), .section-form .row:eq(1)").css({'display':'none',
																																									  'opacity': 0	
																																									});
	// При скролле я определяю нужно ли отображать фиксированное навигационное меню или нет, 
	// отображаю конетент сайта которой попадает в окно браузера. 

	$(document).scroll(function() {

		showStickyNav();

		if( $(".section-features").get(0).getBoundingClientRect().top <= $(window).height() ) {

			$(".section-features .row:eq(1)").css({'display':'block'}).animate({opacity:1},1700);

		}

		if( $(".section-steps").get(0).getBoundingClientRect().top <= $(window).height() ) {

			$(".section-steps .row:eq(1)").css({'display':'block'}).animate({opacity:1},1700);

		}

		if( $(".section-cities").get(0).getBoundingClientRect().top <= $(window).height() ) {

			$(".section-cities .row:eq(1)").css({'display':'block'}).animate({opacity:1},1700);

		}

		if( $(".section-testimonials").get(0).getBoundingClientRect().top <= $(window).height() ) {

			$(".testimonials").css({'display':'block'}).animate({opacity:1},1700);

		}

		if( $(".section-plans").get(0).getBoundingClientRect().top <= $(window).height() ) {

			$(".section-plans .row:eq(1)").css({'display':'block'}).animate({opacity:1},1700);

		}

		if( $(".section-form").get(0).getBoundingClientRect().top <= $(window).height() ) {

			$(".section-form .row:eq(1)").css({'display':'block'}).animate({opacity:1},1700);

		}
		
	});

	
	// Получение минимальной высоты header и определение координаты положения заголовка .hero-text
	
	function getHeadHeaderAndPostionHeadText() {

		$('header, .head').css({'min-height': $('.logo-nav-box').height() + $('.hero-text').height() + 15 + "px"});

		$('.hero-text').css({'top': ( $('header').height() / 2 ) - $('.logo-nav-box').height() - ( $('.hero-text').height() / 2 ) + 'px'});

		if( $('.hero-text').css('top') <= '0px' ) {

			$('.hero-text').css({'top': '0px'});

		}

	}

	// Эта функция определяет необходимость показа фиксированного навигационного меню
	
	function showStickyNav() {

		if( $(window).scrollTop() >= $('header').height() ) {

			$('nav').addClass('sticky');

		} else {

			$('nav').removeClass('sticky');

		}

	}


	// Scroll on buttons

	$(".js--scroll-to-plans").click(function() {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});


	$(".js--scroll-to-start").click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});


	// Navigation scroll

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {

					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});


	// Mobile nav


	$(".js--nav-icon").click(function() {
		
		var nav = $('.main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if(icon.hasClass('ion-navicon-round')) {

			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');

		} else {

			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');

		}

	});	

});