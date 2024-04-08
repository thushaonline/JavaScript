
//Math Object//

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var minRange = 10;
  var maxRange = 20;
  var randomNumber = getRandomNumber(minRange, maxRange);
  console.log("Random number between", minRange, "and", maxRange, "is:", randomNumber);
  