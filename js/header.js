;(function($, window, document, undefined) {
	var $win = $(window);
  var $doc = $(document);
  var timer = 0;

	$(document).ready(function() {
    
    // $(window).on('onload resize', function(){
    //   if(window.innerWidth > 768) {
    //     console.log('mobile')
		// 	};
    // })

    // Responsive nav
    $('.evt-expandNav').on('click', function(evt){
      $('.header').toggleClass('expand');
    });

    $('.navitem a').on('click', function(evt){
      if($(evt.target).closest('a').attr('href')!=undefined){
        $('.header').toggleClass('expand');
      }
    });
    
		$('.dropdown-toggle').on('click', function(evt) {
			if($(evt.target).closest('a').attr('href')==undefined){
        $(evt.target).closest('.dropdown').toggleClass('expand');
        clearTimeout(timer);
        setTimeout(function(){
          $('.dropdown').removeClass('expand');
        },5000);
      }
    });
    

    //touch menu
    // $('.header.sidenav.expand').find('.navbar').on('swipe', function(){
    //   console.log('swipeleft')
    // })

    // $('.header.sidenav.expand .navbar').on('touchstart', function(e) {
    //   console.log('touchstart')
    //   var touch = e.originalEvent.touches[0];
    //   touchStart = touch.pageX;
    //   navwid = $(e.target).width() / 4; //swip length
    // });
    
    // $('.header.sidenav.expand.left .navbar').on('touchmove', function(e) {
    //   var touch = e.originalEvent.touches[0];
    //   var touchPos = touch.pageX;
    //   var $sel = $(e.target).closest('.navbar');
    //   if((touchStart - touchPos) >= navwid){
    //     $('.header').toggleClass('expand');
    //   }
    // });
    
    // $('.header.sidenav.expand.right .navbar').on('touchmove', function(e) {
    //   var touch = e.originalEvent.touches[0];
    //   var touchPos = touch.pageX;
    //   var $sel = $(e.target).closest('.navbar');
    //   if((touchStart - touchPos) <= navwid * -1){
    //     $('.header').toggleClass('expand');
    //   }
		// });

    // $('.navbar').bind('touchmove', function(e){
    //   e.preventDefault()
    //   console.log('touchmove')
    // });

    // jQuery('button').click(function(){
    //     jQuery('body').unbind('touchmove');
    //  });

	});

})(jQuery, window, document);