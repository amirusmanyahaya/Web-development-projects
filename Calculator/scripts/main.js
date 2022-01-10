const RESULT_DISPLAY = document.querySelector('.result-display')
const CALC_BUTTONS = document.querySelectorAll('.btn-calc')
const displayValue = (value) => {
    if(value === "CLS")
        RESULT_DISPLAY.textContent = ""
    else
        RESULT_DISPLAY.textContent = `${RESULT_DISPLAY.textContent}${value}`

}

const calcButtons = Array.from(CALC_BUTTONS)

calcButtons.forEach((calcButton) => {
    calcButton.addEventListener('click',() => {
        displayValue(calcButton.textContent)
    })
})




