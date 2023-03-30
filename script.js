// Variables
let firstOperand = '';
let secondOperand = null;
let currentOperator = null; 
let currentOperandScreen = document.querySelector('.currentOperand');
let display = document.querySelector('.display');
let perviousOperand = document.querySelector('.perviousOperand');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const btn = document.querySelectorAll('.button');
const ac = document.querySelector('#reset');
const del = document.querySelector('#del');
const equals = document.querySelector('#equals');

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

numberButtons.forEach((button) =>
    button.addEventListener('click', () => addNumberToScreen(button.textContent))
)

operatorButtons.forEach((operator) => 
    operator.addEventListener('click', () => setOperator(operator.textContent))
)
    
function addNumberToScreen(number) {
    return currentOperandScreen.textContent += number;
}

function setOperator(operator) {
    return currentOperandScreen.textContent += operator;
}

equals.addEventListener('click', () => {
    operate(firstOperand, operatorClicked, secondOperand)
})

// operate
function operate(num1, operator, num2) {
    if (operator === '+') {
        let addition = add(num1, num2)
        currentOperand.textContent = addition;
        return 
    } else if (operator === '-') {
        let subtraction = subtract(num1, num2)
        return currentOperand.textContent = subtraction;
    } else if (operator === '÷') {
        let division = divide(num1, num2)
        return currentOperand.textContent = division;
    } else if (operator === 'x') {
        let multiplication = multiply(num1, num2)
        return currentOperand.textContent = multiplication;
    } 
}


// del.addEventListener('click', () => {
//     initialValue.pop()
// })

ac.addEventListener('click', () => {
    location.reload()
})

// btn.forEach (button => {
//     if (button.dataset.type === 'number') {
//         let digits = button;
//         digits.addEventListener('click', (e) => {
//             let click = e.target;
//             let numberClicked = parseInt(click.value);
//             currentOperand.append(numberClicked)
//             // firstOperand =  parseInt(currentOperand.innerHTML);
//             if (firstOperand !== perviousOperand)  {
//                 firstOperand =  parseInt(currentOperand.innerHTML);
//             } else {
//                 secondOperand = parseInt(currentOperand.innerHTML);
//             }


//             // console.log(parseInt(firstOperand + 5));
//             // console.log(firstOperand, 'firstOperand')
//         })
//     }
// })


// btn.forEach (operatorButton => {
//     if (operatorButton.dataset.type === 'operator') {
//         let operator = operatorButton;
//         operator.addEventListener('click', (e) => {
//             let click = e.target;
//             let operatorClicked = click.value
//             perviousOperand.append(firstOperand + operatorClicked)
//             perviousOperand = firstOperand
//             currentOperand.textContent = secondOperand;
//             secondOperand = currentOperand.innerHTML;
//             console.log(secondOperand, 'hi')
//             equals.addEventListener('click', () => {
//                     console.log(firstOperand, 'first')
//                     console.log(secondOperand, 'second')
//                     console.log(operatorClicked, 'operator')
//                     console.log(perviousOperand, 'pervious')
//                     operate(firstOperand, operatorClicked, secondOperand)
//             })
//         })
//     }
    
// })



//numbers entered should be stored in first operand
//then when operator is clicked it should take the first value and the next
//value and evaluate. Then if they should be able to keep adding