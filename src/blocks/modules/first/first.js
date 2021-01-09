
window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';

    const slider_items = document.querySelectorAll('.first__main-img');
    const slider_prev = document.querySelector('.first__main-prev');
    const slider_next = document.querySelector('.first__main-next');
    const drops = document.querySelectorAll('.first__main-point');
    const slider_back_items = document.querySelectorAll('.first__main-back-img');
    let index = 0;

    function anim(){
        slider_items.forEach(item=>{
            item.classList.add('animated');
        });
        slider_back_items.forEach(item=>{
            item.classList.add('animated');
        });
    }
    anim();

    function show_slide(index){
        drops[index].classList.add('active');
        // slider_items[index].classList.add('active');
        // slider_back_items[index].classList.add('active');
        slider_items[index].classList.add('fadeIn');
        slider_items[index].style.display = 'block';
        slider_back_items[index].classList.add('fadeIn');
        slider_back_items[index].style.display = 'block';
    }

    show_slide(index);

    function clear_all(row){
        
        row.forEach(item=>{

            item.style.display='none';
        })
    }
    function clear_drops(row){
        row.forEach(item=>{
            item.classList.remove('active');
        });
    }

    function change_index(n){
        index += n;
        if(index > (slider_items.length - 1)){
            index = 0;
        }
        if(index < 0){
            index = slider_items.length-1;
        }

    }

    slider_next.addEventListener('click', ()=>{
        clear_drops(drops);
        clear_all(slider_items);
        clear_all(slider_back_items);
        change_index(1);        
        show_slide(index);

    });

    slider_prev.addEventListener('click', ()=>{
        clear_drops(drops);
        clear_all(slider_items);
        clear_all(slider_back_items);
        change_index(-1);
        show_slide(index);
    });

    drops.forEach((drop, i)=>{
        drop.addEventListener('click', ()=>{
            clear_drops(drops);
            clear_all(slider_items);
            clear_all(slider_back_items);
            show_slide(i);
        });
    });

});