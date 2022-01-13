const RESULT_DISPLAY = document.querySelector('.result-display')
const CALC_BUTTONS = document.querySelectorAll('.btn-calc')

let firstValue = ""
let secondValue = ""


const displayValue = (value) => {
    if(value === "CLS")
        RESULT_DISPLAY.textContent = ""
    else
        RESULT_DISPLAY.textContent = `${RESULT_DISPLAY.textContent}${value}`

}

const validateValue = (value) => {
    const displayContent = RESULT_DISPLAY.textContent
    switch(value){
        case '1':
    }
}

const calcButtons = Array.from(CALC_BUTTONS)

calcButtons.forEach((calcButton) => {
    calcButton.addEventListener('click',() => {
        displayValue(calcButton.textContent)
    })
})




