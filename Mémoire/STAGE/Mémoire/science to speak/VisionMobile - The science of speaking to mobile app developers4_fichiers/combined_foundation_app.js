$(window).load(function(){slideshare_object&&slideshare_object.slideshow&&slideshare_object.slideshow.is_private||slideshare_object.loadGAandComscore()}),$(function(){$(document).foundation({abide:{live_validate:!1}}),$("body").on("click","[data-ga-cat]",function(){var e=$(this).data("ga-cat"),o=$(this).data("ga-action"),a=$(this).data("ga-label"),i=$(this).data("ga-value"),s=$(this).data("ga-noninteractive")||!1;e&&o&&slideshare_object.ga(e,o,a,i,s)}),slideshare_object.setLanguageSelector(),slideshare_object.autosuggestTop(),slideshare_object.lazyloadThumbnails();var e=$('meta[name="csrf-token"]').attr("content");$.ajaxSetup({beforeSend:function(o,a){function i(e){var o=document.createElement("a");o.href=e;var a=o.href;return o.href=a,o.hostname}"GET"!==a.type&&i(a.url)===window.location.hostname&&o.setRequestHeader("X-CSRF-Token",e)}});var o=function(){var e=($("body"),$("#main-nav-mobile-search"));e.is(":visible")?e.hide().find("input").blur():e.slideDown().find("input").focus()};$("body").on("click",".j-open-mobile-search",function(e){e.stopPropagation(),e.preventDefault(),o()}),$("#main-nav-mobile-search form").on("submit",function(){$("#main-nav-mobile-search").addClass("searching")}),$("body").on("click",function(e){$(e.target).closest("#main-nav-mobile-search").length<=0&&$("#main-nav-mobile-search").is(":visible")&&(e.stopPropagation(),e.preventDefault(),o())}),$(window).load(function(){var e=$("body"),o=$("#main-nav"),a=function(){e.css("padding-top",o.height())};$(window).resize(function(){a()}),$("html,body, body .wrapper").trigger("scroll")}),$(document).ready(function(){if("undefined"!=typeof mobile_util){var e;if(mobile_util.isIOS8()&&slideshare_object.slideshow&&slideshare_object.slideshow.mobile_app_url&&mobile_util.IOSAutoDeepLink(slideshare_object.slideshow.mobile_app_url),mobile_util.isIOSWebView()){var o=window._gaq||[];o.push(["_trackEvent",slideshare_object.rum_pagekey,"ios_inapp_webview",navigator.userAgent])}else mobile_util.isIOS8()&&mobile_util.portraitMode()?e={currentPage:slideshare_object.rum_pagekey,promoName:"ios_default_splash",promoSelector:"#splash-promo",lazyloadClass:".j-lazyload.j-ios-show, .j-lazyload.j-ios-default-show",downloadSelector:".j-store_btn",cooloffDays:28,launchOnInit:!0,closedSelector:".j-close-splash",showSelector:".j-ios-show, .j-ios-default-show",disableScroll:!0}:mobile_util.isAndroid()&&(e={currentPage:slideshare_object.rum_pagekey,promoName:"android_default_splash",promoSelector:"#splash-promo",lazyloadClass:".j-lazyload.j-android-show, .j-lazyload.j-android-default-show",downloadSelector:".j-store_btn",closedSelector:".j-close-splash",cooloffDays:28,launchOnInit:!0,showSelector:".j-android-show, .j-android-default-show",disableScroll:!0});if(e){new MobilePromo(e)}}})});