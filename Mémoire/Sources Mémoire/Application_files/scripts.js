// DOM Ready
$(function() {

	
	// SVG fallback
	// toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script#update
	if (!Modernizr.svg) {
		var imgs = document.getElementsByTagName('img');
		var dotSVG = /.*\.svg$/;
		for (var i = 0; i != imgs.length; ++i) {
			if(imgs[i].src.match(dotSVG)) {
				imgs[i].src = imgs[i].src.slice(0, -3) + "png";
			}
		}
	}

});
// Home services tabs
$(function() {
	$('#service1_sel').hover(function(){
		$('#services_desc > div, #services_desc > a').hide();
		$('#service1_desc').show();
	})
	$('#service2_sel').hover(function(){
		$('#services_desc > div, #services_desc > a').hide();
		$('#service2_desc').show();
	})
	$('#service3_sel').hover(function(){
		$('#services_desc > div, #services_desc > a').hide();
		$('#service3_desc').show();
	})
	$('#service4_sel').hover(function(){
		$('#services_desc > div, #services_desc > a').hide();
		$('#service4_desc').show();
	})
	$('#services_selectors').mouseleave(function(){
		$('#services_desc > div, #services_desc > a').hide();
		$('#default_desc').show();
	})
});

// Scroll Nav for portfolio
$(function() {
	 $('.spyscroll').on('scrollSpy:enter', function() {
		var link_spy = '#link_' + $(this).attr('id');
		$(link_spy).addClass("current");
	});
	$('.spyscroll').on('scrollSpy:exit', function() {
		var link_spy = '#link_' + $(this).attr('id');
		$(link_spy).removeClass("current");
	});


	$('.spyscroll').scrollSpy(); 
});

$(function() {

	
$('.link_scroll').click(function(){
	var scroll_to = "#post-" + $(this).attr('id').replace(/\D/g,'') 
	$.scrollTo(scroll_to,800,"swing");
	     return false;
	})
});

// Service Pages scroll down form
$(function() {
	$(".slide_down_link").click(function(){
	$(".wpcf7-form").slideDown(250);
	$(this).addClass("open");
	})
});

// Animation steps (page CSW and CSWEC)
$(function() {
	$("#steps_s1").hover(function(){
		$("#sheet2, #sheet3, #sheet4").hide();
		$('#sheet1').show();
		$(".selectors li").removeClass("current");
		$("#steps_s1").addClass("current");
	})
	$("#steps_s2").hover(function(){
		$("#sheet1, #sheet3, #sheet4").hide();
		$('#sheet2').show();
		$(".selectors li").removeClass("current");
		$("#steps_s2").addClass("current");
	})
	$("#steps_s3").hover(function(){
		$("#sheet1, #sheet2, #sheet4").hide();
		$('#sheet3').show();
		$(".selectors li").removeClass("current");
		$("#steps_s3").addClass("current");
	})
	$("#steps_s4").hover(function(){
		$("#sheet1, #sheet2, #sheet3").hide();
		$('#sheet4').show();
		$(".selectors li").removeClass("current");
		$("#steps_s4").addClass("current");
	})
});

// Home testimonials
$(function() {
	$("#testimonials_nav_selector_1").click(function(){
		$("#sheet_2, #sheet_3").hide();
		$("#sheet_1").show();
		$("#testimonials_nav > li").removeClass("current");
		$("#testimonials_nav_selector_1").addClass("current");
	})
});
$(function() {
	$("#testimonials_nav_selector_2").click(function(){
		$("#sheet_1, #sheet_3").hide();
		$("#sheet_2").show();
		$("#testimonials_nav > li").removeClass("current");
		$("#testimonials_nav_selector_2").addClass("current");
	})
});
$(function() {
	$("#testimonials_nav_selector_3").click(function(){
		$("#sheet_2, #sheet_3").hide();
		$("#sheet_3").show();
		$("#testimonials_nav > li").removeClass("current");
		$("#testimonials_nav_selector_3").addClass("current");
	})
});

/* lancement du sticky nav */
  $(document).ready(function(){
    $(".header_wrapper").sticky({topSpacing:0});
  });

/*animation home fade au chargement*/
 $(document).ready(function() {
 	$('#front_screen .image').hide();
    $('#front_screen .image').fadeIn(1000);
});

/*Effet parrallax home */
  	$(window).scroll( function()
{
var defilement = $(window).scrollTop(), slowScroll = defilement/2;
$('#front_screen').css({ transform: "translateY(" + slowScroll + "px)" });
});


/* Réalisations losanges responsives : Editer ici losqu'on a plus de 16 réalisations*/
$(document).ready(function(){
 var sizegrid = $(".grid_3r").outerWidth();
 var demi = ((sizegrid)/2);
 var marges = ((sizegrid)*0.712);
 var styles = {'margin-top':demi,'height':sizegrid}
$(".grid_3r").css(styles);
	var windowWidth= $(window).width();
	if(windowWidth > 839){
		$(".post-type-archive-realisations section article + article + article + article + article").css('margin-top', -demi);
		$(".post-type-archive-realisations section article:nth-child(7), .post-type-archive-realisations section article:nth-child(14)").css('margin-left', marges);
	}
	if(windowWidth < 839){
		$(".post-type-archive-realisations section article + article + article + article").css('margin-top', -demi);
		$(".post-type-archive-realisations section article:nth-child(6), .post-type-archive-realisations section article:nth-child(11), .post-type-archive-realisations section article:nth-child(16)").css('margin-left', marges);
	}
});

// Création-Refonte tabs //
$(function() {
	$('#step_ergonomie_link').click(function(){
		$('#steps_content > div').removeClass('active');
		$('#step_ergonomie_tab').addClass('active');
		$('#steps_nav > li').removeClass('active');
		$(this).addClass('active');

	})
	$('#step_design_link').click(function(){
		$('#steps_content > div').removeClass('active');
		$('#step_design_tab').addClass('active');
		$('#steps_nav > li').removeClass('active');
		$(this).addClass('active');
	})
	$('#step_developpement_link').click(function(){
		$('#steps_content > div').removeClass('active');
		$('#step_developpement_tab').addClass('active');
		$('#steps_nav > li').removeClass('active');
		$(this).addClass('active');
	})
	$('#step_accompagnement_link').click(function(){
		$('#steps_content > div').removeClass('active');
		$('#step_accompagnement_tab').addClass('active');
		$('#steps_nav > li').removeClass('active');
		$(this).addClass('active');
	})
});

// E-Commerce tabs //
$(function() {
	$('#eshop_magento_link').click(function(){
		$('#eshop_content > div').removeClass('active');
		$('#eshop_magento_tab').addClass('active');
		$('#eshop_nav > li').removeClass('active');
		$(this).addClass('active');

	})
	$('#eshop_prestashop_link').click(function(){
		$('#eshop_content > div').removeClass('active');
		$('#eshop_prestashop_tab').addClass('active');
		$('#eshop_nav > li').removeClass('active');
		$(this).addClass('active');
	})
	$('#eshop_woocommerce_link').click(function(){
		$('#eshop_content > div').removeClass('active');
		$('#eshop_woocommerce_tab').addClass('active');
		$('#eshop_nav > li').removeClass('active');
		$(this).addClass('active');
	})

});

// TMA tabs //
$(function() {
	$('#tma_corrective_link').click(function(){
		$('#tma_content > div').removeClass('active');
		$('#tma_corrective_tab').addClass('active');
		$('#tma_nav > li').removeClass('active');
		$(this).addClass('active');

	})
	$('#tma_evolutive_link').click(function(){
		$('#tma_content > div').removeClass('active');
		$('#tma_evolutive_tab').addClass('active');
		$('#tma_nav > li').removeClass('active');
		$(this).addClass('active');
	})
});

// REF NAT Tabs
$(function() {
	$('#ref_approche_link').click(function(){
		$('#ref_content > div').removeClass('active');
		$('#ref_approche_tab').addClass('active');
		$('#ref_nav > li').removeClass('active');
		$(this).addClass('active');
	})
	$('#ref_accompagnement_link').click(function(){
		$('#ref_content > div').removeClass('active');
		$('#ref_accompagnement_tab').addClass('active');
		$('#ref_nav > li').removeClass('active');
		$(this).addClass('active');
	})
	$('#ref_audit_link').click(function(){
		$('#ref_content > div').removeClass('active');
		$('#ref_audit_tab').addClass('active');
		$('#ref_nav > li').removeClass('active');
		$(this).addClass('active');
	})
});
