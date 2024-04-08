const numbers = [2, 4, 6, 8, 10];
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const totalSum = sumArray(numbers);
console.log("The sum of all elements in the array is:", totalSum);