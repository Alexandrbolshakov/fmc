window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const arr = document.querySelector('.sprengi__arrow'),
    cards = document.querySelector('.sprengi__cards-hidden');

    arr.addEventListener('click', ()=>{
        if(getComputedStyle(cards).display === 'none'){
            cards.style.display = 'grid';
            cards.classList.remove('slideInUp');
            cards.classList.add('slideInDown');
            arr.style.transform = 'rotate(0.5turn)';
        }else{
            cards.classList.remove('slideInDown');
            cards.classList.add('slideInUp');
            cards.style.display = 'none';
            arr.style.transform = '';
        }
    });
});