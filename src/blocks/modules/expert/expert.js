window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const prev = document.querySelector('.expert__prev'),
        next = document.querySelector('.expert__next'),
        slides = document.querySelectorAll('.expert__slider-item'),
        tabs = document.querySelectorAll('.expert__tab');

    let index = 0;

    function show(index){
        slides[index].style.display = 'block';
        tabs[index].classList.add('active');
    }

    show(index);

    function clear_all(){
        slides.forEach(slide=>{
            slide.classList.add('animated');
            slide.style.display = 'none';
        });
        tabs.forEach(tab=>{
            tab.classList.remove('active');
        });
    }

    tabs.forEach((tab, i)=>{
        tab.addEventListener('click',()=>{
            clear_all();
            show(i);
        });
    });

    function change_index(n){
        index += n;
        if(index > (slides.length - 1)){
            index = 0;
        }
        if(index < 0){
            index = slides.length-1;
        }

    };

    next.addEventListener('click', ()=>{
        clear_all();
        change_index(1);        
        show(index);
        slides[index].classList.remove('slideInLeft');
        slides[index].classList.add('slideInRight');
    });

    prev.addEventListener('click', ()=>{
        clear_all();
        change_index(-1);
        show(index);
        slides[index].classList.remove('slideInRight');
        slides[index].classList.add('slideInLeft');
    });
});