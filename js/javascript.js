(function () {

    // Get the modal
    var modal = document.getElementById('modal_1');
    var modal2 = document.getElementById('modal_2');
    var modal3 = document.getElementById('modal_3');
    var modal4 = document.getElementById('modal_4');
    var modal5 = document.getElementById('modal_5');
    var modal6 = document.getElementById('modal_6');
    var modal7 = document.getElementById('modal_7');
    var modal8 = document.getElementById('modal_8');
    var modal9 = document.getElementById('modal_9');

    // Get the button that opens the modal
    var image = document.getElementById("modal1");
    var image2 = document.getElementById("modal2");
    var image3 = document.getElementById("modal3");
    var image4 = document.getElementById("modal4");
    var image5 = document.getElementById("modal5");
    var image6 = document.getElementById("modal6");
    var image7 = document.getElementById("modal7");
    var image8 = document.getElementById("modal8");
    var image9 = document.getElementById("modal9");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    // When the user clicks the button, open the modal
    image.onclick = function () {
        modal.style.display = "block"; //opens modal

    };
    image2.onclick = function () {
        modal2.style.display = "block"; //opens modal

    };
    image3.onclick = function () {
        modal3.style.display = "block"; //opens modal

    };
    image4.onclick = function () {
        modal4.style.display = "block"; //opens modal

    };
    image5.onclick = function () {
        modal5.style.display = "block"; //opens modal

    };
    image6.onclick = function () {
        modal6.style.display = "block"; //opens modal

    };
    image7.onclick = function () {
        modal7.style.display = "block"; //opens modal

    };
    image8.onclick = function () {
        modal8.style.display = "block"; //opens modal

    };
    image9.onclick = function () {
        modal9.style.display = "block"; //opens modal

    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none"; //hides modal

    };

    span.onclick = function () {
        modal2.style.display = "none"; //hides modal

    };


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4
        || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8
        || event.target == modal9) {
            modal.style.display = "none"; //hides modal
            image.style.display = "block"//shows button
            modal2.style.display = "none"; //hides modal
            image2.style.display = "block"//shows button
            modal3.style.display = "none"; //hides modal
            image3.style.display = "block"//shows button
            modal4.style.display = "none"; //hides modal
            image4.style.display = "block"//shows button
            modal5.style.display = "none"; //hides modal
            image5.style.display = "block"//shows button
            modal6.style.display = "none"; //hides modal
            image6.style.display = "block"//shows button
            modal7.style.display = "none"; //hides modal
            image7.style.display = "block"//shows button
            modal8.style.display = "none"; //hides modal
            image8.style.display = "block"//shows button
            modal9.style.display = "none"; //hides modal
            image9.style.display = "block"//shows button
        }
    }


}());

$(document).ready(function () {

    $(".button-dark").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();


            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {


                window.location.hash = hash;
            });
        }
    });
});


function initMap() {
    var Ll = {lat: 52.629192, lng: -1.140291};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: Ll
    });
    var marker = new google.maps.Marker({
        position: Ll,
        map: map
    });
}