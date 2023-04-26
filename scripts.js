// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".hamburger-button").click(function(){
        $(".mobile-menu").slideToggle(300);
        $(this).toggleClass("active");
        if($(".hamburger-button").hasClass("active")){
      
        $(".hamburger-button").html('<i class="fa-solid fa-xmark"></i>');
      
        } else {
      
          $(".hamburger-button").html('<i class="fa-solid fa-bars"></i>');
      
        }
      });

    //   Animate on Scroll
    AOS.init({
        duration: 500 // values from 0 to 3000, with step 50ms
    });
});

// Lightgallery script
lightGallery(document.getElementById('lightgallery'), {
    speed: 300,
    download: false
});