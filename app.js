/* land page animation */
const homePageImage = document.querySelector('.home-page-image');
const slider = document.querySelector('.slider');
const header = document.querySelector('header');

const timeline = new TimelineMax();

timeline.fromTo(
  homePageImage, 
  1, 
  {height: "0%"}, 
  {height: "80%", ease: Power2.easeInOut}
  ).fromTo(
  homePageImage, 
  1.2, 
  {width: "100%"}, 
  {width: "80%", ease: Power2.easeInOut}
  ).fromTo(
  slider, 
  1.2, 
  {x: "-100%"}, 
  {x: "0%", ease: Power2.easeInOut},
  "-=1.2").fromTo(
  header,
  1.2,
  {x: "-100%"}, 
  {x: "0%", ease: Power2.easeInOut},
  "-=1.2"
)

/* navbar */
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  "linear-gradient(to left, #f5b641, #f7e1b2)",
  "linear-gradient(to left, #00c3ff, #ffff1c)",
  "linear-gradient(to left, #348f50, #56b4d3)"
]; 

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page = ${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if(entry.isIntersecting){
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`); 
      bubble.style.background = gradients[gradientIndex];
    }
  })
}

sections.forEach(section => {
  observer.observe(section);
})



