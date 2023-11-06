const sliderContainer = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slider-item');
const slideWidth = slides[0].offsetWidth + 84; 
let currentIndex = 0;

function scrollSlides() {
    currentIndex++;
    const translateValue = -currentIndex * slideWidth;
    sliderContainer.style.transition = 'transform 1s ease-in-out';
    sliderContainer.style.transform = `translateX(${translateValue}px)`;

    setTimeout(() => {
        if (currentIndex >= slides.length) {
            currentIndex = 0;
            sliderContainer.style.transition = 'none';
            sliderContainer.style.transform = 'translateX(0)';
        }
    }, 1000);
}

setInterval(scrollSlides, 5000);
