function countdown(startingNumber) {
    if (typeof startingNumber !== 'number' || startingNumber < 0 || !Number.isInteger(startingNumber)) {
        console.log("Please provide a valid positive integer as starting number.");
        return;
    }
    let counter = startingNumber;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}
const startingNumber = 10;
countdown(startingNumber);
