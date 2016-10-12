jQuery(document).ready(function($){

/* --------------------------------
Slide Toggle
-------------------------------- */
	$(".slide").click(function(){
		$(".slidetoggle").slideToggle("fast");
		$(this).toggleClass("active"); return false;
	});


/* --------------------------------
PostFooter equal height
-------------------------------- */
	var $container = $('.post-footer');
	$container.imagesLoaded(function(){
			var heightArray = $(".post-footer li.left").map( function(){
				return  $(this).height();
			}).get();

			var maxHeight = Math.max.apply( Math, heightArray);
			$(".post-footer li.left").height(maxHeight);
	});


/* --------------------------------
Thumbnail:hover
-------------------------------- */
	$(".thumbnail").hover(function(){
		$(this).find(".onhover").animate({ bottom: "50%", opacity: "show" }, 300 );
	}, function(){
		$(this).find(".onhover").animate({ bottom: "35%", opacity: "hide" }, 300 );
	});


/* --------------------------------
Navigation
-------------------------------- */
	$(".navigation .nav li ul").css({ display: 'none' });
	$(".navigation .nav li").hover(function() {
		$(this).find('ul.sub-menu')
			.stop(true, true).delay(50).animate({ "height": "show", "opacity": "show" }, 200 );
	}, function(){
		$(this).find('ul.sub-menu')
			.stop(true, true).delay(50).animate({ "height": "hide", "opacity": "hide" }, 200 );
	});

	// Mobile navigation
	$('.selectbox').click(function(){
		$('.mobilenav').animate({ "height": "show", "opacity": "show" }, 200 );
	});
	var mouse_is_inside = false;
	$('.selectbox').hover(function(){
		mouse_is_inside=true;
	}, function(){
		mouse_is_inside=false;
	});
	/**/	$("body").mouseup(function(){
	/**/		if(! mouse_is_inside) $('.mobilenav').hide();
	/**/	});
	$('.mobilenav a').click(function(e){
		$('.selectbox').text($(this).text());
		$('.mobilenav').hide();
		$(this).addClass('current');
	});


/* --------------------------------
Masonry
-------------------------------- */
	$('#homepage .main-wrapper').masonry({
		itemSelector: '.post',
		isAnimated: true,
		gutterWidth: 0,
		columnWidth: 20,
	}).imagesLoaded(function() {									// Reload masonry after Image
		$('#homepage .main-wrapper').masonry('reloadItems');
	});

	// Flexslider
	$('.flexslider').imagesLoaded( function() {
        $(".flexslider").flexslider({
			slideshowSpeed: 7000,
			touch: true,
			animation: "fade",
			animationSpeed: 500,
			controlNav: false,
			smoothHeight: true,
		});

		$('#homepage .main-wrapper').masonry('reloadItems');
    });

	// Get the font
	var fonts = $.Deferred();
	WebFontConfig = { google: { families: [ 'Open Sans' ] } , active : function() { fonts.resolve(); } };
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
	fonts.done(function(){
		$('#homepage .main-wrapper').masonry('reloadItems');
	});


/* --------------------------------
Media Element
-------------------------------- */
	$('audio,video').mediaelementplayer({
		videoWidth: '100%',
		videoHeight: '100%',
		audioWidth: '100%',
		features: ['playpause','progress','tracks'],
		videoVolume: 'horizontal'
	});


/* --------------------------------
Contact
-------------------------------- */
    $('#contact_form').submit(function(e){
		// Set variables to validate the Email address:
		var x=document.forms["bynCForm"]["email"].value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");

		// Set variable to check if fields are empty
		var errors;

		// Execution
        $('.required').each(function(){
            var val = $(this).val()
            if( ! val )
            {
                errors = true;
            }
        });

		// Well...lets go
        if( errors )
        {
            e.preventDefault();
			$('.err').empty().text('Great...Can you please take this seriously?').css({'display': 'block'});
        }
		else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		{
			$('.err').empty().text('You are kidding, right? That is not a valid email address').css({'display': 'block'});
			return false;
		}
		else
		{
			e.preventDefault();
			var form = $(this);
			var post_url = form.attr('action');
			var post_data = form.serialize();
			$('.err').css({'display': 'none'});
			$('#loader', form).html('Please Wait...');
			$.ajax({
				type: 'POST',
				url: post_url,
				data: post_data,
				success: function(msg) {
					$(form).fadeOut(500, function(){
						form.html(msg).fadeIn();
					});
				}
			});
		}
    });

$(window).load(function(){
	$('#homepage .main-wrapper').masonry({
		itemSelector: '.post',
		isAnimated: true,
		gutterWidth: 0,
		columnWidth: 20,
	}).imagesLoaded(function() {									// Reload masonry after Image
		$('#homepage .main-wrapper').masonry('reloadItems');
	});
});


/* -- fin -- */
});