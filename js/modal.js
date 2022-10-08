const modal = document.getElementById('modal-login')
const btn = document.getElementById('btn-modal')
const container = document.getElementById('modal-login')
const register = document.getElementById('register')
const registerBtn = document.getElementById('registerBtn')

function abreModal(){
    modal.classList.add('show')
}
function fechaModal(){
    modal.classList.remove('show')
}

btn.addEventListener('click', fechaModal)
register.addEventListener('click', abreModal)
registerBtn.addEventListener('click', abreModal)