function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Cambiar de imagen automáticamente cada 5 segundos
setInterval(nextSlide, 5000);

// Mostrar la primera diapositiva
showSlide(currentSlide);

// script.js
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}