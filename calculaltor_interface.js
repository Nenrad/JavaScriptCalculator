import {calculate} from "./calculator.js";

const display = document.getElementById('display');
const btnElements = document.getElementsByClassName('btn');
const resetBtnElement = document.getElementById('btn--reset');
const equalsBtnElement = document.getElementById('btn--equals');

console.log("hello");
for (let i=0; i < btnElements.length; i++) {
    btnElements[i].addEventListener('click', function() {
        let currentValue = display.getAttribute('value');
        display.setAttribute('value', `${currentValue + document.getElementById(btnElements[i].id).textContent}`);
        console.log('clicking');
    });
    console.log('looping');
};

resetBtnElement.addEventListener('click', function() {
    display.setAttribute('value', '')
});

equalsBtnElement.addEventListener('click', function() {
    let answer = calculate(display.getAttribute('value'));
    display.setAttribute('value',`=${answer}`);
});