import './style.css'
import './public/js/fontawesome/all.min.js'
import './public/css/fontawesome/all.min.css'
import anime from 'animejs';

const zeroPad = (num, places) => String(num).padStart(places, '0')

const countDownDate = new Date("June 11, 2024 19:11:00").getTime();

const getDateDistances = date => {
    let distance = countDownDate - date;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { distance, days, hours, minutes, seconds };
}

const setCountDownDisplay = (days, hours, minutes, seconds) => {
    document.getElementById("countdown-days").innerHTML = zeroPad(days, 2);
    document.getElementById("countdown-hours").innerHTML = zeroPad(hours, 2);
    document.getElementById("countdown-minutes").innerHTML = zeroPad(minutes, 2);
    document.getElementById("countdown-seconds").innerHTML = zeroPad(seconds, 2);
}

let x = setInterval(function() {

    let now = new Date().getTime();

    let { distance, days, hours, minutes, seconds } = getDateDistances(now);

    setCountDownDisplay(days, hours, minutes, seconds);

    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

anime({
    targets: '#section-one-top-flower',
    keyframes: [
        {translateX: -80, translateY: -80, opacity: 0},
        {translateX: 0, translateY: 0, opacity: .7},
    ],
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    // delay: 1000,
});

anime({
    targets: '#section-one-bottom-flower',
    keyframes: [
        {translateX: 80, translateY: 80, opacity: 0},
        {translateX: 0, translateY: 0, opacity: .7},
    ],
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    // delay: 1000,
});

anime({
    targets: '#section-one-center-flower',
    keyframes: [
        {scale: .4, opacity: 0, rotate: 0},
        {scale: 1, opacity: .7, rotate: 90},
    ],
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    // delay: 1000,
});

let isMenuOpen = false;

const animateOpenMenu = e => {
    anime({
        targets: '.sub-menu',
        translateX: 0,
        opacity: 1,
        scale: 1,
        delay: function(el, i, l) {
            return i * 100;
        },
        endDelay: function(el, i, l) {
            return (l - i) * 100;
        }
    });      
}

const animateCloseMenu = e => {
    anime({
        targets: '.sub-menu',
        translateX: 56,
        opacity: 0,
        scale: .2,
        delay: function(el, i, l) {
            return i * 75;
        },
        endDelay: function(el, i, l) {
            return (l - i) * 75;
        }
    });      
}

const openMenuButton = document.getElementById('open-menu-button');

openMenuButton.addEventListener('click', e => {
    !isMenuOpen ? animateOpenMenu() : animateCloseMenu();
    isMenuOpen = !isMenuOpen;
});