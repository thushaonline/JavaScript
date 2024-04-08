function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}
const numSides = 6;
const result = rollDice(numSides);
console.log("You rolled a " + result);
