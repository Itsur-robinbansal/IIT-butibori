
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check localStorage for saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save theme preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});


$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').on('click', function (e) {
        $('[data-toggle="popover"]').not(this).popover('hide');
    });
});

window.onscroll = function () {
    const navbar = document.getElementById('navbar');
    const scrollPos = window.scrollY;

    if (scrollPos > 100) { // Change 100 to the desired scroll position to trigger the fixed navbar
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
};
