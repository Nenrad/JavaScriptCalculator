export var stringToArray = (string) => {
    let stringArray = [];
    for (let i = 0; i < string.length; i++) {
        console.log('function called')
        stringArray.push(string[i]);
    };
    return stringArray;
};

export function calculate(expression) {
    const orderOfOperations = ['^', '÷', 'x', '-', '+']
    let expressionArray = stringToArray(expression);
    console.log(expressionArray)
    orderOfOperations.forEach(element => {
        console.log(element);
        let indexOfOperator = expressionArray.indexOf(element);
        let substitute;
        while (indexOfOperator !== -1) {
            console.log(expressionArray);
            indexOfOperator = expressionArray.indexOf(element);
            switch (element) {
                case '^':
                    substitute = (parseInt(expressionArray[indexOfOperator - 1])**parseInt(expressionArray[indexOfOperator + 1])).toString();
                    expressionArray.splice(indexOfOperator - 1, 3, substitute);
                    break;
                case 'x':
                    substitute = (parseInt(expressionArray[indexOfOperator - 1]) * parseInt(expressionArray[indexOfOperator + 1])).toString();
                    expressionArray.splice(indexOfOperator - 1, 3, substitute);
                    break;
                case '÷':
                    substitute = (parseInt(expressionArray[indexOfOperator - 1]) / parseInt(expressionArray[indexOfOperator + 1])).toString();
                    expressionArray.splice(indexOfOperator - 1, 3, substitute);
                    break;
                case '+':
                    substitute = (parseInt(expressionArray[indexOfOperator - 1]) + parseInt(expressionArray[indexOfOperator + 1])).toString();
                    expressionArray.splice(indexOfOperator - 1, 3, substitute);
                    break;
                case '-':
                    substitute = (parseInt(expressionArray[indexOfOperator - 1]) - parseInt(expressionArray[indexOfOperator + 1])).toString();
                    expressionArray.splice(indexOfOperator - 1, 3, substitute);
                    break;
            }
            indexOfOperator = expressionArray.indexOf(element);
        };
    });
    let answer = expressionArray[0];
    return answer;
};