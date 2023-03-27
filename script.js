// Variables
let firstOperand = null;
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

// operations
function operate(num1, operator, num2) {
    return num1 + operator + num2
}

// display value 
const displayCurrentOperand = document.querySelector('.currentOperand');
let initialValue = document.createElement('p');
initialValue.textContent = '0';
displayCurrentOperand.append(initialValue);


const btn = document.querySelectorAll('.button');
const ac = document.querySelector('#reset');
const del = document.querySelector('#del');

// del.addEventListener('click', () => {
//     initialValue.pop()
// })


ac.addEventListener('click', () => {
    location.reload()
})



btn.forEach (button => {
    if (button.dataset.type === 'operator') {
        operate()
        return
    }
    else if (button.dataset.type === 'number') {
        let number = button;
        number.addEventListener('click', (e) => {
            let click = e.target;
            let numberClicked = click.value;
            firstOperand = numberClicked;
            initialValue.append(numberClicked)
            console.log(firstOperand, 'firstOperand')
        })
    }
})

function operate() {
    btn.forEach (operatorButton => {
        if (operatorButton.dataset.type === 'operator') {
            let operator = operatorButton;
            operator.addEventListener('click', (e) => {
                let click = e.target;
                let operatorClicked = click.value
                initialValue.append(operatorClicked)
                // if (operatorClicked === '+') {
                //     add()
                // }
            })
        }
    })
}
