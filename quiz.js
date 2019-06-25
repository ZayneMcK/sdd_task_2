database = [
    {
        question: 'How do you spell something?',
        optionA: 'something',
        optionB: 'smosjjeefe',
        answer: 'A'
    },
]

var questionNumber = 0

var scoreDiv = document.querySelector(".score")
var questionDiv = document.querySelector(".question")
var optionADiv = document.querySelector(".optionA")
var optionBDiv = document.querySelector(".optionB")

function displayQuestionAndOptions() {
    questionDiv.innerHTML = database[questionNumber].question
    optionADiv.innerHTML = database[questionNumber].optionA
    optionBDiv.innerHTML = database[questionNumber].optionB
}

displayQuestionAndOptions()
