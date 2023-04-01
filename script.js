let firstOperand = '';
let secondOperand = '';
let currentOperator = null; 
let shouldResetScreen = false

const currentOperandScreen = document.querySelector('.currentOperand');
const perviousOperandScreen = document.querySelector('.perviousOperand');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const btn = document.querySelectorAll('.button');
const acButton = document.getElementById('reset');
const del = document.getElementById('del');
const equals = document.getElementById('equals');

acButton.addEventListener('click', clear)
equals.addEventListener('click', evaluate);
del.addEventListener('click', backSpace);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addNumberToScreen(button.textContent))
)

operatorButtons.forEach((operator) => 
    operator.addEventListener('click', () => setOperator(operator.textContent))
)
    
function addNumberToScreen(number) {
    if (currentOperandScreen.textContent === '0' || shouldResetScreen)
        resetScreen() 
    return currentOperandScreen.textContent += number;
}

function setOperator(operator) {
    if (currentOperator !== null) evaluate()
    firstOperand = currentOperandScreen.textContent
    currentOperator = operator
    perviousOperandScreen.textContent = `${firstOperand} ${currentOperator}`
    shouldResetScreen = true
}

function evaluate() {
    secondOperand = currentOperandScreen.textContent
    currentOperandScreen.textContent = operate(firstOperand, currentOperator, secondOperand)
    perviousOperandScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`
    currentOperator = null
}

function resetScreen() {
    currentOperandScreen.textContent = '';
    shouldResetScreen = false
}

function clear() {
    currentOperandScreen.textContent = '';
    perviousOperandScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null; 
}

function backSpace() {
    currentOperandScreen.textContent = currentOperandScreen.textContent.toString().slice(0, -1);
}

// operate
function operate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2)
        case '÷':
            if (num2 === 0) return null
            else return divide(num1, num2)
        default: 
            return null;
    }
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b 
}
