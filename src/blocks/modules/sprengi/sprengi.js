window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const arr = document.querySelector('.sprengi__arrow'),
    cards = document.querySelector('.sprengi__cards-hidden');

    arr.addEventListener('click', ()=>{
        if(cards.style.display === 'none'){
        cards.style.display = 'grid';
        arr.style.transform = 'rotate(0.5turn)';
        }else{
        cards.style.display = 'none';
        arr.style.transform = '';
        }
    });
});