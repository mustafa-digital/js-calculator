/* script.js */
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case ADD:
            return add(num1, num2);
            break;
        case SUBTRACT:
            return subtract(num1,num2);
            break;
        case MULTIPLY:
            return multiply(num1, num2);
            break;
        case DIVIDE:
            return divide(num1, num2);
            break;
        default:
            return "ERROR";
    }
}

let num1;
let num2;
let operator;

const display = document.getElementById("display");
display.value = "Hello";
