
const PI = 3.14159;

function calculateCircumference(radius) {
    return 2 * PI * radius;
}

var radius = parseFloat(prompt("Enter the radius of the circle:"));

if (!isNaN(radius) && radius > 0) {
    var circumference = calculateCircumference(radius);

    console.log("The circumference of the circle with radius", radius, "is:", circumference);
} else {
    
    console.log("Invalid input. Please enter a valid positive number for the radius.");
}