let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = 0;

const screen = document.querySelector('.screen');

const numberButtons = document.querySelectorAll('.numpad-button');
numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        currentInput += button.value;
        screen.textContent = currentInput;
    });
});

const operatorButtons = document.querySelectorAll('.operators-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (currentInput) {
            firstNumber = currentInput;
            operator = button.value;
            currentInput = '';
            screen.textContent = operator;
        }
    });
});

const equalsButton = document.querySelector('.numpad-button.equals');
equalsButton.addEventListener('click', function () {
    if (firstNumber && currentInput) {
        secondNumber = currentInput;
        result = calculate(+firstNumber, +secondNumber, operator);
        screen.textContent = result;
        currentInput = result.toString();
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

const deleteButton = document.querySelector('.numpad-button.delete');
deleteButton.addEventListener('click', function () {
    currentInput = '';
    operator = '';
    firstNumber = '';
    secondNumber = '';
    result = 0;
    screen.textContent = '0';
})