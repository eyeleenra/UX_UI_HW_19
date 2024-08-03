$(document).ready(function() {
    $('.scroll-down-arrow img').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
    });
});

console.log('JavaScript file loaded correctly.');
