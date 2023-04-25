// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".hamburger-button").click(function(){
        $(".mobile-menu").slideToggle(300);
        $(this).toggleClass("active");
        if($(".hamburger-button").hasClass("active")){
      
        $(".hamburger-button").html("&#10006;");
      
        } else {
      
          $(".hamburger-button").html("&#9776;");
      
        }
      });

    //   Animate on Scroll
    AOS.init({
        duration: 500 // values from 0 to 3000, with step 50ms
    });
});