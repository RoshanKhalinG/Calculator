// Selecting all necessary elements
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const allClearEl = document.querySelector('.all-clear');
const lastEntityClearEl = document.querySelector('.last-entity-clear');
const equalEl = document.querySelector('.equal');
const numberEls = document.querySelectorAll('.number');
const operationEls = document.querySelectorAll('.operation');

let display1Num = '';
let display2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// Function to handle number button clicks
numberEls.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        display2Num += e.target.innerText;
        display2El.innerText = display2Num;
    });
});

// Function to handle operation button clicks
operationEls.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!display2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (display1Num && display2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(display2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    });
});

// Function to clear variables and update display
function clearVar(name = '') {
    display1Num += display2Num + ' ' + name + ' ';
    display1El.innerText = display1Num;
    display2El.innerText = '';
    display2Num = '';
}

// Function to handle the mathematical operations
function mathOperation() {
    if (lastOperation === '*') {
        result = parseFloat(result) * parseFloat(display2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(display2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(display2Num);
    }
}

// Function to handle the equal button click
equalEl.addEventListener('click', (e) => {
    if (!display2Num || !display1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    display2Num = result;
    display1Num = '';
});

// Function to handle the all-clear button click
allClearEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    display1Num = '';
    display2Num = '';
    result = '';
    lastOperation = '';
    haveDot = false;
});

// Function to handle the clear last entity button click
lastEntityClearEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    display2Num = '';
});
