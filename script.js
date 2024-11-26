

// // Seleciona os elementos principais
// var prevButton = document.querySelector('.prev');
// var nextButton = document.querySelector('.next');
// var cardsContainer = document.querySelector('.acervo-container');

// // Define a largura de cada cartão (ajuste se necessário)
// var cardWidth = 200; // Altere conforme o tamanho do cartão no CSS
// var scrollAmount = cardWidth + 16; // Inclua a margem/padding se houver

// // Função para rolar para a esquerda
// // prevButton.addEventListener('click', () => {
// //     cardsContainer.scrollBy({
// //         left: -scrollAmount, // Rolar para a esquerda
// //         behavior: 'smooth' // Animação suave
// //     });
// // });

// // Função para rolar para a direita
// // nextButton.addEventListener('click', () => {
// //     cardsContainer.scrollBy({
// //         left: scrollAmount, // Rolar para a direita
// //         behavior: 'smooth' // Animação suave
// //     });
// // });

// // Opção extra: Desativar os botões se não for possível rolar mais
// var updateArrows = () => {
//     const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;

//     prevButton.disabled = cardsContainer.scrollLeft <= 0;
//     nextButton.disabled = cardsContainer.scrollLeft >= maxScrollLeft;
// };

// // Atualiza os botões ao carregar a página e após rolar
// cardsContainer.addEventListener('scroll', updateArrows);
// window.addEventListener('load', updateArrows);



var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


var slideIndexAuthor = 1;

function plusAuthors(n) {
    showSlides(slideIndexAuthor += n);

}

function showSlidesAuthor(n) {
    var i;
    var slides = document.getElementsByClassName("authors");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}



var currentIndex = 0; // Índice inicial
var itemsPerSlide = 8; // Número de itens a serem exibidos por vez
var items = document.querySelectorAll('.acervo-cards .card'); // Seleciona todos os itens (autores)

// Função para mostrar os itens do carousel
function showAuthors() {
    // Oculta todos os itens
    items.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsPerSlide) {
            item.style.display = "block"; // Exibe o item dentro da faixa de itens a serem mostrados
        } else {
            item.style.display = "none"; // Oculta os itens fora da faixa
        }
    });

    // Desabilita o botão "prev" se estiver no início
    if (currentIndex === 0) {
        document.querySelector('.arrow.prev').disabled = true;
    } else {
        document.querySelector('.arrow.prev').disabled = false;
    }

    // Desabilita o botão "next" se estiver no final
    if (currentIndex + itemsPerSlide >= items.length) {
        document.querySelector('.arrow.next').disabled = true;
    } else {
        document.querySelector('.arrow.next').disabled = false;
    }
}

// Função para avançar os itens
function nextAuthors() {
    if (currentIndex + itemsPerSlide < items.length) {
        currentIndex += itemsPerSlide; // Avança pelo número de itens por vez
    }
    showAuthors(); // Atualiza a exibição dos itens
}

// Função para voltar os itens
function prevAuthors() {
    if (currentIndex - itemsPerSlide >= 0) {
        currentIndex -= itemsPerSlide; // Retrocede pelo número de itens por vez
    }
    showAuthors(); // Atualiza a exibição dos itens
}

// Inicializa a exibição
showAuthors(); // Exibe os primeiros itens ao carregar a página