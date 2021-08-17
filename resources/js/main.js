window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    // For Sticky Menu
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
  if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top
           }, 800, function(){
           window.location.hash = hash;
        });
  }
});