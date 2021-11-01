'use strict';

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menuNav = document.querySelector('.navbar ul');

menuBtn.addEventListener('click', function (e) {
    hamburger.classList.toggle('open');
    menuNav.classList.toggle('open');
})

document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('menu-btn') &&
    !e.target.classList.contains('menu-btn__burger') &&
    !e.target.classList.contains('open')) {
        hamburger.classList.remove('open');
        menuNav.classList.remove('open');
    }
})