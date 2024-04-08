
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero!";
    }
}
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");

var result;
switch (operator) {
    case '+':
        result = add(number1, number2);
        break;
    case '-':
        result = subtract(number1, number2);
        break;
    case '*':
        result = multiply(number1, number2);
        break;
    case '/':
        result = divide(number1, number2);
        break;
    default:
        result = "Invalid operator!";
}
console.log("Result:", result);
