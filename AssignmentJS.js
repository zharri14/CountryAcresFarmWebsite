$(document).ready(function() {
    $("#slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1000,
        slideMargin: 10,
        adaptiveHeight: true
    });
});

$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "content"
    });
} );

