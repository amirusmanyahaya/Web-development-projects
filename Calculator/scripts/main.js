const PREVIOUS_OPERAND_SELECTOR = document.querySelector('[data-previous-operand]')
const CURRENT_OPERAND_SELECTOR = document.querySelector('[data-current-operand]')

const NUMBERS_BUTTON_SELECTOR = document.querySelectorAll('[data-number]')

const OPERATORS_SELECTOR = document.querySelectorAll('[data-operator]')

const CLEAR_SELECTOR = document.querySelector('[data-clear-all]')

const DELETE_SELECTOR = document.querySelector('[data-delete]')
const EQUAL_SELECTOR = document.querySelector('[data-equal]')

const calculator = (() => {
    let previousOperand = ""
    let currentOperand = ""
    let operator = null

    const appendNumber = number => {
        if(number === '.')
            if(currentOperand.includes('.')) return
        currentOperand = `${currentOperand}${number}`
        updateDisplay()
    }

    const updateDisplay = () => {
        if(operator !== null){
            PREVIOUS_OPERAND_SELECTOR.innerHTML = `${previousOperand}${operator}`
        }else{
            PREVIOUS_OPERAND_SELECTOR.innerHTML = previousOperand
        }
        CURRENT_OPERAND_SELECTOR.innerHTML = currentOperand
    }

    const clearAll = () => {
        currentOperand = ""
        previousOperand = ""
        operator = null

        updateDisplay()
    }

    const performOperation = opr => {
        if(currentOperand === "") return
        if(operator != null){
            // compute the value of the previous and current before procceding
            const value = calculate(previousOperand, currentOperand, operator)
            if(value === undefined) return
            previousOperand = `${value}`
        }else{
            previousOperand = currentOperand
        }
        currentOperand = ""
        operator = opr
        updateDisplay()

    }

    const deleteNumber = () => {
        if (currentOperand === "") return
        currentOperand = currentOperand.substring(0,currentOperand.length - 1)
        CURRENT_OPERAND_SELECTOR.innerHTML = currentOperand
    }

    const equalsCompute = () => {
        if(currentOperand === "" || previousOperand === "") return
        const value = calculate(previousOperand,currentOperand,operator)
        if(value === undefined) return 
        previousOperand = ""
        currentOperand = `${value}`
        operator = null
        updateDisplay()
    }

    const calculate = (prevOperand,currentOperand,opr) => {
        switch(opr){
            case '+':
                return parseFloat(previousOperand) + parseFloat(currentOperand)
            case '-':
                return parseFloat(previousOperand) - parseFloat(currentOperand)
            case '*':
                return parseFloat(previousOperand) * parseFloat(currentOperand)
            case '/':
                if(parseFloat(currentOperand) === 0) return undefined
                return parseFloat(previousOperand) / parseFloat(currentOperand)
        }
    }
    return {appendNumber,clearAll,performOperation,deleteNumber,equalsCompute}
})()

NUMBERS_BUTTON_SELECTOR.forEach( btn => {
    btn.addEventListener('click',() => {
        calculator.appendNumber(btn.innerHTML)
    })
})


CLEAR_SELECTOR.addEventListener('click', () => {
    calculator.clearAll()
})

OPERATORS_SELECTOR.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.performOperation(btn.innerHTML)
    })
})

DELETE_SELECTOR.addEventListener('click',() => {
    calculator.deleteNumber()
})

EQUAL_SELECTOR.addEventListener('click', () => {
    calculator.equalsCompute()
})


