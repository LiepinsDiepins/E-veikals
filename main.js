//STICKY HEADER
jQuery(function ($) {
    'use strict';

    const nav = $('.main-nav');
    const body = $('body');
    const navHeight = nav.outerHeight();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 320) {
            if (!nav.hasClass('sticky')) {
                nav.addClass('sticky');
                body.addClass('is-sticky').css('padding-top', navHeight);
            }
        } else {
            nav.removeClass('sticky');
            body.removeClass('is-sticky').css('padding-top', 0);
        }
    });

}(jQuery));

// SCROLL TOP BTN
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//SMOOTH SCROLLING
let currentSlide = 1;
const totalSlides = 3;

function rotateSlider() {
    currentSlide = currentSlide % totalSlides + 1;
    document.getElementById(`item-${currentSlide}`).checked = true;
}

setInterval(rotateSlider, 8000);

// Mobile filter funkcijas
function toggleMobileFilters() {
    const dropdown = document.querySelector('.mobile-filters-dropdown');
    const trigger = document.querySelector('.mobile-filter-trigger');
    const icon = trigger.querySelector('.fa-chevron-down');
    const textSpan = trigger.querySelector('span');
    
    dropdown.classList.toggle('active');
    
    if (dropdown.classList.contains('active')) {
        // Dropdown atvērts
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        textSpan.textContent = 'Aizvērt filtrus';
    } else {
        // Dropdown aizvērts
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        textSpan.textContent = 'Atvērt filtrus';
    }
}

function applyMobileFilters() {
    // Aizver dropdown
    const dropdown = document.querySelector('.mobile-filters-dropdown');
    const trigger = document.querySelector('.mobile-filter-trigger');
    const icon = trigger.querySelector('.fa-chevron-down');
    const textSpan = trigger.querySelector('span');
    
    dropdown.classList.remove('active');
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
    textSpan.textContent = 'Atvērt filtrus';
    
    // Te var likt filtru pielietošanas loģiku
    console.log('Filtri piemēroti!');
    
    // Vai alert, ja gribi
    // alert('Filtri piemēroti!');
}

// Aizver dropdown, ja klikšķina ārpus
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.mobile-filters-dropdown');
    const trigger = document.querySelector('.mobile-filter-trigger');
    
    if (!dropdown.contains(event.target) && !trigger.contains(event.target) && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        const icon = trigger.querySelector('.fa-chevron-down');
        const textSpan = trigger.querySelector('span');
        
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        textSpan.textContent = 'Atvērt filtrus';
    }
});

// Aizver ar Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const dropdown = document.querySelector('.mobile-filters-dropdown');
        const trigger = document.querySelector('.mobile-filter-trigger');
        
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            const icon = trigger.querySelector('.fa-chevron-down');
            const textSpan = trigger.querySelector('span');
            
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            textSpan.textContent = 'Atvērt filtrus';
        }
    }
});