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

function toggleCardBtn(button) {    // Cards com o "leia mais"
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

function toggleCard(cardHeader) {   // Cards com dropdown
    const card = cardHeader.parentElement;
    const fullText = card.querySelector('.full');
    const cardIcon = card.querySelector('i');
    const isVisible = fullText.style.display === 'block';


    if (isVisible) {
        fullText.style.display = 'none';
        cardIcon.className = "fa-solid fa-caret-down";
    } else {
        fullText.style.display = 'block';
        cardIcon.className = "fa-solid fa-caret-up";
    }
}

// Cria a NAV dinamicamente em todas as páginas
function dinamicNav(){
    const menuItems = [
        { href: './home.html', icon: 'fa-house-chimney', label: 'Home' },
        { href: './orgs.html', icon: 'fa-people-group', label: 'Organizações' },
        { href: './alunos.html', icon: 'fa-graduation-cap', label: 'Alunos' },
        { href: './instituicao.html', icon: 'fa-school', label: 'Instituição' },
        { href: './divulgacoes.html', icon: 'fa-bullhorn', label: 'Divulgações' },
        { href: './contato.html', icon: 'fa-address-book', label: 'Contato' }
    ];
    
    const menuContainer = document.getElementById('menu');
    
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.href}"><i class="fa-solid ${item.icon}"></i>&nbsp;${item.label}</a>`;
        menuContainer.appendChild(li);
    });
}
dinamicNav();



// Menu Hamburguer
const hamMenu = document.querySelector(".hamburger_menu");
const offScreenMenu = document.querySelector("nav");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
