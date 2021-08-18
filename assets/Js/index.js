// owl carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 850,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

// Hamberger Navigation
const Hamberger = document.querySelector('.navigation'),
    navtogglerbtn = document.querySelector('.nav-toggler');
navtogglerbtn.addEventListener('click', popuptoggler);

function popuptoggler() {
    navtogglerbtn.classList.toggle('open');
    $('.navigation').slideToggle(300);
}