const slides = [
    '<div class="shedule__carousel-slides"><article class="info__carousel"><h5 сlass="shedule__day">Monday</h5><h3>July 09</h3><h4>11.30 AM - 4.30 PM</h4><p>• Port Jasen •</p><p>7432 Kay Tunnel</p><a href="#top">Get Directions</a></article></div>',
    '<div class="shedule__carousel-slides"><article class="info__carousel"><h5 сlass="shedule__day">Tuesday</h5><h3>July 10</h3><h4>1.30 PM - 6.30 PM</h4><p>• East Richard •</p><p>383 Gibson Loaf</p><a href="#top">Get Directions</a></article></div>',
    '<div class="shedule__carousel-slides"><article class="info__carousel"><h5 сlass="shedule__day">Wednesday</h5><h3>July 11</h3><h4>11.30 AM - 3.30 PM</h4><p>• West Darienport •</p><p>195 Will Curve</p><a href="#top">Get Directions</a></article></div>',
    '<div class="shedule__carousel-slides"><article class="info__carousel"><h5 сlass="shedule__day">Thursday</h5><h3>July 12</h3><h4>1.30 PM - 4.30 PM</h4><p>• Culver City •</p><p>NPR 9909 Jefferson Blvd</p><a href="#top">Get Directions</a></article></div>',
    '<div class="shedule__carousel-slides"><article class="info__carousel"><h5 сlass="shedule__day">Friday</h5><h3>July 13</h3><h4>11.30 AM - 6.30 PM</h4><p>• Universal •</p><p>Lankershim Blvd. 91604</p><a href="#top">Get Directions</a></article></div>',
    '<div class="shedule__carousel-slides"><article class="info__carousel"><h5 сlass="shedule__day">Saturday - Sunday</h5><h3>July 14</h3><h4>Catering Only</h4><a href="/contacts-page.html">Learn More</a></article></div>'

];
let slideIdx = 0;

const slideContainer = document.querySelector('.schedule-carousel');

function renderSlide() {
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 980px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}

function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    renderSlide();
}
const btnNext = document.querySelector('.shedule-carousel__button--next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.shedule-carousel__button-prev');
btnPrev.addEventListener('click', prevSlide);

renderSlide();

window.addEventListener('resize', renderSlide);