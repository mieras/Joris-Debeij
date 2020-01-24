// import barba from '@barba/core';
// import barbaCss from '@barba/css';

// // tell Barba to use the css module
// barba.use(barbaCss);

// // init Barba
// barba.init();

var slideUp = {
    distance: '20%',
    origin: 'bottom',
    opacity: null,
    scale: 1.25,
    opacity: 0
};

ScrollReveal().reveal('.project', slideUp, );

ScrollReveal().reveal('.project', {
    delay: 375,
    duration: 700,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    scale: 1
});