console.log("Hello World");
// Slider 

const slider = document.querySelector('.slider')
const slides = slider.querySelectorAll('li')

console.log(slides);

// storing total number of images 
const slideCount = slides.length;
let activeSlide = 0;

// Setinterval for changing images dynamically after some time 

setInterval(() => {
    slides[activeSlide].classList.remove('active');
    activeSlide++;

    if (activeSlide === slideCount) {
        activeSlide = 0;
    }
    slides[activeSlide].classList.add('active');
}, 5000);