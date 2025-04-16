$(document).ready(function(){
  $("img").click(function(){
    $(this).animate({
      height: '+=20px',
      width: '+=20px'
    });
  });
});