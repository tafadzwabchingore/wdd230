//home-nav.js
const hamburgerElement = document.querySelector("#myBtn");
const navElement = document.querySelector(".menu-dirrectory");

hamburgerElement.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});