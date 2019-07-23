// $(function() {
//     $(".flexslider").flexslider({
// 		slideshowSpeed: 5000, 
// 		animationSpeed: 500, 
// 		touch: true 
// 	});
// });	
$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
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