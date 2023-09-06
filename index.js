
   
      $(document).on('click', '.product-reviews-badge a', function(){
        $('html, body').stop().animate({
            scrollTop: $('#looxReviews').offset().top - 175
             }, 600 );
          
      })

      
      $('.back-to-top a').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
