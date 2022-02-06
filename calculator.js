export var stringToArray = (string) => {
  let stringArray = [];
  let offset = 0;
  let currentElement;
  let j = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (isNaN(string[i]) && string[i] != ".") {
      stringArray.push(string[i]);
      j = stringArray.length;
    } else {
      currentElement = stringArray[j] || "";
      stringArray[j] = currentElement + string[i];
    }
  }
  return stringArray;
};

export function calculate(expression) {
  const orderOfOperations = ["^", "÷", "x", "-", "+"];
  let expressionArray = stringToArray(expression);
  orderOfOperations.forEach((element) => {
    let indexOfOperator = expressionArray.indexOf(element);
    let substitute;
    while (indexOfOperator !== -1) {
      indexOfOperator = expressionArray.indexOf(element);
      switch (element) {
        case "^":
          substitute = (
            parseFloat(expressionArray[indexOfOperator - 1]) **
            parseFloat(expressionArray[indexOfOperator + 1])
          ).toString();
          expressionArray.splice(indexOfOperator - 1, 3, substitute);
          break;
        case "x":
          substitute = (
            parseFloat(expressionArray[indexOfOperator - 1]) *
            parseFloat(expressionArray[indexOfOperator + 1])
          ).toString();
          expressionArray.splice(indexOfOperator - 1, 3, substitute);
          break;
        case "÷":
          substitute = (
            parseFloat(expressionArray[indexOfOperator - 1]) /
            parseFloat(expressionArray[indexOfOperator + 1])
          ).toString();
          expressionArray.splice(indexOfOperator - 1, 3, substitute);
          break;
        case "+":
          substitute = (
            parseFloat(expressionArray[indexOfOperator - 1]) +
            parseFloat(expressionArray[indexOfOperator + 1])
          ).toString();
          expressionArray.splice(indexOfOperator - 1, 3, substitute);
          break;
        case "-":
          substitute = (
            parseFloat(expressionArray[indexOfOperator - 1]) -
            parseFloat(expressionArray[indexOfOperator + 1])
          ).toString();
          expressionArray.splice(indexOfOperator - 1, 3, substitute);
          break;
      }
      indexOfOperator = expressionArray.indexOf(element);
    }
  });
  let answer = expressionArray[0];
  return answer;
}
