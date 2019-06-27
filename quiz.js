var questionNumber = 0
var score = 0
var question = database.length

var currentQuestion = database[questionNumber]

var quizDiv = document.querySelector(".quiz")
var scoreDiv = document.querySelector(".score")
var questionDiv = document.querySelector(".question")
var optionADiv = document.querySelector(".optionA")
var optionBDiv = document.querySelector(".optionB")
var resultsDiv = document.querySelector(".results")
var summaryDiv = document.querySelector(".summary")

function displayQuestionAndOptions() {
    currentQuestion = database[questionNumber]
    scoreDiv.innerHTML = `Score: ${score} / ${questionNumber}`    
    questionDiv.innerHTML = currentQuestion.question
    optionADiv.innerHTML = currentQuestion.optionA
    optionBDiv.innerHTML = currentQuestion.optionB
}

displayQuestionAndOptions()

optionADiv.addEventListener('click', handleOptionAClick)
optionBDiv.addEventListener('click', handleOptionBClick)

function handleOptionAClick() {
    questionNumber += 1
    if (currentQuestion.answer == 'A') {
        score += 1 
    }
    if (questionNumber == question) {
        endQuiz()
    } else {
        displayQuestionAndOptions()
    }
}

function handleOptionBClick() {
    questionNumber += 1
    if (currentQuestion.answer == 'B') {
        score += 1 
    }
    if (questionNumber == question) {
        endQuiz()
    } else {
        displayQuestionAndOptions()
    }
}

function endQuiz() {
    summaryDiv.innerHTML = `You got: ${score} / ${question}`
    quizDiv.style.display = 'none'
    resultsDiv.style.display = 'flex'
}