$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 445) {
        $(".header").removeClass("sticky-active");
    } else {
        $(".header").addClass("sticky-active");
    }
}); 

$("#staticBackdrop").on('hidden.bs.modal', function (e) {
    $("#staticBackdrop iframe").attr("src", $("#staticBackdrop iframe").attr("src"));
});

 /*========================================== slicknav ==========================================*/

 (function ($) {
    "use strict";
    var PUS = {};
       
        PUS.slicknav = function () {
            $("#main-menu").slicknav({
                allowParentLinks: true,
                prependTo: '#mobile-menu-wrap',
                label: '',
            });

            $(".mobile-menu-trigger").on("click", function(e) {
                $(".mobile-menu-container").addClass("menu-open");
                e.stopPropagation();
            });

            $(".mobile-menu-close").on("click", function(e) {
                $(".mobile-menu-container").removeClass("menu-open");
                e.stopPropagation();
            });  
        };
        $(document).ready(function () {
            PUS.slicknav();
        });
    })(jQuery);

/*========================================== slicknav ==========================================*/




  // ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});




 

  

  

//   menu open js

 $(document).on('classAdded', '.mobile-menu-container ', function(event, className) {
    if(className == "menu-open") { 
        $(".header").addClass("menu-height");
     }
});
$(document).on('classRemoved', '.mobile-menu-container ', function(event, className) {
    if(className == "menu-open") { 
        $(".header").removeClass("menu-height");
     }
});








(function( func ) {
    $.fn.addClass = function(n) { // replace the existing function on $.fn
        this.each(function(i) { // for each element in the collection
            var $this = $(this); // 'this' is DOM element in this context
            var prevClasses = this.getAttribute('class'); // note its original classes
            var classNames = $.isFunction(n) ? n(i, prevClasses) : n.toString(); // retain function-type argument support
            $.each(classNames.split(/\s+/), function(index, className) { // allow for multiple classes being added
                if( !$this.hasClass(className) ) { // only when the class is not already present
                    func.call( $this, className ); // invoke the original function to add the class
                    $this.trigger('classAdded', className); // trigger a classAdded event
                }
            });
            if( prevClasses != this.getAttribute('class') ) $this.trigger('classChanged'); // trigger the classChanged event
        });
        return this; // retain jQuery chainability
    }
})($.fn.addClass); // pass the original function as an argument

(function( func ) {
    $.fn.removeClass = function(n) {
        this.each(function(i) {
            var $this = $(this);
            var prevClasses = this.getAttribute('class');
            var classNames = $.isFunction(n) ? n(i, prevClasses) : n.toString();
            $.each(classNames.split(/\s+/), function(index, className) {
                if( $this.hasClass(className) ) {
                    func.call( $this, className );
                    $this.trigger('classRemoved', className);
                }
            });
            if( prevClasses != this.getAttribute('class') ) $this.trigger('classChanged');
        });
        return this;
    }
})($.fn.removeClass);


