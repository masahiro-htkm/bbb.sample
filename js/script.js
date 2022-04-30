$('.toggle-menu').click(function() {
    $('nav').toggleClass('open');
    $('span').toggleClass('open');
})


$('.inview-fade-left').on('inview', function(event, isInView) {
    if(isInView) {
        $(this).addClass('fade-left');
    }
});
$('.inview-fade-right').on('inview', function(event, isInView) {
    if(isInView) {
        $(this).addClass('fade-right');
    }
});
$('.voice-item').on('inview', function(event, isInView) {
    if(isInView) {
        $(this).addClass('scale');
    }
});
