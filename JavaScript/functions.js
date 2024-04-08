function addNumbers(num1, num2) {
    return num1 + num2;
}
const result = addNumbers(5, 7);
console.log(result);

var globalVariable = "I am a global variable";

function myFunction() {
    var localVariable = "I am a local variable";
    
    console.log("Inside function:");
    console.log("Local variable:", localVariable);
    console.log("Global variable:", globalVariable);
}
console.log("Outside function:");
console.log("Global variable:", globalVariable);

myFunction();