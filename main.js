jQuery(function ($) {
    'use strict';

    const nav = $('.main-nav');
    const body = $('body');
    const navHeight = nav.outerHeight();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 320) {
            if (!nav.hasClass('sticky')) {
                nav.addClass('sticky');
                body.addClass('is-sticky').css('padding-top', navHeight);
            }
        } else {
            nav.removeClass('sticky');
            body.removeClass('is-sticky').css('padding-top', 0);
        }
    });

}(jQuery));