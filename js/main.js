$(document).ready(function() {

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(1000);
        } else {
            $('.ir-arriba').slideUp(1000);
        }
    });
});

$(function() {

    $('a[href*=#]').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({ scrollTop: targetOffset }, 1000);

                return false;

            }

        }

    });

});

$(function() {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.sideNav');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('display');
        nav.classList.toggle('sideNav-visible');
    });

});