let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let header = document.getElementById('start-header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.bottom = value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    header.style.top = value * 0.5 + 'px';
})