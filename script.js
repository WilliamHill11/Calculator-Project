// Variables
let firstOperand = null;
let secondOperand = null;
let currentOpeartor = null;

// add
function add(a, b) {
    return a + b
}

// subtract
function subtract(a, b) {
    return a - b
}

// divide 
function divide(a, b) {
    return a / b
}

// multiply 
function multiply(a, b) {
    return a * b 
}

// operations
function operate(num1, operator, num2) {
    return num1 + operator + num2
}

// display value 
const displayCurrentOperand = document.querySelector('.currentOperand');
let initialValue = document.createElement('p');
initialValue.textContent = '0';
displayCurrentOperand.append(initialValue);
