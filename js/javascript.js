
(function(){

// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function OpenModal() {
modal.style.display = "block";

return false;
}

btn.addEventListener("click", OpenModal);


}());

$(document).ready(function(){

  $(".button-dark").on('click', function(event) {


    if (this.hash !== "") {
     
      event.preventDefault();


      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        
        window.location.hash = hash;
      });
    } 
  });
});
