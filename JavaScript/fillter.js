const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = array.filter(element => {
  return element % 2 !== 0;
});
console.log("Original Array:", array);
console.log("Filtered Array (Odd Numbers Only):", filteredArray)