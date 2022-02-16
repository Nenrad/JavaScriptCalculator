import { calculate } from "./calculator.js";

const display = document.getElementById("display");
const btnElements = document.getElementsByClassName("btn");
const resetBtnElement = document.getElementById("btn--reset");
const equalsBtnElement = document.getElementById("btn--equals");

btnElements[0].addEventListener("click", function () {
  var copyText = display;

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied to clipboard");
});

for (let i = 1; i < btnElements.length; i++) {
  btnElements[i].addEventListener("click", function () {
    let currentValue = display.getAttribute("value");
    display.setAttribute(
      "value",
      `${currentValue + document.getElementById(btnElements[i].id).textContent}`
    );
  });
}

resetBtnElement.addEventListener("click", function () {
  display.setAttribute("value", "");
});

equalsBtnElement.addEventListener("click", function () {
  let answer = calculate(display.getAttribute("value"));
  display.setAttribute("value", `${answer}`);
});
