const modal = document.getElementById('modal-welcome-trial')
const btn = document.getElementById('start-trial-btn')

const mainContainer = document.getElementById('main')
const mainTittle = document.getElementById('trailSubtittle')
const humanasContainer = document.querySelector('#trail-humanas')
const exatasContainer = document.querySelector('#trail-exatas')
const saudeContainer = document.querySelector('#trail-saude')

const saudeSection = document.querySelector('.saudeSection')
const exatasSection = document.querySelector('.exatasSection')
const humanasSection = document.querySelector('.humanasSection')

const restartContainer = document.getElementById('restartContainer')
const restartbtn = document.getElementById('restartBtn')

function fechaModal(){
    modal.classList.add('hide')
}

function btnRestart(){
    mainContainer.style.display = "flex";
    restartContainer.style.display = "none";
    saudeSection.classList.remove('show')
    exatasSection.classList.remove('show')
    humanasSection.classList.remove('show')
}
function humanasOption(){
    restartContainer.style.display = "flex";
    mainContainer.style.display = "none";
}
function exatasOption(){
    restartContainer.style.display = "flex";
    mainContainer.style.display = "none";
}
function saudeOption(){
    restartContainer.style.display = "flex";
    mainContainer.style.display = "none";
}

function showSaude(){
    saudeSection.classList.add('show')
}
function showExatas(){
    exatasSection.classList.add('show')
}
function showHumanas(){
    humanasSection.classList.add('show')
}

btn.addEventListener('click', fechaModal)
restartbtn.addEventListener('click', btnRestart)
