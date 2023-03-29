// Variables
let firstOperand = '';
let secondOperand = null;
let currentOperator = null;

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

let display = document.querySelector('.display');


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


let currentOperand = document.querySelector('.currentOperand');
currentOperand.textContent = '';

let perviousOperand = document.querySelector('.perviousOperand');


const btn = document.querySelectorAll('.button');
const ac = document.querySelector('#reset');
const del = document.querySelector('#del');
const equals = document.querySelector('#equals');


// del.addEventListener('click', () => {
//     initialValue.pop()
// })

ac.addEventListener('click', () => {
    location.reload()
})

btn.forEach (button => {
    if (button.dataset.type === 'number') {
        let digits = button;
        digits.addEventListener('click', (e) => {
            let click = e.target;
            let numberClicked = parseInt(click.value);
            currentOperand.append(numberClicked)
            // firstOperand =  parseInt(currentOperand.innerHTML);
            if (firstOperand !== perviousOperand)  {
                firstOperand =  parseInt(currentOperand.innerHTML);
            } else {
                secondOperand = parseInt(currentOperand.innerHTML);
            }


            // console.log(parseInt(firstOperand + 5));
            // console.log(firstOperand, 'firstOperand')
        })
    }
})


btn.forEach (operatorButton => {
    if (operatorButton.dataset.type === 'operator') {
        let operator = operatorButton;
        operator.addEventListener('click', (e) => {
            let click = e.target;
            let operatorClicked = click.value
            perviousOperand.append(firstOperand + operatorClicked)
            perviousOperand = firstOperand
            currentOperand.textContent = secondOperand;
            secondOperand = currentOperand.innerHTML;
            console.log(secondOperand, 'hi')
            equals.addEventListener('click', () => {
                    console.log(firstOperand, 'first')
                    console.log(secondOperand, 'second')
                    console.log(operatorClicked, 'operator')
                    console.log(perviousOperand, 'pervious')
                    operate(firstOperand, operatorClicked, secondOperand)
            })
        })
    }
    
})



//numbers entered should be stored in first operand
//then when operator is clicked it should take the first value and the next
//value and evaluate. Then if they should be able to keep adding