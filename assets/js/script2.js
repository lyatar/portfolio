// script for other pages

// $(document).ready(function() {
// 	$('#fullpage').fullpage();
// });

// script for from page

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage','4thPage',
        '5thPage','6thPage','7thPage'],
        // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        // verticalCentered: false,
        navigation: false,
        navigationPosition: 'right',
        // navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        responsiveWidth: 900,
        afterResponsive: function(isResponsive){
        },
        css3: true,
        paddingTop: 70,
        autoScrolling: false,
        fitToSection: false


    });

    // big button hover overs
    $('.big-button a').mouseover(function(){
        $(this).css({
            '-webkit-box-shadow' : '5px 5px 5px 0px rgba(224,224,224,1)',
            '-moz-box-shadow' : '5px 5px 5px 0px rgba(224,224,224,1)',
            'box-shadow': '5px 5px 5px 0px rgba(224,224,224,1)'})
            .css({ opacity: 0.5 });
    });

    $('.big-button a').mouseout(function(){
        $(this).css({
            '-webkit-box-shadow' : '1px 2px 1px 0px rgba(224,224,224,1)',
            '-moz-box-shadow' : '1px 2px 1px 0px rgba(224,224,224,1)',
            'box-shadow': '1px 2px 1px 0px rgba(224,224,224,1)'})
            .css({ opacity: 1 });
    });

});
