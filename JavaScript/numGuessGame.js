
function guessNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    let attempts = 3;
    let guessedCorrectly = false;

    console.log(`Guess a number between ${min} and ${max}`);

    while (attempts > 0) {
        const userGuess = parseInt(prompt(`Attempts left: ${attempts}\nEnter your guess:`));
        if (isNaN(userGuess)) {
            console.log("Please enter a valid number.");
            continue;
        }
        if (userGuess === randomNumber) {
            console.log("Congratulations! You guessed the correct number!");
            guessedCorrectly = true;
            break;
        } else if (userGuess < randomNumber) {
            console.log("Too low! Try a higher number.");
        } else {
            console.log("Too high! Try a lower number.");
        }
        attempts--;
    }
    if (!guessedCorrectly) {
        console.log(`Sorry, you ran out of attempts. The correct number was ${randomNumber}.`);
    }
}
const minRange = parseInt(prompt("Enter the minimum number of the range:"));
const maxRange = parseInt(prompt("Enter the maximum number of the range:"));

if (!isNaN(minRange) && !isNaN(maxRange) && minRange < maxRange) {
    guessNumber(minRange, maxRange);
} else {
    console.log("Please enter valid range values (minimum number should be less than maximum number).");
}
