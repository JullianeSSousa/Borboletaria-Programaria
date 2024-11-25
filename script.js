// O efeito da foto passar para o lado não funciona!!

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    const carroselContainer = document.querySelector('.slides');
    carroselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;


    // Muda de slide a cada 3 segundos
// Muda de slide a cada 3 segundossetInterval(() => {
   // Muda de slide a cada 3 segundos moveSlide(-1);
// Muda de slide a cada 3 segundos}, 6000); } // Muda de slide a cada 3 segundo
}