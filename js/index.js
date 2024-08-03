$(document).ready(function() {
    $('.scroll-down-arrow img').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000); // Adjust the duration (in milliseconds) as needed
    });
});

console.log('JavaScript file loaded correctly.');
