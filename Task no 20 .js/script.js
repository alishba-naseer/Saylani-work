let currentExpression = '';
let result = '';

function appendNumber(number) {
    if (result && !currentExpression.includes('=')) {
        currentExpression = '';
        result = '';
    }
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentExpression === '') return;
    if (['+', '-', '*', '/'].includes(currentExpression.slice(-1))) return;
    currentExpression += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    result = '';
    updateDisplay();
}
function deleteLast() {
    if (currentExpression === '') return;
    if (currentExpression.slice(-1) === ' ') {
        currentExpression = currentExpression.slice(0, -3);
    } else {
        currentExpression = currentExpression.slice(0, -1);
    }
    updateDisplay();
}

function calculateResult() {
    try {
        result = eval(currentExpression).toString();
        currentExpression += '' ;
        updateDisplay(true);
    } catch (error) {
        result = 'Error';
        updateDisplay(true);
    }
}

function updateDisplay(isResult = false) {
    const expressionElement = document.getElementById('expression');
    const resultElement = document.getElementById('result');

    expressionElement.textContent = currentExpression;
    if (isResult) {
        resultElement.textContent = result;
    } else {
        resultElement.textContent = '';
    }
}
function calculatePercentage() {
    try {
        if (currentExpression === '') return;
        result = (eval(currentExpression) / 100).toString();
        currentExpression += '' + result;
        updateDisplay(true);
    } catch (error) {
        result = 'Error';
        updateDisplay(true);
    }
}
