/* land page animation */
const headerImage = document.querySelector('.header__image');
const slider = document.querySelector('.u-header-slider');

const timeline = new TimelineMax();

timeline.fromTo(
  headerImage, 
  1, 
  {height: "0%"}, 
  {height: "80%", ease: Power2.easeInOut}
  ).fromTo(
  headerImage, 
  1.2, 
  {width: "100%"}, 
  {width: "80%", ease: Power2.easeInOut}
  ).fromTo(
  slider, 
  1.2, 
  {x: "-100%"}, 
  {x: "0%", ease: Power2.easeInOut},
  "-=1.2");

/* hanmburger */
const navSlide = () => {
  const burger = document.querySelector('.nav__hamburger');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');
  // Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav__active');

  // Animate links
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .6}s`;
    }
  });

  // hamburger animation
  burger.classList.toggle('toggle');

  });
}

navSlide();

