var humanas = 0
var exatas = 0
var saude = 0

var question = document.getElementById('test-text')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')

const allRadio = document.querySelectorAll('options')
const radioBtn1 = document.getElementById('radio1')
const radioBtn2 = document.getElementById('radio2')
const radioBtn3 = document.getElementById('radio3')
const radioBtn4 = document.getElementById('radio4')

const inputsContainer = document.getElementById('options-container')

const questionNumberWrapper = document.getElementById('number-question')
var questionNumber = 1
var questionNumberEnd = document.getElementById('question-number-container')

var result = document.getElementById('result')
const congratulations = document.getElementById('congratulations')

const nextQuestionNumber = document.getElementById('question')
const nextQuestion = document.getElementById('next-question')

const confirmAnswer = document.getElementById('confirmAnswer')


function nextQuestionWrapper(){
    questionNumber = questionNumber + 1
    questionNumberWrapper.innerHTML = questionNumber
    if(questionNumber > 15){
        questionNumberEnd.innerHTML = "Fim"
        inputsContainer.style.display = "none";
        congratulations.style.display = "flex";
        nextQuestionNumber.style.display = "none";
    }
    
    if(radioBtn1.checked == true){
        exatas = exatas + 5
    }else if(radioBtn2.checked == true){
        humanas = humanas + 5
    }else if(radioBtn4.checked == true){
        saude = saude + 5
    }else{
        exatas = exatas + 1
        humanas = humanas + 1
        saude = saude + 1
    }

    if(humanas > exatas & humanas > saude){
        result.innerHTML = "Exatas"
    }else if(exatas > humanas & exatas > saude){
        result.innerHTML = "Humanas"
    }else if(saude > exatas & saude > humanas){
        result.innerHTML = "Saúde"
    }else{
        result.innerHTML = "Saúde"
        
    }

    switch(questionNumber){
        case 2:
            question.innerHTML = "Você imagina se destacar profissionalmente..." //Pergunta
            option1.innerHTML = "Pela sua objetividade." //Exatas
            option2.innerHTML = "Por propor novas formas de fazer as coisas ou pelo seu senso estético aguçado." //Humanas
            option3.innerHTML = "Pela sua ótima capacidade de análise." //Nenhum
            option4.innerHTML = "Pelas suas ótimas habilidades de Comunicação." //Saúde
            break
        case 3:
            question.innerHTML = "Você gosta mais de atividades que envolvam..." //Pergunta
            option1.innerHTML = "Planejamento, ordenação ou cálculo" //Exatas
            option2.innerHTML = "Criação, expressão ou beleza." //Humanas
            option3.innerHTML = "Relacionamento, cuidado ou mediação interpessoal." //Nenhum
            option4.innerHTML = "Pesquisa, diagnóstico ou crítica." //Saúde
            break
        case 4:
            question.innerHTML = "Em uma discussão, você:" //Pergunta
            option1.innerHTML = "Analisa a situação e avalia quais atitudes podem ser tomadas." //Exatas
            option2.innerHTML = "Sente o clima e tende a agir mais pela emoção que pela razão" //Humanas
            option3.innerHTML = "Tenta chegar em uma solução que seja boa pra todo mundo." //Nenhum
            option4.innerHTML = "Procura encerrar o assunto e partir logo para a ação." //Saúde
            break
        case 5:
            question.innerHTML = "Seus amigos te descreveriam como uma pessoa..." //Pergunta
            option1.innerHTML = "Intelectual." //Exatas
            option2.innerHTML = "Realista." //Humanas
            option3.innerHTML = "Empática." //Nenhum
            option4.innerHTML = "Cautelosa." //Saúde
            break
        case 6:
            question.innerHTML = "O emprego ideal é aquele no qual você:" //Pergunta
            option1.innerHTML = "Possui desafios." //Exatas
            option2.innerHTML = "Surpreende ou emociona as pessoas." //Humanas
            option3.innerHTML = "Aprende muito." //Nenhum
            option4.innerHTML = "Contribui com a sociedade." //Saúde
            break
        case 7:
            question.innerHTML = "O que você mais valoriza?" //Pergunta
            option1.innerHTML = "A rotina e a precisão." //Exatas
            option2.innerHTML = "O prazer e as emoções." //Humanas
            option3.innerHTML = "O sucesso e o poder." //Nenhum
            option4.innerHTML = "O direito e bem estar de todos. " //Saúde
            break
        case 8:
            question.innerHTML = "De modo geral, você evita ou não gosta de:" //Pergunta
            option1.innerHTML = "Interagir ou pensar demais" //Exatas
            option2.innerHTML = "Seguir rotinas e regras. " //Humanas
            option3.innerHTML = "Ser comandado." //Nenhum
            option4.innerHTML = "Fazer algo sem ter manual ou explicação." //Saúde
            break
        case 9:
            question.innerHTML = "O que mais te incomoda é quando as pessoas..." //Pergunta
            option1.innerHTML = "Demoram muito pra tomar uma decisão." //Exatas
            option2.innerHTML = "Emitem opinião sem conhecer o assunto a fundo." //Humanas
            option3.innerHTML = "Burlam ou ignoram regras." //Nenhum
            option4.innerHTML = "Esperam resultados diferentes fazendo tudo igual." //Saúde
            break
        case 10:
            question.innerHTML = "Para você, um bom professor é aquele que..." //Pergunta
            option1.innerHTML = "Transmite o conteúdo completo, sem deixar nada pra trás." //Exatas
            option2.innerHTML = "Dá a chance do aluno ter ou fazer suas experiências." //Humanas
            option3.innerHTML = "Ajuda a identificar os interesses e talentos de seus alunos.   " //Nenhum
            option4.innerHTML = "Ensina a trabalhar em grupo" //Saúde
            break
        case 11:
            question.innerHTML = "Na sala de aula, você..." //Pergunta
            option1.innerHTML = "É bem organizado." //Exatas
            option2.innerHTML = "Tenta ajudar os colegas a tirar dúvidas." //Humanas
            option3.innerHTML = "Presta atenção e é estudioso. " //Nenhum
            option4.innerHTML = "Costuma tomar a frente das coisas." //Saúde
            break
        case 12:
            question.innerHTML = "Com qual destas situações abaixo você se sente mais confortável?" //Pergunta
            option1.innerHTML = "Ler um livro científico." //Exatas
            option2.innerHTML = "Fazer aula de música, desenho ou teatro." //Humanas
            option3.innerHTML = "Virar representante de classe." //Nenhum
            option4.innerHTML = "Engajar-se em um trabalho voluntário." //Saúde
            break
        case 13:
            question.innerHTML = "Nos seus relacionamentos, você costuma ser:" //Pergunta
            option1.innerHTML = "Ponderado e criterioso nas suas escolhas." //Exatas
            option2.innerHTML = "Cuidadoso com o que fala." //Humanas
            option3.innerHTML = "Autoritário ou sedutor." //Nenhum
            option4.innerHTML = "Empático e acolhedor." //Saúde
            break
        case 14:
            question.innerHTML = "Qual palavra mais combina com você?" //Pergunta
            option1.innerHTML = "Ambição. " //Exatas
            option2.innerHTML = "Imaginação" //Humanas
            option3.innerHTML = "Colaboração." //Nenhum
            option4.innerHTML = "Disciplina." //Saúde
            break
        case 15:
            question.innerHTML = "Com qual frase você mais se identifica?" //Pergunta
            option1.innerHTML = "Uma grama de ação vale uma tonelada de teoria. (Friedrich Engels)" //Exatas
            option2.innerHTML = "Existe apenas um bem, o saber; e apenas um mal, a ignorância. (Sócrates)." //Humanas
            option3.innerHTML = "Mais vale um pássaro na mão do que dois voando." //Nenhum
            option4.innerHTML = "Ser empático é ver o mundo com os olhos do outro e não ver o nosso mundo refletido nos olhos dele.(Carl Rogers)" //Saúde
            break
        default:
            question.innerHTML = "Parabêns por finalizar o Teste Vocacional"
    }

    console.log("humanas = " + humanas)
    console.log("saude = " + saude)
    console.log("exatas = " + exatas)
}

function uncheckRadio(){
    radioBtn1.checked = false
    radioBtn2.checked = false
    radioBtn3.checked = false
    radioBtn4.checked = false
}

function showNextBtn(){
    nextQuestion.style.display = "block";
}
function hideNextBtn(){
    nextQuestion.style.display = "none";
}
function showConfirmAnswer(){
    confirmAnswer.style.display = "block";
}
function hideConfirmAnswer(){
    confirmAnswer.style.display = "none";
}
nextQuestion.addEventListener('click', nextQuestionWrapper)
nextQuestion.addEventListener('click', uncheckRadio)
confirmAnswer.addEventListener('click', showNextBtn )
confirmAnswer.addEventListener('click', hideConfirmAnswer )
nextQuestion.addEventListener('click', hideNextBtn)
nextQuestion.addEventListener('click', showConfirmAnswer)