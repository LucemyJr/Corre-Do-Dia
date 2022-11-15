// Modal Hello Consts
const modal = document.getElementById('modal-welcome-trial')
const btn = document.getElementById('start-trial-btn')
const modalConsequence = document.getElementById('modalConsequence')
const modalConsequenceBtn = document.getElementById('out-consequences-btn')

// Main Consts
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

// Humanas container Consts
const trialTittleHumanas = document.getElementById('trial-tittle-humanas')
const youAreContainerHumanas = document.getElementById('you-are-a-humanas')
const youAreAHumanas = document.getElementById('trial-office-humanas')
const situationHumanas = document.getElementById('trial-situation-humanas')
const solutionAHumanas = document.getElementById('solution-a-humanas')
const solutionBHumanas = document.getElementById('solution-b-humanas')
const solutionCHumanas = document.getElementById('solution-c-humanas')

// Exatas container Consts
const trialTittleExatas = document.getElementById('trial-tittle-exatas')
const youAreContainerExatas = document.getElementById('you-are-a-exatas')
const youAreAExatas = document.getElementById('trial-office-exatas')
const situationExatas = document.getElementById('trial-situation-exatas')
const solutionAExatas = document.getElementById('solution-a-exatas')
const solutionBExatas = document.getElementById('solution-b-exatas')
const solutionCExatas = document.getElementById('solution-c-exatas')

// Saude container Consts
const trialTittleSaude = document.getElementById('trial-tittle-saude')
const youAreContainerSaude = document.getElementById('you-are-a-saude')
const youAreASaude = document.getElementById('trial-office-saude')
const situationSaude = document.getElementById('trial-situation-saude')
const solutionASaude = document.getElementById('solution-a-saude')
const solutionBSaude = document.getElementById('solution-b-saude')
const solutionCSaude = document.getElementById('solution-c-saude')


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
const optionsYouDo2 = document.getElementById('options-you-do-2')
const optionsYouDo3 = document.getElementById('options-you-do-3')

function nextTrailHumanas(){
    numberCounterHumanas = numberCounterHumanas + 1
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";
    
    optionsHumanasSection.classList.remove('hide')

    switch(numberCounterHumanas){
        case 1:
            trialTittleHumanas.innerHTML = "DIREITO"
            youAreAHumanas.innerHTML = "Advogado"
            situationHumanas.innerHTML = "Seu cliente está sendo preso em flagrante e pouco se sabe sobre os fatos, e ainda não é possível prever com exatidão qual será o rumo seguido pela acusação. Porém uma testemunha é chamada e ela com provas que pode incriminam seu cliente. Seguindo a fase do procedimento de recebimento da denúncia ou da queixa  você deve apresentar uma defesa prévia em ate três dias uteis."
            solutionAHumanas.innerHTML = "Perguntar quais são as provas apresentadas pelo réu."
            solutionBHumanas.innerHTML = "Perguntar se a vítima e as testemunhas da acusação têm algo contra o réu  durante o julgamento."
            solutionCHumanas.innerHTML = "Perguntar se o réu  praticou o crime e colocar no processo."
            break
        case 2:
            trialTittleHumanas.innerHTML = "Assist. Social"
            youAreAHumanas.innerHTML = "Assistente Social"
            situationHumanas.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionAHumanas.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionBHumanas.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionCHumanas.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittleHumanas.innerHTML = "Psicologia"
            youAreAHumanas.innerHTML = "Psicologo(a)"
            situationHumanas.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionAHumanas.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionBHumanas.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionCHumanas.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittleHumanas.innerHTML = "Fim da Trilha de Humanas"
            youAreContainerHumanas.style.display = "none";
            situationHumanas.innerHTML = "Parabéns por finalizar sua trilha de Humanas, esperamos que tenha adquirido uma noção melhor de como é o dia a dia de um profissional desse curso."
            solutionAHumanas.style.display = "none";
            solutionBHumanas.style.display = "none";
            solutionCHumanas.style.display = "none";
            optionsYouDo1.style.display = "none";
    }

}
function nextTrailExatas(){
    numberCounterExatas = numberCounterExatas + 1
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";
    
    optionsExatasSection.classList.remove('hide')

    switch(numberCounterExatas){
        case 2:
            trialTittleExatas.innerHTML = "Assist. Social"
            youAreAExatas.innerHTML = "Assistente Social"
            situationExatas.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionAExatas.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionBExatas.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionCExatas.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittleExatas.innerHTML = "Psicologia"
            youAreAExatas.innerHTML = "Psicologo(a)"
            situationExatas.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionAExatas.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionBExatas.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionCExatas.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittleExatas.innerHTML = "Fim da Trilha de Humanas"
            youAreContainerExatas.style.display = "none";
            situationExatas.innerHTML = "Parabéns por finalizar sua trilha de Exatas, esperamos que tenha adquirido uma noção melhor de como é o dia a dia de um profissional desse curso."
            solutionAExatas.style.display = "none";
            solutionBExatas.style.display = "none";
            solutionCExatas.style.display = "none";
            optionsYouDo2.style.display = "none";
    }

}
function nextTrailSaude(){
    numberCounterSaude = numberCounterSaude + 1
    consequenceBtns1.style.display = "none";
    consequenceBtns2.style.display = "none";
    consequenceBtns3.style.display = "none";
    
    optionsSaudeSection.classList.remove('hide')

    switch(numberCounterSaude){
        case 2:
            trialTittleSaude.innerHTML = "Assist. Social"
            youAreASaude.innerHTML = "Assistente Social"
            situationSaude.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionASaude.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionBSaude.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionCSaude.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittleSaude.innerHTML = "Psicologia"
            youAreASaude.innerHTML = "Psicologo(a)"
            situationSaude.innerHTML = "Após uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Serviço Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual não há identificação de gênero. Em sua fala o estudante pondera que a família não aceitaria conversar sobre o assunto e que se sente amedrontado diante da possível reação familiar.            "
            solutionASaude.innerHTML = "Chamaria a família para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as questões apresentadas na escola."
            solutionBSaude.innerHTML = "Conversaria com o adolescente sobre o período de transição (adolescência) que está vivenciando e de como esta fase poderia estar influenciando, juntamente com as relações de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para então tomar uma decisão diante da família e da escola."
            solutionCSaude.innerHTML = "Acolheria o estudante e buscaria orientá-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a importância de buscar estabelecer um espaço seguro e de diálogo com seus responsáveis legais, pensando junto com o adolescente em estratégias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittleSaude.innerHTML = "Fim da Trilha de Humanas"
            youAreContainerSaude.style.display = "none";
            situationSaude.innerHTML = "Parabéns por finalizar sua trilha de Saúde, esperamos que tenha adquirido uma noção melhor de como é o dia a dia de um profissional desse curso."
            solutionASaude.style.display = "none";
            solutionBSaude.style.display = "none";
            solutionCSaude.style.display = "none";
            optionsYouDo3.style.display = "none";
    }

}


modalConsequenceBtn.addEventListener('click', closeModalConcequences)
btn.addEventListener('click', fechaModal)
restartbtn.addEventListener('click', btnRestart)