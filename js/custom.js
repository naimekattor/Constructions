
    //for Isotope-filter-image--

      $('.items-wrapper').isotope({
  itemSelector: '.item',
  filter: "*"
});

$('.menu li').click(function(){
  var selector = $(this).attr('data-filter');
  
  $('.items-wrapper').isotope({
    filter: selector,
  })
  
  //changing active class with click event
  $('.menu li.active').removeClass('active');
  $(this).addClass('active');
});




      //for dropdown faq


       jQuery( document ).ready(function( $ ) {
  
  var question = $('.nAccordian .question');
  var answer = $('.nAccordian .answer');
  
 $(question).click(function(){
    $(answer).slideUp();
    $(this).next().slideToggle('fast');
    $('.one').click(function(){
    $('.one').addClass("active");
  });
    $('.two').click(function(){
    $('.two').addClass("active");
  });
    $('.three').click(function(){
    $('.three').addClass("active");
  });
    $('.four').click(function(){
    $('.four').addClass("active");
  });
    $('.five').click(function(){
    $('.five').addClass("active");
  });
    $('.six').click(function(){
    $('.six').addClass("active");
  });
    
  });
   
});