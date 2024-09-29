let slideIndex = 0;

function moverCarrossel(n) {
    const carrossel = document.querySelector('.carrossel');
    const cards = document.querySelectorAll('.carrossel .card');
    const totalCards = cards.length;

    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = totalCards - 1;
    } else if (slideIndex >= totalCards) {
        slideIndex = 0;
    }

    carrossel.style.transform = `translateX(${-slideIndex * 100}%)`;
}
