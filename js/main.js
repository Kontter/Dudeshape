$('.header-burger').click(function(event) {
    $('.header-burger,.header-menu,.header-first').toggleClass('active');
    $('body').toggleClass('lock');
});