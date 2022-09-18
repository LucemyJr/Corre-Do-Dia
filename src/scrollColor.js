const header = document.querySelector('header');
const menu = document.getElementById('menu')

function activeScroll(){
    header.classList.toggle('ativo', scrollY > 50);
}
function activeScroll2(){
    menu.classList.toggle('ativo', scrollY > 50)
}
window.addEventListener('scroll', activeScroll);
window.addEventListener('scroll', activeScroll2);