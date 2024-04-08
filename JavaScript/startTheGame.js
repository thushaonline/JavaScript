
startGuessingGame();
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}
var numberToCheck = 17;
var result = checkEvenOrOdd(numberToCheck);
console.log(result);
