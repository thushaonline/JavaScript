const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Original Array:", array);
console.log("Sum of all elements:", sum);
