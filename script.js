/* script.js */
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
const MAX_DISPLAY_LENGTH = 17;

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    if(num2 === 0) {
        alert("You can't divide by zero, bruh!");
        return 0;
    } 
    return (num1 / num2);
}

function operate(num1, operator, num2) {
    switch(operator) {
        case ADD:
            return add(num1, num2);
        case SUBTRACT:
            return subtract(num1,num2);
        case MULTIPLY:
            return multiply(num1, num2);
        case DIVIDE:
            return divide(num1, num2);
        default:
            return "ERROR";
    }
}

function clearAll() {
    display.value = "0";
    num1 = null;
    num2 = null;
    operator = "";
}

function clearDisplay() {
    display.value = "0";
}

function opButtonFunction(event) {
    if (operationButtonClicked) {
        operator = event.target.textContent;
        return;
    }  

    if (operator === "") {
        num1 = Number(display.value);
        operator = event.target.textContent;
        operationButtonClicked = true;
        clearDisplayOnNextButton = true;
    }
    else {
        num2 = Number(display.value);
        num1 = operate(num1, operator, num2);
        console.log(num1.toString().length);
        if (num1.toString().length > MAX_DISPLAY_LENGTH) {
            num1 = num1.toExponential(num1.toString().length - MAX_DISPLAY_LENGTH + 1);
        }
        display.value = num1;
        clearDisplayOnNextButton = true;

        operator = event.target.textContent;
        num2 = null;
    }
    operationButtonClicked = true;
}
function numButtonFunction(event) {
    if (clearDisplayOnNextButton){
        clearDisplay();
        clearDisplayOnNextButton = false;
    }

    operationButtonClicked = false;
    if (display.value === "0")
        display.value = event.target.textContent;
    else if(display.value.length < MAX_DISPLAY_LENGTH)
        display.value += event.target.textContent;
}

function equalButtonFunction(event) {
    if (display.value === "0" || operationButtonClicked)
        return;

    if (num1 && operator != "") {
        num2 = Number(display.value);
        result = operate(num1, operator, num2);
        if (result.toString().length > MAX_DISPLAY_LENGTH) {
            result = parseFloat(result).toExponential(result.toString().length - MAX_DISPLAY_LENGTH + 1);
        }
        display.value = result;

        num1 = null;
        num2 = null;
        operator = "";
    }
    operationButtonClicked = false;
}

function signButtonFunction() {
    if (display.value === "0") 
        return;

    if (Number(display.value) < 0)
        display.value = Math.abs(display.value);
    else 
        display.value = `-${display.value}`; 
}

function decimalButtonFunction() {
    if (clearDisplayOnNextButton) {
        clearDisplayOnNextButton = false;
        display.value = "0.";
    }

    if (display.value[display.value.length - 1] === ".")
        return;

    display.value = `${display.value}.`;
} 

let num1;
let num2;
let operator = "";
let result;

const display = document.getElementById("display");

const numButtons = document.querySelectorAll(".num-button");
const numButtonsArray = Array.from(numButtons);


numButtonsArray.forEach((button) => {
    button.addEventListener("click", numButtonFunction);
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearAll);

const operatorButtons = document.querySelectorAll(".operator:not(.equal)");
const operatorButtonsArray = Array.from(operatorButtons);

operatorButtonsArray.forEach(button => {
    button.addEventListener("click", opButtonFunction);
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", equalButtonFunction);

const signButton = document.querySelector(".sign");
signButton.addEventListener("click", signButtonFunction);

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", decimalButtonFunction);

let operationButtonClicked = false;
let clearDisplayOnNextButton = false;
let decimalButtonClicked = false;



