const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const btn_search = document.querySelector('.header__search-btn');
const search = document.querySelector('.header');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});

btn_search.addEventListener('click', ()=>{
    search.classList.toggle('search');
});