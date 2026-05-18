const slides = document.querySelector('.destaques-slides');
const prevBtn = document.querySelector('.seta-esquerda');
const nextBtn = document.querySelector('.seta-direita');
const dots = document.querySelectorAll('.dot');

let index = 0;
const totalSlides = slides.children.length;

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
});

// Clique nos pontos
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlide();
    });
});

// Inicializa
updateSlide();
