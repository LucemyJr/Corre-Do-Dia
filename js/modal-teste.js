const modalTeste = document.getElementById('modal-test')
const btnTeste = document.getElementById('start-btn')
const containerTeste = document.getElementById('modal-test')

function fechaModal(){
    modalTeste.classList.add('none')
}

btnTeste.addEventListener('click', fechaModal)
containerTeste.addEventListener('click', fechaModal)
