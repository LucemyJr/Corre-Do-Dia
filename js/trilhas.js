const modal = document.getElementById('modal-welcome-trial')
const btn = document.getElementById('start-trial-btn')
const modalConsequence = document.getElementById('modalConsequence')
const modalConsequenceBtn = document.getElementById('out-consequences-btn')

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

const consequenceBtns1 = document.getElementById('consequence-btns-1')
const consequenceBtns2 = document.getElementById('consequence-btns-2')
const consequenceBtns3 = document.getElementById('consequence-btns-3')
const seeConsequences = document.getElementById('seeConsequences')
const nextTrailBtn   = document.getElementById('nextTrail')

const trialTittle = document.getElementById('trial-tittle')
const youAreA = document.getElementById('trial-office')
const situation = document.getElementById('trial-situation')
const solutionA = document.getElementById('solution-a')
const solutionB = document.getElementById('solution-b')
const solutionC = document.getElementById('solution-c')

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
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";

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
    consequenceBtns1.style.display = "flex";
}
function hideExatasOptionsSection(){
    optionsExatasSection.classList.add('hide')
    consequenceBtns2.style.display = "flex";
}
function hideSaudeOptionsSection(){
    optionsSaudeSection.classList.add('hide')
    consequenceBtns3.style.display = "flex";
}

function openModalConcequences(){
    modalConsequence.classList.add('show')
}
function closeModalConcequences(){
    modalConsequence.classList.remove('show')
}

var numberCounterHumanas = 1
var numberCounterExatas = 1
var numberCounterSaude = 1
const optionsYouDo1 = document.getElementById('options-you-do-1')
const optionsYouDo3 = document.getElementById('options-you-do-2')
const optionsYouDo2 = document.getElementById('options-you-do-3')

function nextTrailHumanas(){
    numberCounterHumanas = numberCounterHumanas + 1
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";
    
    optionsHumanasSection.classList.remove('hide')
    optionsExatasSection.classList.remove('hide')
    optionsSaudeSection.classList.remove('hide')
    

    switch(numberCounterHumanas){
        case 2:
            trialTittle.innerHTML = "Assist. Social"
            youAreA.innerHTML = "Assistente Social"
            situation.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionA.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionB.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionC.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittle.innerHTML = "Psicologia"
            youAreA.innerHTML = "Psicologo(a)"
            situation.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionA.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionB.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionC.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittle.innerHTML = "Fim da Trilha de Humanas"
            youAreA.style.display = "none";
            situation.innerHTML = "Parabéns por finalizar sua trilha, esperamos que tenha adquirido uma noção melhor de como é o dia a dia de um profissional desse curso."
            solutionA.style.display = "none";
            solutionB.style.display = "none";
            solutionC.style.display = "none";
            optionsYouDo1.style.display = "none";
    }

}
function nextTrailExatas(){
    numberCounterHumanas = numberCounterHumanas + 1
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";
    
    optionsHumanasSection.classList.remove('hide')
    optionsExatasSection.classList.remove('hide')
    optionsSaudeSection.classList.remove('hide')
    

    switch(numberCounterHumanas){
        case 2:
            trialTittle.innerHTML = "Assist. Social"
            youAreA.innerHTML = "Assistente Social"
            situation.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionA.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionB.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionC.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittle.innerHTML = "Psicologia"
            youAreA.innerHTML = "Psicologo(a)"
            situation.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionA.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionB.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionC.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittle.innerHTML = "Fim da Trilha de Humanas"
            youAreA.style.display = "none";
            situation.innerHTML = "Parabéns por finalizar sua trilha, esperamos que tenha adquirido uma noção melhor de como é o dia a dia de um profissional desse curso."
            solutionA.style.display = "none";
            solutionB.style.display = "none";
            solutionC.style.display = "none";
            optionsYouDo2.style.display = "none";
    }

}
function nextTrailSaude(){
    numberCounterHumanas = numberCounterHumanas + 1
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";
    
    optionsHumanasSection.classList.remove('hide')
    optionsExatasSection.classList.remove('hide')
    optionsSaudeSection.classList.remove('hide')
    

    switch(numberCounterHumanas){
        case 2:
            trialTittle.innerHTML = "Assist. Social"
            youAreA.innerHTML = "Assistente Social"
            situation.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionA.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionB.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionC.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittle.innerHTML = "Psicologia"
            youAreA.innerHTML = "Psicologo(a)"
            situation.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionA.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionB.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionC.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittle.innerHTML = "Fim da Trilha de Humanas"
            youAreA.style.display = "none";
            situation.innerHTML = "Parabéns por finalizar sua trilha, esperamos que tenha adquirido uma noção melhor de como é o dia a dia de um profissional desse curso."
            solutionA.style.display = "none";
            solutionB.style.display = "none";
            solutionC.style.display = "none";
            optionsYouDo3.style.display = "none";
    }

}


modalConsequenceBtn.addEventListener('click', closeModalConcequences)
btn.addEventListener('click', fechaModal)
restartbtn.addEventListener('click', btnRestart)