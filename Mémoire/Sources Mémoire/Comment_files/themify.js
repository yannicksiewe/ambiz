;var ThemifyBuilderModuleJs;
(function($, window, document, undefined) {
	ThemifyBuilderModuleJs = {

		wow: null,

		init: function() {
			this.bindEvents();

			if(tbLocalScript.isTouch) {
				$('body').addClass('builder-is-touch');
			}
		},

		bindEvents: function() {
			var self = ThemifyBuilderModuleJs;
			this.hackWOW();

			$(document).ready(function(){
				self.showcaseGallery();
				self.touchdropdown();
				self.accordion();
				self.tabs();
				
				if ( tbLocalScript.isAnimationActive ) {
					self.animationOnScroll();
					self.wow = new WOW();
					self.wow.init();
				}
				
				if ( 'undefined' !== typeof $.fn.themifyScrollHighlight ) {
					$('body').themifyScrollHighlight();
				}

				if(tbLocalScript.isTouch) return;
				// put code for mobile on
			});

			$(window).load(function(){
				self.carousel();
				self.tabsDeepLink();
				self.animatedBackground();
				self.charts();
				self.backgroundSlider();

				if ( tbLocalScript.isTouch ) {
					self.fullheight();
					return;
				}
				self.fullwidthVideo();
				self.backgroundScrolling();
			});

			$(window).bind( 'hashchange', function(){
				self.tabsDeepLink();
			} );
		},

		loadOnAjax: function() {
			ThemifyBuilderModuleJs.touchdropdown();
			ThemifyBuilderModuleJs.accordion();
			ThemifyBuilderModuleJs.tabs();
			ThemifyBuilderModuleJs.carousel();
			ThemifyBuilderModuleJs.charts();
		},

		fullheight: function() {
			// Set full-height rows to viewport height
			if ( navigator.userAgent.match(/(iPad)/g) ) {
				var didResize = false,
					selector = '.themify_builder_row.fullheight';
				$(window).resize(function() {
					didResize = true;
				});
				setInterval(function() {
					if ( didResize ) {
						didResize = false;
						$(selector).each(function(){
							$(this).css({
								'height': $(window).height()
							});
						});
					}
				}, 250);
			}
		},

		// Row: Background Slider
		backgroundSlider: function() {

			var $rowSliders = $('.row-slider');

			if ( 'undefined' === typeof themifySectionVars ) {
				// Define vars if they aren't
				var themifySectionVars = {
					autoplay: '5000',
					speed: '2000',
					play: 'yes',
					wrap: 'yes'
				};
			}

			// Parse injected vars
			themifySectionVars.autoplay = parseInt(themifySectionVars.autoplay, 10);
			if ( themifySectionVars.autoplay <= 10 ) {
				themifySectionVars.autoplay *= 1000;
			}
			themifySectionVars.speed = parseInt(themifySectionVars.speed, 10);
			themifySectionVars.play = themifySectionVars.play != 'no';
			themifySectionVars.wrap = themifySectionVars.wrap != 'no';

			if ( $rowSliders.length > 0 ) {

				// Initialize slider
				$rowSliders.each( function() {
					var $thisRowSlider = $(this),
						$backel = $thisRowSlider.closest('.row_inner'),
						rsImages = [],
						bgMode = $thisRowSlider.data('bgmode');

					// Initialize images array with URLs
					$thisRowSlider.find('li').each(function(){
						rsImages.push( $(this).attr('data-bg') );
					});

					// Call backstretch for the first time
					$backel.backstretch(rsImages, {
						fade : themifySectionVars.speed,
						mode: bgMode
					});
					// Cache Backstretch object
					var thisBGS = $backel.data('backstretch');

					// Previous and Next arrows
					$thisRowSlider.find('.row-slider-prev').on('click', function(e){
						e.preventDefault();
						thisBGS.prev();
					});
					$thisRowSlider.find('.row-slider-next').on('click', function(e){
						e.preventDefault();
						thisBGS.next();
					});

					// Dots
					$thisRowSlider.find('.row-slider-dot').each(function(){
						var $dot = $(this);
						$dot.on('click', function(){
							thisBGS.show( $dot.data('index') );
						});
					});

				});
			}

		},

		// Row: Animated Color Background
		animatedBackground: function(){
			if ( 'undefined' !== typeof $.fn.animatedBG && 'object' === typeof themifyScript ) {
				if ( ( 'string' === typeof themifyScript.colorAnimationSet && 'string' === typeof themifyScript.colorAnimationSpeed ) && ( '' != themifyScript.colorAnimationSet && '' != themifyScript.colorAnimationSpeed ) ) {
					$('.themify_builder_row.animated-bg').animatedBG({
						colorSet: themifyScript.colorAnimationSet.split(','),
						speed: parseInt( themifyScript.colorAnimationSpeed, 10 )
					});
				}
			}
		},

		// Row: Fullwidth video background
		fullwidthVideo: function(){
			if ( typeof $.BigVideo !== 'undefined' ) {
				var $videos = $('.themify_builder_row[data-fullwidthvideo]'),
					fwvideos = [];
				$.each($videos, function (i, elm) {
					fwvideos[i] = new $.BigVideo({
						useFlashForFirefox: true,
						container: $(elm).find('.row_inner'),
						id: i
					});
					fwvideos[i].init();
					fwvideos[i].show($(elm).data('fullwidthvideo'), {
						doLoop : true
					});
				});
			}
		},

		touchdropdown: function(){
			if( typeof jQuery.fn.themifyDropdown == 'function' ) {
				$( '.module-menu .nav' ).themifyDropdown();
			}
		},

		accordion: function() {
			$('.module.module-accordion').themify_accordion();
		},

		charts: function() {
			$('.module-feature .module-feature-chart').each(function(){
				$(this).waypoint(function(){
					var $self = $(this),
						barColor = $self.data('color'),
						percent = $self.data('percent');

					$self.easyPieChart( {
						'percent' : percent,
						'barColor' : barColor,
						'trackColor' : $self.data('trackcolor'),
						'scaleColor' : $self.data('scalecolor'),
						'lineCap' : $self.data('linecap'),
						'rotate' : $self.data('rotate'),
						'size' : $self.data('size'),
						'lineWidth' : $self.data('linewidth'),
						'animate' : $self.data('animate')
					} );
				}, {
					offset: '100%',
					triggerOnce: true
				});
			});
		},

		showcaseGallery : function() {
			$( 'body' ).on( 'click', '.module.module-gallery.layout-showcase a', function(e){
				$( this ).closest( '.gallery' ).find( '.gallery-showcase-image img' ).prop( 'src', $(this).prop( 'href' ) );
				return false;
			});
		},

		tabs: function() {
			$(".module.module-tab").each(function(){
				$height = $(".tab-nav", this).outerHeight();
				if($height > 200) {
					$(".tab-content", this).css('min-height', $height);
				}
			});
			$(".module.module-tab").tabify();
		},

		tabsDeepLink: function() {
			var hash = window.location.hash;
			if ( '' != hash && $( hash + '.tab-content' ).length > 0 ) {
				var cons = 100,
					$moduleTab = $( hash ).closest( '.module-tab' );
				if ( $moduleTab.length > 0 ) {
					$( 'a[href=' + hash + ']' ).click();
					$( 'html, body' ).animate( { scrollTop: $moduleTab.offset().top - cons }, 1000 );
				}
			}
		},

		carousel: function() {
			$('.themify_builder_slider').each(function(){
				var $this = $(this),
					$args = {
					responsive: true,
					circular: true,
					infinite: true,
					//height: 'auto',
					items: {
						visible: { min: 1, max: $this.data('visible') },
						width: 150
					},
					onCreate: function( items ) {
						items = items.items;
						var heights = [];
						$('.themify_builder_slider_wrap').css({'visibility':'visible', 'height':'auto'});

						$.each( items, function() {
							heights.push( $(this).outerHeight() );
						});
						$( '.caroufredsel_wrapper, .themify_builder_slider, .themify_builder_slider li', $this ).outerHeight( Math.max.apply( Math, heights ) );

						$('.themify_builder_slider_loader').remove();
					}
				};

				if($this.closest('.themify_builder_slider_wrap').find('.caroufredsel_wrapper').length > 0) {
					return;
				}

				// fix the one slide problem
				if($this.children().length < 2) {
					$('.themify_builder_slider_wrap').css({'visibility':'visible', 'height':'auto'});
					$('.themify_builder_slider_loader').remove();
					$(window).resize();
					return;
				}

				// Auto
				if(parseInt($this.data('auto-scroll')) > 0) {
					$args.auto = {
						play: true,
						timeoutDuration: parseInt($this.data('auto-scroll') * 1000)
					};
				}
				else if($this.data('effect') !== 'continuously' && ( typeof $this.data('auto-scroll') !== 'undefined' || parseInt($this.data('auto-scroll')) == 0 )  ){
					$args.auto = false;
				}

				// Touch
				$args.swipe = true;

				// Scroll
				if($this.data('effect') == 'continuously'){
					if(typeof $args.auto !== 'undefined'){
						delete $args.auto;
					}
					var speed = $this.data('speed'), duration;
					if ( speed == .5 ) {
						duration = 0.10;
					} else if ( speed == 4 ) {
						duration = 0.04;
					} else {
						duration = 0.07;
					}
					$args.auto = { timeoutDuration: 0 };
					$args.align = false;
					$args.scroll = {
						delay: 1000,
						easing: 'linear',
						items: $this.data('scroll'),
						duration: duration,
						pauseOnHover: $this.data('pause-on-hover')
					};
				} else {
					$args.scroll = {
						items: $this.data('scroll'),
						pauseOnHover: $this.data('pause-on-hover'),
						duration: parseInt($this.data('speed') * 1000),
						fx: $this.data('effect')
					}
				}

				if($this.data('arrow') == 'yes') {
					$args.prev = '#' + $this.data('id') + ' .carousel-prev';
					$args.next = '#' + $this.data('id') + ' .carousel-next';
				}

				if($this.data('pagination') == 'yes') {
					$args.pagination = { container: '#' + $this.data('id') + ' .carousel-pager' };
				}

				if($this.data('wrapper') == 'no') {
					$args.wrapper = {
						element: false
					}
				}

				$this.carouFredSel($args);
			});
		},

		request: 0,

		initialize: function(address, num, zoom, type, scroll, drag) {
			var delay = this.request++ * 500;
			setTimeout( function(){
				var geo = new google.maps.Geocoder(),
					latlng = new google.maps.LatLng(-34.397, 150.644),
					mapOptions = {
						'zoom': zoom,
						center: latlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						scrollwheel: scroll,
						draggable: drag
					};
				switch( type.toUpperCase() ) {
					case 'ROADMAP':
						mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
						break;
					case 'SATELLITE':
						mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE;
						break;
					case 'HYBRID':
						mapOptions.mapTypeId = google.maps.MapTypeId.HYBRID;
						break;
					case 'TERRAIN':
						mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
						break;
				}
				var	map = new google.maps.Map( document.getElementById( 'themify_map_canvas_' + num ), mapOptions );
				geo.geocode( { 'address': address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						map.setCenter(results[0].geometry.location);
						var marker = new google.maps.Marker({
							map: map,
							position: results[0].geometry.location
						}),

						info = $('#themify_map_canvas_' + num).data('info-window'),

						contentString = '<div class="themify_builder_map_info_window">'+ info +'</div>',

						infowindow = new google.maps.InfoWindow({
							content: contentString
						});

						google.maps.event.addListener( marker, 'click', function() {
							infowindow.open( map, marker );
						});
					}
				});
			}, delay );
		},

		backgroundScrolling: function() {
			$('.builder-parallax-scrolling').each(function(){
				$(this).builderParallax('50%', 0.1);
			});
		},

		animationOnScroll: function() {
			var self = ThemifyBuilderModuleJs;
			if(!self.supportTransition()) return;

			$('body').addClass('animation-on')
			.on('builder_toggle_frontend', function(event, is_edit){
				self.doAnimation();
			});
			self.doAnimation();
		},

		doAnimation: function(){
			// On scrolling animation
			var self = ThemifyBuilderModuleJs, selectors = tbLocalScript.animationInviewSelectors,
				iterate = 0, animateEnd, $body = $('body'), $overflow = $('body');

			if(!self.supportTransition()) return;

			if ( $body.find(selectors).length > 0 ) {
				if( !$overflow.hasClass('animation-running')){
					$overflow.addClass('animation-running');
				}
			} else {
				if( $overflow.hasClass('animation-running')){
					$overflow.removeClass('animation-running');
				}
			}

			$.each(selectors, function(i,selector){
				$(selector).addClass('wow');
			});
		},

		supportTransition: function() {
			var b = document.body || document.documentElement,
				s = b.style,
				p = 'transition';

			if (typeof s[p] == 'string') { return true; }

			// Tests for vendor specific prop
			var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
			p = p.charAt(0).toUpperCase() + p.substr(1);

			for (var i=0; i<v.length; i++) {
				if (typeof s[v[i] + p] == 'string') { return true; }
			}
			return false;
		},

		hackWOW: function() {
			$('<div />', {class: 'wow'}).appendTo($('body'));
		}
	};

	// Initialize
	ThemifyBuilderModuleJs.init();

}(jQuery, window, document));