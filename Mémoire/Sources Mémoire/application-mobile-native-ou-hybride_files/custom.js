(function($){

    "use strict"; 
	
	var themeData                    = [];
	var parallaxImages               = [];
	
	//window
	themeData.win                    = $(window);
	themeData.winHeight              = themeData.win.height();
	themeData.winScrollTop           = themeData.win.scrollTop();
	themeData.stateObject            = {};
	
	//document
	themeData.doc                    = $(document);
	themeData.docHeight              = themeData.doc.height();

	//ID A~Z
	themeData.backTop                = $('#back-top');
	themeData.headerWrap             = $('#header');
	themeData.header                 = $('#header-main');
	themeData.HiddenPanel            = $('#hidden-panel');
	themeData.HiddenPanelTrigger     = $('#navi-trigger');
	themeData.jplayer                = $('#jquery_jplayer');
	themeData.logo                   = $('#logo');
	themeData.MenuToggle             = $('#menu_toggle');
	themeData.navi                   = $('#navi');
	themeData.naviMenu               = $('#navi .menu');
	themeData.container              = $('#wrap');
	themeData.WrapOurter             = $('#wrap-outer');
	themeData.searchOpen             = $('#search-top-btn');
	themeData.searchOverlay          = $('#search-overlay');
	themeData.searchClose            = $('#search-overlay-close');
	themeData.searchResult           = $('#search-result');
	themeData.contentWrap            = $('#content_wrap');
	themeData.sidebarWidget          = $('#sidebar-widget');
	themeData.footer                 = $('#footer');
	
	//tag
	themeData.body                   = $('body');
	
	//tag class
	themeData.uxResponsive           = $('body.responsive-ux');
	themeData.headerNaviMenu         = themeData.header.find('#navi ul.menu');
	themeData.galleryCollage         = $('section.Collage');
	
	//class
	themeData.carousel               = $('.owl-carousel');
	themeData.audioUnit              = $('.audio-unit');
	themeData.flexDirectionNav       = $('.flex-direction-nav');
	themeData.GalleryListSlider      = $('.gallery-list-slider');
	themeData.lightboxPhotoSwipe     = $('.lightbox-photoswipe');
	themeData.Menu                   = $('.menu');
	themeData.pagenumsDefault        = $('.pagenums-default');
	themeData.pageLoading            = $('.loading-mask1');
	themeData.pageLoading2           = $('.loading-mask2');
	themeData.tooltip                = $('.tool-tip');
	themeData.searchForm             = $('.search-overlay-form');
	themeData.titlecon               = $('.title-wrap-con');
	themeData.contentWrapOuter       = $('.content_wrap_outer');
	themeData.submenuFullwidth       = $('.maga-horizon');
	
	themeData.videoFace              = $('.blog-unit-img-wrap, .mainlist-img-wrap');
	themeData.videoOverlay           = $('.video-overlay');
	themeData.topslider              = $('.topslider');
	themeData.featureList            = $('.feature-list');
	
	themeData.blogPagenumsTwitter    = $('.blog-list .pagenums.page_twitter a, .magzine-list .pagenums.page_twitter a, .archive-grid .pagenums.page_twitter a, .page-load-archive .pagenums.page_twitter a');
	themeData.blogPagenumsSelect     = $('.blog-list .pagenums .select_pagination, .magzine-list .pagenums .select_pagination');
	
	
	//define
	themeData.globalFootHeight               = 0;
	themeData.headerWrapHeight               = 0;
	themeData.headerOuterHeight              = 0;
	themeData.sidebarWidgetFixedCss          = {};
	themeData.sidebarWidgetDefaultCss        = {};
	themeData.sidebarWidgetFixedScrollTop    = 0;
	themeData.sidebarWidgetFixedScrollBottom = 0;
	themeData.sidebarWidgetThisTop           = 0;
	themeData.footerOuterHeight              = 0;
	
	
	
	var resizeTimer = null;
	
	//condition
	themeData.isResponsive = function(){
		if(themeData.uxResponsive.length){
			return true;
		}else{
			return false;
		}
	}
	
	if( themeData.headerNaviMenu.find('> li').length > 5 ){
		var switchWidth = 979;
		themeData.body.addClass('ux_mobile_big');
	}else{
		var switchWidth = 769;
	}
	
	themeData.isMobile = function(){
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || themeData.win.width() < switchWidth){
			return true; 
		}else{
			return false;
		}
	}
	
	
	//Function

	//submenu fullwdith width calc
	themeData.fnSubmenuFullwidth = function(){
		themeData.submenuFullwidth.each(function(){
			if(themeData.body.hasClass('ux-bordered')) {
				$(this).css('width',themeData.win.width() - 40);
			} else {
				$(this).css('width',themeData.win.width());
			}
		});
	}

	//Video cover title show & hide
	themeData.fnScrollHeader = function(){
		themeData.win.scroll(function(){
			themeData.winScrollTop = themeData.win.scrollTop();
			if(themeData.winScrollTop > 150){
				if(!themeData.body.hasClass('header-srolled')) {
				 	setTimeout(function() { themeData.body.addClass('header-srolled'); },30);
				}
			}else{
				if(themeData.body.hasClass('header-srolled')) {
					setTimeout(function() { themeData.body.removeClass('header-srolled'); },30);
				}
			}
		});

		themeData.winScrollTop = themeData.win.scrollTop();
		if(themeData.winScrollTop > 150){
			if(!themeData.body.hasClass('header-srolled')) {
			 	setTimeout(function() { themeData.body.addClass('header-srolled'); },30);
			}
		}else{
			if(themeData.body.hasClass('header-srolled')) {
				setTimeout(function() { themeData.body.removeClass('header-srolled'); },30);
			}
		}

		$('.header-right').hover(function(){
			if(!themeData.body.hasClass('single-post-title-hidden')) {
			 	themeData.body.addClass('single-post-title-hidden');
			}
		},function(){
			if(themeData.body.hasClass('single-post-title-hidden')) {
			 	themeData.body.removeClass('single-post-title-hidden');
			}
		});
	}


	//Search show
	themeData.fnSerchShow = function(){

		themeData.searchOverlay.css('height',themeData.winHeight);

		themeData.searchOpen.click(function(){
			if(!themeData.searchOverlay.hasClass('search-fadein')){
				themeData.searchOverlay.addClass('search-fadein');
				$('body,html').addClass('no-scroll').css('height',themeData.winHeight);
				$('.search-overlay-input-text').focus();
			}
		});
		themeData.searchClose.click(function(){
			if(themeData.searchOverlay.hasClass('search-fadein')){
				themeData.searchOverlay.removeClass('search-fadein');
				$('body,html').removeClass('no-scroll').css('height','auto');
			}
		});
	}
	
	//Search form
	themeData.fnSearchForm = function(){
		themeData.searchForm.submit(function(event){
			var search_result = themeData.searchForm.find('input[name=s]');
			var search_loading = $('<div id="search-loading"><div class="search-loading">...</div></div>');
			
			event.preventDefault();
			themeData.searchResult.html(search_loading);
			var data = {
				'keywords' : search_result.val(),
				'paged'    : 1
			}
			
			$.post(AJAX_M, {
				'mode': 'search-list',
				'data': data
			}).done(function(content){
				var content = $(content);
				themeData.searchResult.html(content);
				themeData.fnSearchPaged(search_result.val(), search_loading);
				
				themeData.searchResult.find('.search-result-unit a').click(function(){
					themeData.fnPageLoadingEvent($(this));
				});
			});
		});
	}
	
	//Search form paged
	themeData.fnSearchPaged = function(keywords, loading){
		var load_more = themeData.searchResult.find('a.tw-style-a');
		if(load_more.length){
			load_more.click(function(){
				var paged = $(this).attr('data-paged');
				
				$(this).parent().remove();
				themeData.searchResult.append(loading);
				
				var data = {
					'keywords' : keywords,
					'paged'    : paged
				}
				
				$.post(AJAX_M, {
					'mode': 'search-list',
					'data': data
				}).done(function(content){
					var content = $(content);
					themeData.searchResult.append(content);
					themeData.searchResult.find('#search-loading').remove();
					themeData.fnSearchPaged(keywords, loading);
					
				});
			});
		}
	}

	//Responsive Mobile Menu function
	themeData.fnResponsiveMenu = function(){
		 
		if(!themeData.header.length) return;
		
		var 
		menu                 = $('#navi ul.menu'),
		container            = themeData.container,
		mobile_advanced      = menu.clone().attr({id:"mobile-advanced", "class":""}),
		menu_added           = false;
						
		if(themeData.win.width() > switchWidth) {
			themeData.body.removeClass('ux-mobile');
		} else {
			themeData.body.addClass('ux-mobile');
		}

		themeData.win.resize(function(){
			if(themeData.win.width() > switchWidth) {
				themeData.body.removeClass('ux-mobile');
			} else {
				themeData.body.addClass('ux-mobile');
			}
		});
		

		themeData.HiddenPanelTrigger.click(function(){
			if(themeData.body.is('.show_mobile_menu')){
				setTimeout(function() {
					themeData.body.removeClass('show_mobile_menu'); 
					themeData.body.css('height','auto');
					themeData.WrapOurter.css('height','auto');
					themeData.header.css('position','fixed');
				},20);
			}else{
				setTimeout(function() { 
					var heightNew = $('.header-right').height()+80;
					themeData.body.addClass('show_mobile_menu'); 
					themeData.body.css('height',heightNew);
					themeData.WrapOurter.css('height',heightNew);
					themeData.header.css('position','absolute');
				},10);
			}
			return false;
        });
    }
	
	
	//audio player function
	themeData.fnJplayerCall = function(){
		if(themeData.jplayer.length){
			themeData.jplayer.jPlayer({
				ready: function(){
					$(this).jPlayer("setMedia", {
						mp3:""
					});
				},
				swfPath: JS_PATH,
				supplied: "mp3",
				wmode: "window"
			});
			
			themeData.audioPlayClick(themeData.body);
			themeData.audioPauseClick(themeData.body);
		}
	}
	
	//call player play
	themeData.audioPlayClick = function(container){
		container.find('.pause').click(function(){
			var thisID = $(this).attr("id");
			container.find('.audiobutton').removeClass('play').addClass('pause');
			$(this).removeClass('pause').addClass('play');
			themeData.jplayer.jPlayer("setMedia", {
				mp3: $(this).attr("rel")
			});
			themeData.jplayer.jPlayer("play");
			themeData.jplayer.bind($.jPlayer.event.ended, function(event) {
				$('#'+thisID).removeClass('play').addClass('pause');
			});
			themeData.audioPauseClick(container);
			themeData.audioPlayClick(container);
		})
	}
	
	//call player pause
	themeData.audioPauseClick = function(container){
		container.find('.play').click(function(){
			$(this).removeClass('play').addClass('pause');
			themeData.jplayer.jPlayer("stop");
			themeData.audioPlayClick(container);
		})
	}
	
	//page loading event
	themeData.fnPageLoadingEvent = function(el){
		var _url = el.attr('href');
		if(_url){
			themeData.pageLoading2.addClass('mask2-show');
			setTimeout(function(){
				window.location.href = _url;
			}, 2000);
			
		}
	}
	
	//video face
	themeData.fnVideoFace = function(arrayVideo){
		arrayVideo.each(function(){
			var videoFace = [];
			var videoOverlay = [];
			
			videoFace.item = $(this);
			videoFace.playBtn = videoFace.item.find('.blog-unit-video-play');
			videoFace.videoWrap = videoFace.item.find('.video-wrap');
			videoFace.videoIframe = videoFace.videoWrap.find('iframe');
			
			videoOverlay.item = themeData.videoOverlay;
			videoOverlay.videoWrap = videoOverlay.item.find('.video-wrap');
			videoOverlay.close = videoOverlay.item.find('.video-close');
			
			videoFace.playBtn.click(function(){
				var src = videoFace.videoIframe.attr('src').replace('autoplay=0', 'autoplay=1');
				videoFace.videoIframe.attr('src', src);
				videoOverlay.close.before(videoFace.videoWrap.removeClass('hidden').attr('style', 'height:100%;padding-bottom:0px;'));
				videoOverlay.item.addClass('video-slidedown');
				
				return false;
			});
			
			videoOverlay.close.click(function(){
				videoOverlay.item.removeClass('video-slidedown');
				videoOverlay.item.find('.video-wrap').remove();
			});
		});
	}
	
	//Module Load Ajax
	themeData.fnModuleLoad = function(data, container){
		var is_page_archive = false;
		
		if(container.parent().is('.page-load-archive')){
			is_page_archive = true;
		}
					
		$.post(AJAX_M, {
			'mode': 'module',
			'data': data
		}).done(function(content){
			var newElems = $(content); 
			switch(data['mode']){
				case 'pagenums': 
					var this_pagenums = container.find('a[data-post='+data["module_post"]+'][data-paged='+data["paged"]+']');
					this_pagenums.text(data["paged"]);
					$('html,body').animate({
						scrollTop: container.parent().offset().top - 80
					},
					1000); 

					container.parent().find('section').remove();
					container.before(newElems);
				break;
				case 'twitter': 
					var this_twitter = container.find('a[data-post=\"'+data["module_post"]+'\"]');
					var this_text = this_twitter.data('moretext');
					this_twitter.attr('data-paged',Number(data['paged']) + 1).text(this_text).removeClass('tw-style-loading');
					if(data['paged'] == this_twitter.data('count')){
						this_twitter.fadeOut(300);
						this_twitter.parent('.page_twitter').css('margin-top','0');
					}

					if(is_page_archive){
						newElems.css('opacity',0);
						container.prev('.main-list-inn').append(newElems);
					}else{
						container.before(newElems);
					}
				break;
			}			
			
			//Fadein theitems of next page 
			newElems.animate({opacity:1}, 1000); 

			if(newElems.find('.audio_player_list').length){	
				//Audio player
				themeData.fnJplayerCall();
				themeData.jplayer.jPlayer("stop");
				themeData.audioPlayClick(newElems);
				themeData.audioPauseClick(newElems);
			}
			
			//Video play
			if(newElems.find('.blog-unit-video-play').length){
				themeData.fnVideoFace(newElems.find('.blog-unit-img-wrap'));
				themeData.fnVideoFace(newElems.find('.mainlist-img-wrap'));
			}

			//gallery list
			if(newElems.find('.Collage').length){
				$('.Collage').imagesLoaded(function(){ 
					$('.Collage').removeWhitespace().collagePlus({
						'fadeSpeed'     : 2000,
						'targetHeight'  : 200
					});
				});
			}
			
			//call carousel
			if(newElems.find('.owl-carousel').length){ console.log(newElems.find('.owl-carousel').length);
				themeData.carouselFn(newElems.find('.owl-carousel'));
			}

		});
	}
	
	//gallery collage
	themeData.fnGalleryCollage = function(collageWrap){
		collageWrap.removeWhitespace().collagePlus({
			'fadeSpeed'     : 2000,
			'targetHeight'  : 200
		});
	}

	themeData.fnBigScrollArchor = function(collageWrap){
	var delay = false;

	  $(document).on('mousewheel DOMMouseScroll', function(event) {
	    
	    if(delay) return;

	    delay = true;
	    setTimeout(function(){delay = false},200)

	    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

	    //var a= document.getElementsByTagName('section');
	    var a = $('.section-anchor');
	    var lasta = a.length - 1;


	    if(wd < 0) {
	      for(var i = 0 ; i < a.length ; i++) {
	        var t = a[i].getClientRects()[0].top;
	        if(t >= 40) break;
	      }
	    }
	    else {
	      for(var i = a.length-1 ; i >= 0 ; i--) {
	        var t = a[i].getClientRects()[0].top;
	        if(t < -20) break;
	      }
	    }

	    if(themeData.win.scrollTop() < a[lasta].offsetTop) {
	    	event.preventDefault();
		    $('html,body').animate({
		      	scrollTop: a[i].offsetTop
		    });
		}

  	});
	}	
	
	// Top slider
	themeData.carouselFn = function(carouselWrap){

		carouselWrap.each(function(){

			var 
			_margin = $(this).data('margin'),
			_center = $(this).data('center'),
			_item   = $(this).data('item'),
			_autoW  = $(this).data('autowidth'),
			_slideby= $(this).data('slideby');

			$(this).find('img').imagesLoaded(function(){
				carouselWrap.owlCarousel({
				    margin: _margin,
				    loop:true,
				    autoWidth:_autoW,
				    center: _center,
				    slideSpeed : 300,
		            paginationSpeed : 800,
		            rewindSpeed : 1000,
				    items: _item,
				    responsiveClass:true,
				    navText:["",""],
				    slideBy:_slideby,
				    dragBeforeAnimFinish : false,
				    responsive:{
				        0:{
				            items:1,
				            nav:true
				        },
				        480:{
				            items:1,
				            nav:true
				        },
				        769:{
				            items:_item,
				            nav:true 
				        }
				    }
				});
			});

		});
	}


	//Header switching
	themeData.HeadSwapFn = function(){
		 
			var 
			swap_wrap       = $('.header-swap'),
			swap_wrap_item1 = swap_wrap.find('.header-swap-item').eq(0).addClass('swap-visible'),
			swap_wrap_item2 = swap_wrap.find('.header-swap-item').eq(1).addClass('swap-hide');

			setInterval(function() { 
				if(swap_wrap_item1.hasClass('swap-visible')){
 					swap_wrap_item1.removeClass('swap-visible').addClass('swap-hide');
					swap_wrap_item2.addClass('swap-visible').removeClass('swap-hide');
				}else{
					swap_wrap_item1.addClass('swap-visible').removeClass('swap-hide');
					swap_wrap_item2.removeClass('swap-visible').addClass('swap-hide');
				}
			},4000);
			
	}

	//switching_word
	themeData.UxSwitchWord = function(){
		var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;

		initHeadline();

		function initHeadline() {
			singleLetters($('.cd-headline.letters').find('b'));
			animateHeadline($('.cd-headline'));
		}

		function singleLetters($words) {
			$words.each(function(){
				var word = $(this),
					letters = word.text().split(''),
					selected = word.hasClass('is-visible'),
					i = '';
				for (i in letters) {
					if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
					letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
				}
			    var newLetters = letters.join('');
			    word.html(newLetters).css('opacity', 1);
			});
		}

		function animateHeadline($headlines) { 
			var duration = animationDelay;
			$headlines.each(function(){
				var headline = $(this);
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
				setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
			});
		}

		function hideWord($word) {
			var nextWord = takeNext($word);

			if($word.parents('.cd-headline').hasClass('letters')) {
				var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
				hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
				showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
			} else {
				switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
			}
			
		}

		function hideLetter($letter, $word, $bool, $duration) {
			$letter.removeClass('in').addClass('out');
			
			if(!$letter.is(':last-child')) {
			 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
			} else if($bool) { 
			 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
			}

			if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
				var nextWord = takeNext($word);
				switchWord($word, nextWord);
			} 
		}

		function showLetter($letter, $word, $bool, $duration) {
			$letter.addClass('in').removeClass('out');
			
			if(!$letter.is(':last-child')) { 
				setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
			} else { 
				if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
				if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
			}
		}

		function takeNext($word) {
			return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
		}

		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}

	}
	
	//Sidebar Scroll fixed
	themeData.fnSidebarScroll = function(){
		
		var contentWrapOffsetTop = themeData.contentWrap.offset().top,
			contentWrapOuterHeight = themeData.contentWrap.outerHeight(true),
			contentWrapOuterMarginTop = themeData.contentWrapOuter.css('margin-top'),
			headerOuterHeight = themeData.header.outerHeight(true),
			footerOuterHeight = themeData.footer.outerHeight(true),
			footerOffsetTop = themeData.footer.offset().top,
			footerMarginTop = themeData.footer.css('margin-top'),
			sidebarWidgetWidth = themeData.sidebarWidget.width(),
			sidebarWidgetOffsetLeft = themeData.sidebarWidget.offset().left,
			sidebarWidgetOffsetTop = themeData.sidebarWidget.offset().top,
			sidebarWidgetMarginLeft = themeData.sidebarWidget.css('margin-left'),
			sidebarWidgetMarginTop = themeData.sidebarWidget.css('margin-top'),
			sidebarWidgetOuterHeight = themeData.sidebarWidget.outerHeight(true),
			sidebarWidgetThisTop = $(window).height() - sidebarWidgetOuterHeight;
		
		themeData.sidebarWidgetFixedScrollTop = (sidebarWidgetOffsetTop - Number(sidebarWidgetMarginTop.replace('px', '')) + sidebarWidgetOuterHeight) - $(window).height();
		themeData.footerOuterHeight = themeData.footer.outerHeight(true);
		themeData.headerOuterHeight = themeData.header.outerHeight(true);
		themeData.sidebarWidgetFixedScrollBottom = $(document).height() - (sidebarWidgetOuterHeight + themeData.footerOuterHeight + Number(contentWrapOuterMarginTop.replace('px', '')));
		themeData.sidebarWidgetThisTop = sidebarWidgetThisTop;
		
		sidebarWidgetOffsetLeft = sidebarWidgetOffsetLeft - Number(sidebarWidgetMarginLeft.replace('px', ''));
		if(contentWrapOuterHeight > sidebarWidgetOuterHeight){
			themeData.sidebarWidget.parent('.row').css('position', 'relative');
			themeData.sidebarWidgetFixedCss = {
				'position': 'fixed',
				'margin-left': sidebarWidgetMarginLeft,
				'left': sidebarWidgetOffsetLeft,
				'top': sidebarWidgetThisTop,
				'width': sidebarWidgetWidth - 1
			}
			
			themeData.sidebarWidgetDefaultCss = {
				'position': 'relative',
				'margin-left': sidebarWidgetMarginLeft,
				'left': 'auto',
				'top': 'auto',
				'width': sidebarWidgetWidth - 1
			}
		}
		
		themeData.winScrollTop = themeData.win.scrollTop();
		themeData.sidebarWidgetFixedScrollBottom = $(document).height() - themeData.win.height() - themeData.footerOuterHeight;
		
		if(themeData.winScrollTop > themeData.sidebarWidgetFixedScrollBottom){
			var this_top = themeData.sidebarWidgetThisTop - (themeData.winScrollTop - themeData.sidebarWidgetFixedScrollBottom);
			themeData.sidebarWidget.css(themeData.sidebarWidgetFixedCss);
			themeData.sidebarWidget.css('top', this_top);
		}else if(themeData.winScrollTop > themeData.sidebarWidgetFixedScrollTop){
			themeData.sidebarWidget.css(themeData.sidebarWidgetFixedCss);
		}else if(themeData.winScrollTop < themeData.sidebarWidgetFixedScrollTop){
			themeData.sidebarWidget.css(themeData.sidebarWidgetDefaultCss);
		}
	}

	//Back top
	themeData.fnBackTop = function(){
		
		themeData.win.find('img').imagesLoaded(function(){

			themeData.win.scroll(function(){

				if(themeData.winScrollTop > 100){
					if(!themeData.backTop.hasClass('backtop-shown')) {
					 	themeData.backTop.addClass('backtop-shown');
					}
				} else {
					if(themeData.backTop.hasClass('backtop-shown')) {
					 	themeData.backTop.removeClass('backtop-shown');
					}
				}

			});

			themeData.backTop.on({'touchstart click': function(){ 
				$('html, body').animate({scrollTop:0}, 1200);
			}});
		});
	}



	//document ready
	themeData.doc.ready(function(){

		//themeData.fnBigScrollArchor();

		if( Modernizr.touch ) {
			if (!themeData.body.hasClass('ux-mobile')){
				jQuery( '#navi li:has(ul)' ).doubleTapToGo();
			}
		}
		
		//call mobile menu
		if(themeData.isResponsive()){
			themeData.fnResponsiveMenu();
		}

		//Pageone navi
		if($('.anchor-in-current-page').length){
			if(themeData.WrapOurter.hasClass('enbale-onepage')) {
				themeData.Menu.onePageNav({
					currentClass: 'current',
					filter: ':not(.external)'
				});
			}
		}
		
		//Call top silder
		if(themeData.carousel.length) {
			themeData.carouselFn(themeData.carousel);
		}
		
		
		//Call Lightbox 
		if(themeData.lightboxPhotoSwipe.length){
			fnInitPhotoSwipeFromDOM('.lightbox-photoswipe');
		}
		
		//Call Tip
		if(themeData.tooltip.length){
			themeData.tooltip.tooltip();
		}
		
		//Pagenumber re-layout
		if(themeData.pagenumsDefault.length) {
			themeData.pagenumsDefault.each(function(){
				if($(this).find('.prev').length && $(this).find('.next').length){
					$(this).find('.next').after($(this).find('.prev'));
				}
			});
		}
		
		//Call audio player
		if(themeData.audioUnit.length > 0){
			themeData.fnJplayerCall();
		}
		
		//twitter style
		if(themeData.blogPagenumsTwitter.length){
			themeData.blogPagenumsTwitter.each(function(){
				var twitterLink = [];
				
				twitterLink.item = $(this);
				twitterLink.moduleID = twitterLink.item.data('module');
				twitterLink.modulePost = twitterLink.item.data('post');
				twitterLink.postID = twitterLink.item.data('postid');
				twitterLink.paged = twitterLink.item.data('paged');
				twitterLink.loading_text = twitterLink.item.data('loading');
				
				
				twitterLink.item.click(function(){
					twitterLink.item.html('<span>'+twitterLink.loading_text+'</span>');
					
					twitterLink.item.addClass('tw-style-loading');
					twitterLink.paged = twitterLink.item.attr('data-paged');

					var ajax_data = {
						'module_id'   : twitterLink.moduleID,
						'module_post' : twitterLink.modulePost,
						'post_id'     : twitterLink.postID,
						'paged'       : twitterLink.paged,
						'mode'        : 'twitter'
					}
					
					themeData.fnModuleLoad(ajax_data, twitterLink.item.parents('.pagenums'));
					return false;
				});
			})
			
		}
		
		//call video popup
		if(themeData.videoFace.length){
			themeData.fnVideoFace(themeData.videoFace);
		}

		//Fix ellipsis css bug for main list
		if($('.ux-ellipsis-before').length) {
			$('.ux-ellipsis-before').each(function(){
				var eH = $(this).parent('.ux-ellipsis').height();
				$(this).css('height',eH);
				if( eH < 70 ){
					$(this).parent('.ux-ellipsis').css('overflow','visible').addClass('clearfix');
				}
			});
		}

		if(themeData.backTop.length) {
			themeData.fnBackTop();
		}
		
		//Page Loading
		if(themeData.pageLoading.length){
	
				//Menu
				$('#navi ul.menu li:not(.anchor-in-current-page) a').click(function(){
					if(!Modernizr.touch){
						if(!$(this).parent().hasClass('current-menu-anchor')){
							themeData.fnPageLoadingEvent($(this));
							return false;
						}
					} else {
						if(!$(this).parent().hasClass('current-menu-anchor')&& !$(this).parent().hasClass('menu-item-has-children')){
							themeData.fnPageLoadingEvent($(this));
							return false;
						}
					}	
				});
			
				//all search form
				$('.search_top_form_text').parents('form').submit(function(){
					$("html, body").css({height:themeData.winHeight, overflow:"hidden"});
					themeData.pageLoading.fadeIn(300, function(){
						themeData.pageLoading.addClass('visible');
					});
				});
			
				//Logo
				$('.logo-a').click(function(){
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
	
				//WPML
				if($('.wpml-language-flags').length) {
					$('.wpml-language-flags a').click(function(){
						themeData.fnPageLoadingEvent($(this));
						return false;
					});
				}
	
				//post navi, Related posts
				$('.related-posts-carousel-li a, .page-numbers').click(function(){
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
				
				//gallery navi
				$('.single .gallery-navi-post a').click(function(){
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
			
				//slide / Main list / archive unit
				$('.carousel-des-wrap-tit-a,.carousel-des-wrap-meta a,.mainlist-tit-a,.blog-unit-more-a,.mainlist-meta a,.blog-unit-tit-a,.blog-unit-meta-top a,.mainlist-img-link,.feature-item-tit-a, .article-meta-unit a,.blog-unit-more-a').click(function(){
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
			
				//Widget
				$('.widget_archive a, .widget_recent_entries a, .widget_pages a, .widget_nav_menu a, .widget_tag_cloud a, .widget_calendar a, .widget_text a, .widget_meta a, .widget_categories a, .widget_recent_comments a, .widget_widget_tptn_pop a').click(function(){
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
			
				/** Module*/
				$('.moudle .iterlock-caption a, .moudle .tab-content a, .moudle .accordion-inner a, .moudle .blog-item a, .moudle .isotope a, .moudle .ux-btn, .moudle .post-carousel-item a, .moudle .caroufredsel_wrapper:not(.portfolio-caroufredsel) a').click(function(){
					if($(this).is('.lightbox')||$(this).is('.tw-style-a')||$(this).is('.lightbox-item')){}else if($(this).is('.liquid_list_image')){}else if($(this).is('.ajax-permalink')){}else{
						themeData.fnPageLoadingEvent($(this));
						return false;
					}
				});
	
				//Porfolio template
				$('.related-post-unit a,.tags-wrap a').click(function(){	
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
		
				//Woocommerce
				$('.prouduct-item-a').click(function(){	
					themeData.fnPageLoadingEvent($(this));
					return false;
				});
	
			$("html, body").css({height: themeData.winHeight});
			
		}

	});
	
	//win load
	themeData.win.load(function(){

		themeData.pageLoading.removeClass('visible');
		
		$("html, body").css({height: "auto"});

		if(themeData.searchOverlay.length){
			themeData.fnSerchShow();
		}

		if(themeData.submenuFullwidth.length) {
			themeData.fnSubmenuFullwidth();
			themeData.win.on("debouncedresize", themeData.fnSubmenuFullwidth);
		}

		if(themeData.searchForm.length){
			themeData.fnSearchForm();
		}

		themeData.body.removeClass("preload");
		
		if(themeData.galleryCollage.length){
			themeData.win.find('img').imagesLoaded(function(){ 
				themeData.fnGalleryCollage(themeData.galleryCollage);
			});
		}

		if($('#header-main').length) {
			themeData.fnScrollHeader();
		}
		
		if($('.switching-word').length) { 
			themeData.UxSwitchWord();
		}

		if($('.header-swap').length) {
			themeData.HeadSwapFn();
		}
		
		if(themeData.sidebarWidget.length){
			themeData.fnSidebarScroll();
		}
		
		themeData.win.scroll(function(){
			themeData.winScrollTop = themeData.win.scrollTop();
			themeData.sidebarWidgetFixedScrollBottom = $(document).height() - themeData.win.height() - themeData.footerOuterHeight;
			
			if(themeData.winScrollTop > themeData.sidebarWidgetFixedScrollBottom){
				var this_top = themeData.sidebarWidgetThisTop - (themeData.winScrollTop - themeData.sidebarWidgetFixedScrollBottom);
				themeData.sidebarWidget.css(themeData.sidebarWidgetFixedCss);
				themeData.sidebarWidget.css('top', this_top);
			}else if(themeData.winScrollTop > themeData.sidebarWidgetFixedScrollTop){
				themeData.sidebarWidget.css(themeData.sidebarWidgetFixedCss);
			}else if(themeData.winScrollTop < themeData.sidebarWidgetFixedScrollTop){
				themeData.sidebarWidget.css(themeData.sidebarWidgetDefaultCss);
			}
		});
		
	});
	
	
	//win resize
	themeData.win.resize(function(){
		if(themeData.galleryCollage.length){
			$('.Collage .Image_Wrapper').css("opacity", 0);
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function(){
				if(themeData.galleryCollage.length) {
					themeData.win.find('img').imagesLoaded(function(){ 
						themeData.fnGalleryCollage(themeData.galleryCollage);
					});
				}
			}, 200);
		}
		
		if(themeData.sidebarWidget.length){ 
			themeData.sidebarWidget.attr('style', null);
			themeData.fnSidebarScroll();
		}
	});

	window.onpageshow = function(event) {
	    if (event.persisted) {
	        window.location.reload() 
	    }
	};
	
})(jQuery);

//Function Call lightbox plugin: PhotoSwipe
function fnInitPhotoSwipeFromDOM(gallerySelector){
	// parse slide data (url, title, size ...) from DOM elements 
	// (children of gallerySelector)
	var parseThumbnailElements = function(el){
		var thumbElements = jQuery(el).find('[data-lightbox=true]'),
			numNodes = thumbElements.length,
			items = [],
			figureEl,
			linkEl,
			size,
			item;

		for(var i = 0; i < numNodes; i++){

			figureEl = thumbElements[i]; // <figure> element

			// include only element nodes 
			if(figureEl.nodeType !== 1){
				continue;
			}

			//linkEl = figureEl.children[0]; // <a> element
			linkEl = jQuery(figureEl).find('.lightbox-item');

			size = linkEl.attr('data-size').split('x');

			// create slide object
			item = {
				src: linkEl.attr('href'),
				w: parseInt(size[0], 10),
				h: parseInt(size[1], 10)
			};



			if(figureEl.children.length > 1){
				// <figcaption> content
				item.title = linkEl.attr('title'); 
			}

			if(linkEl.find('img').length > 0){
				// <img> thumbnail element, retrieving thumbnail url
				item.msrc = linkEl.find('img').attr('src');
			} 

			item.el = figureEl; // save link to element for getThumbBoundsFn
			items.push(item);
		}

		return items;
	};

	// find nearest parent element
	var closest = function closest(el, fn){
		return el && (fn(el) ? el : closest(el.parentNode, fn));
	};

	// triggers when user clicks on thumbnail
	var onThumbnailsClick = function(e){
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : e.returnValue = false;

		var eTarget = e.target || e.srcElement;

		// find root element of slide
		var clickedListItem = closest(eTarget, function(el){
			if(el.tagName){
				return (el.hasAttribute('data-lightbox') && el.getAttribute('data-lightbox') === 'true'); 
			}
		});

		if(!clickedListItem){
			return;
		}

		// find index of clicked item by looping through all child nodes
		// alternatively, you may define index via data- attribute
		var clickedGallery = jQuery(clickedListItem).parents('.lightbox-photoswipe'),
			childNodes = clickedGallery.find('[data-lightbox=true]'),
			numChildNodes = childNodes.length,
			nodeIndex = 0,
			index;

		for (var i = 0; i < numChildNodes; i++){
			if(childNodes[i].nodeType !== 1){ 
				continue; 
			}

			if(childNodes[i] === clickedListItem){
				index = nodeIndex;
				break;
			}
			nodeIndex++;
		}
		
		if(index >= 0){
			// open PhotoSwipe if valid index found
			openPhotoSwipe(index, clickedGallery[0]);
		}
		return false;
	};

	// parse picture index and gallery index from URL (#&pid=1&gid=2)
	var photoswipeParseHash = function(){
		var hash = window.location.hash.substring(1),
		params = {};

		if(hash.length < 5) {
			return params;
		}

		var vars = hash.split('&');
		for (var i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');  
			if(pair.length < 2) {
				continue;
			}           
			params[pair[0]] = pair[1];
		}

		if(params.gid) {
			params.gid = parseInt(params.gid, 10);
		}

		if(!params.hasOwnProperty('pid')) {
			return params;
		}
		params.pid = parseInt(params.pid, 10);
		return params;
	};

	var openPhotoSwipe = function(index, galleryElement, disableAnimation){
		var pswpElement = document.querySelectorAll('.pswp')[0],
			gallery,
			options,
			items;

		items = parseThumbnailElements(galleryElement);

		// define options (if needed)
		options = {
			index: index,

			// define gallery index (for URL)
			galleryUID: galleryElement.getAttribute('data-pswp-uid'),

			getThumbBoundsFn: function(index) {
				// See Options -> getThumbBoundsFn section of documentation for more info
				var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect(); 

				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			}

		};

		if(disableAnimation) {
			options.showAnimationDuration = 0;
		}

		// Pass data to PhotoSwipe and initialize it
		gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};

	// loop through all gallery elements and bind events
	var galleryElements = document.querySelectorAll(gallerySelector);
	
	for(var i = 0, l = galleryElements.length; i < l; i++){
		galleryElements[i].setAttribute('data-pswp-uid', i+1);
		galleryElements[i].onclick = onThumbnailsClick;
	}

	// Parse URL and open gallery if it contains #&pid=3&gid=1
	var hashData = photoswipeParseHash();
	if(hashData.pid > 0 && hashData.gid > 0) {
		openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
	}
}