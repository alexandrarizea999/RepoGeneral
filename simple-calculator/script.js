class Calculator{
    currentOperand = ""

    // constructor
    constructor(previousButtonTextElement, currentButtonTextElement){
        this.previousButtonTextElement  = previousButtonTextElement
        this.currentButtonTextElement   = currentButtonTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        console.log("append")
        this.currentOperand = number
    }
    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

// gets all of our data-number attributes
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// this how we define a class
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})