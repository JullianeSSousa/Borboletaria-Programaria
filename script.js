
// Seleciona os elementos principais
const prevButton = document.querySelector('.arrow.prev');
const nextButton = document.querySelector('.arrow.next');
const cardsContainer = document.querySelector('.acervo-container');

// Define a largura de cada cartão (ajuste se necessário)
const cardWidth = 200; // Altere conforme o tamanho do cartão no CSS
const scrollAmount = cardWidth + 16; // Inclua a margem/padding se houver

// Função para rolar para a esquerda
prevButton.addEventListener('click', () => {
    cardsContainer.scrollBy({
        left: -scrollAmount, // Rolar para a esquerda
        behavior: 'smooth' // Animação suave
    });
});

// Função para rolar para a direita
nextButton.addEventListener('click', () => {
    cardsContainer.scrollBy({
        left: scrollAmount, // Rolar para a direita
        behavior: 'smooth' // Animação suave
    });
});

// Opção extra: Desativar os botões se não for possível rolar mais
const updateArrows = () => {
    const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    prevButton.disabled = cardsContainer.scrollLeft <= 0;
    nextButton.disabled = cardsContainer.scrollLeft >= maxScrollLeft;
};

// Atualiza os botões ao carregar a página e após rolar
cardsContainer.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);