var engButton = document.querySelector('.eng-button')
var mathButton = document.querySelector('.math-button')
var sciButton = document.querySelector('.sci-button')
var engContent = document.querySelector('.eng-content')
var mathContent = document.querySelector('.math-content')
var sciContent = document.querySelector('.sci-content')

engContent.style.display = 'none'
mathContent.style.display = 'none'
sciContent.style.display = 'none'



engButton.addEventListener('click', engButtonClick)

function engButtonClick() {
    if (engContent.style.display == 'block') {
        engContent.style.display = 'none'
    } else {
        engContent.style.display = 'block'
    }
}

mathButton.addEventListener('click', mathButtonClick)

function mathButtonClick() {
    if (mathContent.style.display == 'block') {
        mathContent.style.display = 'none'
    } else {
        mathContent.style.display = 'block'
    }
    
}

sciButton.addEventListener('click', sciButtonClick)

function sciButtonClick() {
    if (sciContent.style.display == 'block') {
        sciContent.style.display = 'none'
    } else{
        sciContent.style.display = 'block'
    }
}