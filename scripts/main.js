const listBtn = document.querySelector('.btn--list');
const gridBtn = document.querySelector('.btn--grid');

const cardsGrid = document.querySelector('.cards__grid');



listBtn.addEventListener('click', function(){
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    cardsGrid.classList.add('layout--list');
    cardsGrid.classList.remove('layout--grid');
})

gridBtn.addEventListener('click', function() {
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    cardsGrid.classList.add('layout--grid');
    cardsGrid.classList.remove('layout--list');
})