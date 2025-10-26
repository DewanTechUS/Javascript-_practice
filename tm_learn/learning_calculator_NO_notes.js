
let number1 = parseFloat(prompt(" 1st number:")); // this is a number that user inputs
 let operator = prompt("You can enter +, -, *, or /:"); // this is a operator mus put it in middle of two numbers
let number2 = parseFloat(prompt(" 2nd number:")); // this is a number that user inputs
let result; 

if (operator === "+") {
    result = number1 + number2;  // addition
} else if (operator === "-") {
    result = number1 - number2;  // subtraction
} else if (operator === "*") {
    result = number1 * number2; // multiplication
} else if (operator === "/") {
    result = number1 / number2; // division
} else {
    result = "what are you doing rocky? wrong operator use +, -, * or / !"; //give error if invalid operator
}
alert("Your Result is " + result); 