$(function() {
    $(".flexslider").flexslider({
		slideshowSpeed: 5000, 
		animationSpeed: 500, 
		touch: true 
	});
});	
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
 $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(window).scrollTop() > 10) { 
          $('.navbar').css('background-color','#2196f3');
          $('.back-to-top').css('opacity','.5');
      } else {
          $('.navbar').css('background-color','transparent');
          $('.back-to-top').css('opacity','0');
      }
    });