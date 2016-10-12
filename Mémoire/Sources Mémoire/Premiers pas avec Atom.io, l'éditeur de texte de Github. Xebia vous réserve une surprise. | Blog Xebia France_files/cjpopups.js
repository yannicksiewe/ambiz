jQuery(document).ready(function($) {

    $(window).load(function() {
        $('.cjpopup').each(function() {
            var click = $(this).attr('data-click');
            var popup = $(this);
            if (click === '') {
                show_popup(popup);
            } else {
                $(click).on('click', function() {
                    show_popup(popup);
                    return false;
                });
            }
        });
    });

    function show_popup(el) {
        $('body').addClass('cjpopup-on');
        var popid = el.attr('id');
        var bgcolor = el.attr('data-bgcolor');
        var textcolor = el.attr('data-textcolor');
        var linkcolor = el.attr('data-linkcolor');
        var delay = el.attr('data-delay');
        var padding = el.attr('data-padding');
        var width = el.attr('data-width');
        var animation_in = el.attr('data-animation-in');
        var animation_out = el.attr('data-animation-out');
        var cookie_expires = el.attr('data-cookie');
        var popuptype = el.attr('data-popup-type');
        var backdrop_id = el.attr('data-backdrop-id');
        var window_width = $(window).width();
        var onclick = el.attr('data-click');

        var cookie = getCookie(popid);

        if(cookie == 'hide'){
            return;
        }

        if (window_width < 1023) {
            width = 'auto';
        }

        el.css('width', width);

        el.css('background-color', bgcolor);
        el.css('color', textcolor);
        el.find('a.close-cjpopup').css('color', linkcolor);
        el.find('a.close-cjpopup').css('color', bgcolor);
        el.find('a.close-cjpopup span').css('color', textcolor);
        el.find('.popup-content').css('padding', padding);

        setTimeout(function() {
            $('#'+backdrop_id).removeClass('cjpopup-hidden');
            $('#'+backdrop_id).toggleClass('animated fadeIn');
        }, delay * 1000);

        setTimeout(function() {
            el.removeClass('cjpopup-hidden');
            if (popuptype == 'modal-box' && window_width > 1023) {
                var modal_margin_left = el.innerWidth() / 2 * -1;
                el.css('margin-left', modal_margin_left);
            }
            animate(el, animation_in);
            $('body').css('overflow', 'cjpopup-hidden');

        }, delay * 1000 + 500);


        el.find('a.close-cjpopup').on('click', function() {

            $('#'+backdrop_id).toggleClass('fadeIn fadeOut');

            animate(el, animation_out);
            $(el).removeClass(animation_in);

            setTimeout(function(){
                $('#'+backdrop_id).addClass('cjpopup-hidden');
                $('#'+backdrop_id).removeClass('animated fadeOut');
                $(el).addClass('cjpopup-hidden');
                $(el).removeClass(animation_out);
                $('body').css('overflow', 'auto');
                if(onclick === '' || onclick === null){
                    el.remove();
                    $('#'+backdrop_id).remove();
                    setCookie(popid, 'hide', cookie_expires);
                }
            }, 1000);

            return false;
        });
    }


    function animate(el, x) {
        $(el).removeClass('cjpopup-hidden');
        $(el).addClass('animated ' + x);
    }


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    }


});