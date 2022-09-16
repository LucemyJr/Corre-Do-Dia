const menu = document.querySelector('header');

function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 50);
}

window.addEventListener('scroll', activeScroll);