let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const descriptions = [document.getElementById('desc1'), document.getElementById('desc2'), document.getElementById('desc3')];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    descriptions.forEach((desc, i) => {
        desc.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
