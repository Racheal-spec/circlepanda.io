$(window).scroll(function(e){ 
  var $el = $('.sub-nav'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
    $(".mini-logo").removeClass('hide');
  }
  if ($(this).scrollTop() < 200 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
    $(".mini-logo").addClass('hide');
  } 
});