let slideIndex = 0;

function moverCarrossel(n) {
    const carrossel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalCards = slides.length;

    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = totalCards - 1;
    } else if (slideIndex >= totalCards) {
        slideIndex = 0;
    }

    carrossel.style.transform = `translateX(${-slideIndex * 100}%)`;
}

    function toggleCard(button) {
        const card = button.parentElement;
        const fullText = card.querySelector('.full');
        const isVisible = fullText.style.display === 'block';
    
        if (isVisible) {
            fullText.style.display = 'none';
            button.textContent = 'Leia Mais';
        } else {
            fullText.style.display = 'block';
            button.textContent = 'Mostrar Menos';
        }
    }
    
    function toggleCard(cardHeader) {
        const card = cardHeader.parentElement;
        const fullText = card.querySelector('.full');
        const isVisible = fullText.style.display === 'block';
    
        if (isVisible) {
            fullText.style.display = 'none';
        } else {
            fullText.style.display = 'block';
        }
    }
    

    



// Menu Hamburguer
const hamMenu = document.querySelector(".hamburger_menu");
const offScreenMenu = document.querySelector("nav");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
