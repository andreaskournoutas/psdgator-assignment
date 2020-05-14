$('.mobile-header__menu-button').click(function() {
    openOffCanvas();
});

$('.mobile-menu__close-button').click(function() {
	closeOffCanvas();
});

$('.dark-layer').click(function() {
	closeOffCanvas();
});

function openOffCanvas() {
    $('body').addClass('no-scroll');
    $('.dark-layer').addClass('dark-layer--active');
    $('.mobile-menu').addClass('mobile-menu--open');
}

function closeOffCanvas() {
    $('.mobile-menu').removeClass('mobile-menu--open');
    $('.dark-layer').removeClass('dark-layer--active');
    $('body').removeClass('no-scroll');
}