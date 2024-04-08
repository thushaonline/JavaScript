function executeWithDelay(callback, delay) {
    setTimeout(callback, delay);
  }
  function myCallback() {
    console.log("This is the callback function!");
  } 
  const delayMilliseconds = 2000;
  executeWithDelay(myCallback, delayMilliseconds);