const modal = document.getElementById('modal-welcome-trial')
const btn = document.getElementById('start-trial-btn')
const modalConsequence = document.getElementById('modalConsequence')

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

const optionsHumanasSection = document.getElementById('options-you-do-1')
const optionsExatasSection = document.getElementById('options-you-do-2')
const optionsSaudeSection = document.getElementById('options-you-do-3')

function fechaModal(){
    modal.classList.add('hide')
}



function btnRestart(){
    mainContainer.style.display = "flex";
    restartContainer.style.display = "none";
    saudeSection.classList.remove('show')
    exatasSection.classList.remove('show')
    humanasSection.classList.remove('show')
    optionsHumanasSection.classList.remove('hide')
    optionsExatasSection.classList.remove('hide')
    optionsSaudeSection.classList.remove('hide')
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

function hideHumanasOptionsSection(){
    optionsHumanasSection.classList.add('hide')
}
function hideExatasOptionsSection(){
    optionsExatasSection.classList.add('hide')
}
function hideSaudeOptionsSection(){
    optionsSaudeSection.classList.add('hide')
}

btn.addEventListener('click', fechaModal)
restartbtn.addEventListener('click', btnRestart)
