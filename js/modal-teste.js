const modal = document.getElementById('modal-test')
const btn = document.getElementById('btn-modal')
const container = document.getElementById('modal-test')

function fechaModal(){
    modal.classList.remove('show')
}

btn.addEventListener('click', fechaModal)
container.addEventListener('click', fechaModal)
