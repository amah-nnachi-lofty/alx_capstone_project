/**
 * Script to enhance the user experience by implementing various interactive features: 
    including a sticky navigation bar, a scroll-up button, smooth scrolling for menu items, 
    a toggle menu functionality, and dynamic typing text animations and carousel functionality
 * Document Ready Event Handler
 * Executes the following scripts after the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Select DOM elements
    var navbar = document.querySelector('.navbar');
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    var menuItems = document.querySelectorAll('.navbar .menu li a');
    var menuBtn = document.querySelector('.menu-btn');

    /**
     * Scroll Event Listener
     * Handles sticky navbar and scroll-up button visibility.
     */
    window.addEventListener('scroll', function() {
        // sticky navbar on scroll script
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // scroll-up button show/hide script
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    /**
     * Scroll Up Button Click Event Listener
     * Scrolls the window to the top with smooth behavior on button click.
     */
    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = 'auto';
    });

    /**
     * Menu Items Click Event Listeners
     * Applies smooth scroll behavior on menu items click.
     */
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            document.documentElement.style.scrollBehavior = 'smooth';
        });
    });

    /**
     * Menu Button Click Event Listener
     * Toggles active class for menu items and menu button icon.
     */
    menuBtn.addEventListener('click', function() {
        document.querySelector('.navbar .menu').classList.toggle("active");
        menuBtn.querySelector('i').classList.toggle("active");
    });

    // typing text animation
    var options = {
        strings: ["Researcher", "Software engineer", "Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    
    var typed = new Typed(".typing", options);
    var typed2 = new Typed(".typing-2", options);

    // owl carousel script
    var owl = $('.carousel');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
