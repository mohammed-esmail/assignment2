(function () {

    // Get the modal
    var modal = document.getElementById('modal_1');
    var modal2 = document.getElementById('modal_2');
    var modal3 = document.getElementById('modal_3');
    var modal4 = document.getElementById('modal_4');
    var modal5 = document.getElementById('modal_5');
    var modal6 = document.getElementById('modal_6');

    // Get the button that opens the modal
    var image = document.getElementById("modal1");
    var image2 = document.getElementById("modal2");
    var image3 = document.getElementById("modal3");
    var image4 = document.getElementById("modal4");
    var image5 = document.getElementById("modal5");
    var image6 = document.getElementById("modal6");


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[0];
    var span3 = document.getElementsByClassName("close")[0];
    var span4 = document.getElementsByClassName("close")[0];
    var span5 = document.getElementsByClassName("close")[0];
    var span6 = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    image.onclick = function () {
        modal.style.display = "block"; //opens modal

    }
    image2.onclick = function () {
        modal2.style.display = "block"; //opens modal

    }
    image3.onclick = function () {
        modal3.style.display = "block"; //opens modal

    }
    image4.onclick = function () {
        modal4.style.display = "block"; //opens modal

    }
    image5.onclick = function () {
        modal5.style.display = "block"; //opens modal

    }
    image6.onclick = function () {
        modal6.style.display = "block"; //opens modal

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none"; //hides modal

    }
    span2.onclick = function () {
        modal2.style.display = "none"; //hides modal

    }
    span3.onclick = function () {
        modal3.style.display = "none"; //hides modal

    }
    span4.onclick = function () {
        modal4.style.display = "none"; //hides modal

    }
    span5.onclick = function () {
        modal5.style.display = "none"; //hides modal

    }
    span6.onclick = function () {
        modal6.style.display = "none"; //hides modal

    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4
        || event.target == modal5 || event.target == modal6) {
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
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });
});