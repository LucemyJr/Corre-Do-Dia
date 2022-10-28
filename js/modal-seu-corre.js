const modalCorre = document.getElementById('modal-corre')
const btnCorre = document.getElementById('btn-modal-seu-corre')
const containerCorre = document.getElementById('modal-corre')
const seuCorreBtn = document.getElementById('menuOption4')
const submitBtn = document.getElementById('submit-corre')

function abrirModal(){
    modalCorre.classList.add('show')
}
function fecharModal(){
    modalCorre.classList.remove('show')
}

btnCorre.addEventListener('click', fecharModal)
seuCorreBtn.addEventListener('click', abrirModal)
submitBtn.addEventListener('click', fecharModal)