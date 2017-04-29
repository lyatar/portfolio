$(document).ready(function() {
    console.log('Incase anyone inspects this, this portfolio is still a work in progress and the layout and functionality are still likeley to change! Please excuse the mess! But I would enjoy any advice on how to make this website better and cleaner! And how to better structure my code!');

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  setTimeout(function() {
      $('body').addClass('no-scroll');
  }, 300);

  $("#sidebar-button").click(function(){
      if($('.sidebar-container').hasClass('sidebar-active')){
          $('body').removeClass('no-scroll');
        //   $('#sidebar-button').removeClass('button-active');
          $('.sidebar-container').removeClass('sidebar-active');
          $('.page-wrapper').removeClass('wrapper-active');
          $('.toggle-container').removeClass('toggle-active');
      }
      else {
          $('body').addClass('no-scroll');
        //   $('#sidebar-button').addClass('button-active');
          $('.sidebar-container').addClass('sidebar-active');
          $('.page-wrapper').addClass('wrapper-active');
          $('.toggle-container').addClass('toggle-active');

}
  });

  //close button

  $("#close-icon").click(function(){
      $('body').removeClass('no-scroll');
    //   $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
      $('.toggle-container').removeClass('toggle-active');
      console.log('closed');
  });


  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $('.page-wrapper').click(function(){
      if($('.page-wrapper').hasClass('wrapper-active')) {
          $('body').removeClass('no-scroll');
        //   $('#sidebar-button').removeClass('button-active');
          $('.sidebar-container').removeClass('sidebar-active');
          $('.page-wrapper').removeClass('wrapper-active');
          $('.toggle-container').removeClass('toggle-active');
      }
  });


// big button hover overs
$('.big-button a').mouseover(function(){
    $(this).css({
        '-webkit-box-shadow' : '5px 5px 5px 0px rgba(224,224,224,1)',
        '-moz-box-shadow' : '5px 5px 5px 0px rgba(224,224,224,1)',
        'box-shadow': '5px 5px 5px 0px rgba(224,224,224,1)'});
});

$('.big-button a').mouseout(function(){
    $(this).css({
        '-webkit-box-shadow' : '1px 2px 1px 0px rgba(224,224,224,1)',
        '-moz-box-shadow' : '1px 2px 1px 0px rgba(224,224,224,1)',
        'box-shadow': '1px 2px 1px 0px rgba(224,224,224,1)'});
});




// Smooth Scroll
  $(".sidebar-container a").click(function(){
      $('body').removeClass('no-scroll');
      console.log('no scroll');
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href')).offset().top - 60
      }, 300, function(){
              $('#sidebar-button').removeClass('button-active');
              $('.sidebar-container').removeClass('sidebar-active');
              $('.page-wrapper').removeClass('wrapper-active');
              $('.toggle-container').removeClass('toggle-active');
              console.log('eh');
              return false;

        });
  });








// change to a smaller nav bar and back to top

    $(function () {
          $(document).scroll(function () {
            if ($(this).scrollTop() >  50) {
                $('#logo img').css("width", "75px");
                // $('#logo').css('text-align', 'right');
                $('#back-to-top').show();
            } else {
                $('#logo img').css("width", "125px");
                $('#logo').css('text-align', 'center');
                $('#back-to-top').hide();
            }

            console.log('ran');
          });
        });




});
