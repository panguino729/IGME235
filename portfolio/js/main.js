"use strict"

// -----CAROUSEL-----

// Activate Carousel with a specified interval
$("#portfolio").carousel({ interval: 7000, pause: "hover", keyboard: true });

// Enable Carousel Indicators
$(".project0").click(function () {
    $("#portfolio").carousel(0);
});
$(".project1").click(function () {
    $("#portfolio").carousel(1);
});
$(".project2").click(function () {
    $("#portfolio").carousel(2);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function () {
    $("#portfolio").carousel("prev");
});

$(".carousel-control-next").click(function () {
    $("#portfolio").carousel("next");
});

// -----SCROLLING-----

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
let navbar = document.querySelector("#navigationBar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Add scrollspy to <body>
$('body').scrollspy({ target: ".navbar", offset: 50 });

// Add smooth scrolling on all links inside the navbar
$("#navigationBar a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    }
});
