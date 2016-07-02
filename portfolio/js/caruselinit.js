$(function() {
    $('.jcarousel')
        .jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 1000,
            target: '+=1',
            autostart: true
        })
    ;
    
    
    
$('.jcarousel .left').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
});

$('.jcarousel .right').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
});
    
    
});


