
var randomNumber = Math.floor(Math.random() * 100) + 1;

function startGuessingGame() {
    var guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        startGuessingGame(); 
        return;
    }
    if (guess === randomNumber) {
        alert("Congratulations! You guessed the correct number: " + randomNumber);
    } else if (guess < randomNumber) {
        alert("Too low! Try guessing a higher number.");
        startGuessingGame(); 
    } else {
        alert("Too high! Try guessing a lower number.");
        startGuessingGame(); 
    }
}
