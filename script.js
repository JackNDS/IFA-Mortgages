var red = document.getElementById('menu');
const nav = document.querySelector('.overlay-nav-main-wrap');
const topcontainer = document.querySelector('.top-container');
const burger = document.querySelector('.hamburger');

    menu.addEventListener('click', menuActive);

    function menuActive(){
        nav.classList.toggle('nav-open');
        topcontainer.classList.toggle('nav-open');
        burger.classList.toggle('open');

    };

const background = document.querySelectorAll('.background');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextBg = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current')
  // Check for next background
  if(current.nextElementSibling) {
    //Add current to next sibling
    current.nextElementSibling.classList.add('current');
  }
  else {
    // Add current to start
    background[0].classList.add('current');
  }
}

const prevBg = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current')
  // Check for prev background
  if(current.previousElementSibling) {
    //Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  }
  else {
    // Add current to last
    background[background.length - 1].classList.add('current');
  }
}

// Button Events
next.addEventListener('click', e => {
  nextBg();
})
prev.addEventListener('click', e => {
  prevBg();
})