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
            situationHumanas.innerHTML = "Seu cliente est?? sendo preso em flagrante e pouco se sabe sobre os fatos, e ainda n??o ?? poss??vel prever com exatid??o qual ser?? o rumo seguido pela acusa????o. Por??m uma testemunha ?? chamada e ela com provas que pode incriminam seu cliente. Seguindo a fase do procedimento de recebimento da den??ncia ou da queixa  voc?? deve apresentar uma defesa pr??via em ate tr??s dias uteis."
            solutionAHumanas.innerHTML = "Perguntar quais s??o as provas apresentadas pelo r??u."
            solutionBHumanas.innerHTML = "Perguntar se a v??tima e as testemunhas da acusa????o t??m algo contra o r??u  durante o julgamento."
            solutionCHumanas.innerHTML = "Perguntar se o r??u  praticou o crime e colocar no processo."
            break
        case 2:
            trialTittleHumanas.innerHTML = "Assist. Social"
            youAreAHumanas.innerHTML = "Assistente Social"
            situationHumanas.innerHTML = "Ap??s uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Servi??o Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual n??o h?? identifica????o de g??nero. Em sua fala o estudante pondera que a fam??lia n??o aceitaria conversar sobre o assunto e que se sente amedrontado diante da poss??vel rea????o familiar.            "
            solutionAHumanas.innerHTML = "Chamaria a fam??lia para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as quest??es apresentadas na escola."
            solutionBHumanas.innerHTML = "Conversaria com o adolescente sobre o per??odo de transi????o (adolesc??ncia) que est?? vivenciando e de como esta fase poderia estar influenciando, juntamente com as rela????es de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para ent??o tomar uma decis??o diante da fam??lia e da escola."
            solutionCHumanas.innerHTML = "Acolheria o estudante e buscaria orient??-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a import??ncia de buscar estabelecer um espa??o seguro e de di??logo com seus respons??veis legais, pensando junto com o adolescente em estrat??gias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittleHumanas.innerHTML = "Psicologia"
            youAreAHumanas.innerHTML = "Psicologo(a)"
            situationHumanas.innerHTML = "Ap??s uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Servi??o Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual n??o h?? identifica????o de g??nero. Em sua fala o estudante pondera que a fam??lia n??o aceitaria conversar sobre o assunto e que se sente amedrontado diante da poss??vel rea????o familiar.            "
            solutionAHumanas.innerHTML = "Chamaria a fam??lia para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as quest??es apresentadas na escola."
            solutionBHumanas.innerHTML = "Conversaria com o adolescente sobre o per??odo de transi????o (adolesc??ncia) que est?? vivenciando e de como esta fase poderia estar influenciando, juntamente com as rela????es de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para ent??o tomar uma decis??o diante da fam??lia e da escola."
            solutionCHumanas.innerHTML = "Acolheria o estudante e buscaria orient??-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a import??ncia de buscar estabelecer um espa??o seguro e de di??logo com seus respons??veis legais, pensando junto com o adolescente em estrat??gias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittleHumanas.innerHTML = "Fim da Trilha de Humanas"
            youAreContainerHumanas.style.display = "none";
            situationHumanas.innerHTML = "Parab??ns por finalizar sua trilha de Humanas, esperamos que tenha adquirido uma no????o melhor de como ?? o dia a dia de um profissional desse curso."
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
            situationExatas.innerHTML = "Ap??s uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Servi??o Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual n??o h?? identifica????o de g??nero. Em sua fala o estudante pondera que a fam??lia n??o aceitaria conversar sobre o assunto e que se sente amedrontado diante da poss??vel rea????o familiar.            "
            solutionAExatas.innerHTML = "Chamaria a fam??lia para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as quest??es apresentadas na escola."
            solutionBExatas.innerHTML = "Conversaria com o adolescente sobre o per??odo de transi????o (adolesc??ncia) que est?? vivenciando e de como esta fase poderia estar influenciando, juntamente com as rela????es de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para ent??o tomar uma decis??o diante da fam??lia e da escola."
            solutionCExatas.innerHTML = "Acolheria o estudante e buscaria orient??-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a import??ncia de buscar estabelecer um espa??o seguro e de di??logo com seus respons??veis legais, pensando junto com o adolescente em estrat??gias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittleExatas.innerHTML = "Psicologia"
            youAreAExatas.innerHTML = "Psicologo(a)"
            situationExatas.innerHTML = "Ap??s uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Servi??o Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual n??o h?? identifica????o de g??nero. Em sua fala o estudante pondera que a fam??lia n??o aceitaria conversar sobre o assunto e que se sente amedrontado diante da poss??vel rea????o familiar.            "
            solutionAExatas.innerHTML = "Chamaria a fam??lia para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as quest??es apresentadas na escola."
            solutionBExatas.innerHTML = "Conversaria com o adolescente sobre o per??odo de transi????o (adolesc??ncia) que est?? vivenciando e de como esta fase poderia estar influenciando, juntamente com as rela????es de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para ent??o tomar uma decis??o diante da fam??lia e da escola."
            solutionCExatas.innerHTML = "Acolheria o estudante e buscaria orient??-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a import??ncia de buscar estabelecer um espa??o seguro e de di??logo com seus respons??veis legais, pensando junto com o adolescente em estrat??gias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittleExatas.innerHTML = "Fim da Trilha de Humanas"
            youAreContainerExatas.style.display = "none";
            situationExatas.innerHTML = "Parab??ns por finalizar sua trilha de Exatas, esperamos que tenha adquirido uma no????o melhor de como ?? o dia a dia de um profissional desse curso."
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
            situationSaude.innerHTML = "Ap??s uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Servi??o Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual n??o h?? identifica????o de g??nero. Em sua fala o estudante pondera que a fam??lia n??o aceitaria conversar sobre o assunto e que se sente amedrontado diante da poss??vel rea????o familiar.            "
            solutionASaude.innerHTML = "Chamaria a fam??lia para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as quest??es apresentadas na escola."
            solutionBSaude.innerHTML = "Conversaria com o adolescente sobre o per??odo de transi????o (adolesc??ncia) que est?? vivenciando e de como esta fase poderia estar influenciando, juntamente com as rela????es de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para ent??o tomar uma decis??o diante da fam??lia e da escola."
            solutionCSaude.innerHTML = "Acolheria o estudante e buscaria orient??-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a import??ncia de buscar estabelecer um espa??o seguro e de di??logo com seus respons??veis legais, pensando junto com o adolescente em estrat??gias que contribuam para seu fortalecimento psicossocial."
            break
        case 3:
            trialTittleSaude.innerHTML = "Psicologia"
            youAreASaude.innerHTML = "Psicologo(a)"
            situationSaude.innerHTML = "Ap??s uma roda de conversa sobre o autocuidado com estudantes com idade entre 12 e 13 anos, um dos estudantes procurou o Servi??o Social afirmando que gostaria de mudar de nome e quer adotar um nome social, na qual n??o h?? identifica????o de g??nero. Em sua fala o estudante pondera que a fam??lia n??o aceitaria conversar sobre o assunto e que se sente amedrontado diante da poss??vel rea????o familiar.            "
            solutionASaude.innerHTML = "Chamaria a fam??lia para uma conversa e indicaria uma psicoterapia para que seja trabalhadas as quest??es apresentadas na escola."
            solutionBSaude.innerHTML = "Conversaria com o adolescente sobre o per??odo de transi????o (adolesc??ncia) que est?? vivenciando e de como esta fase poderia estar influenciando, juntamente com as rela????es de amizade que construiu no ambiente escolar e de como pode estar sendo influenciado por um ''modismo''. Orientando a esperar um pouco mais para ent??o tomar uma decis??o diante da fam??lia e da escola."
            solutionCSaude.innerHTML = "Acolheria o estudante e buscaria orient??-lo sobre os procedimentos para adotar o nome social, sendo ele menor de idade, e sobre a import??ncia de buscar estabelecer um espa??o seguro e de di??logo com seus respons??veis legais, pensando junto com o adolescente em estrat??gias que contribuam para seu fortalecimento psicossocial."
            break
        default:
            trialTittleSaude.innerHTML = "Fim da Trilha de Humanas"
            youAreContainerSaude.style.display = "none";
            situationSaude.innerHTML = "Parab??ns por finalizar sua trilha de Sa??de, esperamos que tenha adquirido uma no????o melhor de como ?? o dia a dia de um profissional desse curso."
            solutionASaude.style.display = "none";
            solutionBSaude.style.display = "none";
            solutionCSaude.style.display = "none";
            optionsYouDo3.style.display = "none";
    }

}


modalConsequenceBtn.addEventListener('click', closeModalConcequences)
btn.addEventListener('click', fechaModal)
restartbtn.addEventListener('click', btnRestart)