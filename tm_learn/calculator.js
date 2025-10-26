//i need practice with prompts, alerts, and basic math operations in JS

 /*What happens step-by-step?
1 Ask user to type a number
2 Take that text
 3 Convert text to a number
4 Now you can do math with it
5 prompt() => asks the user to type something
 6 parseFloat() => converts that text into a real number
*/

let number1 = parseFloat(prompt(" 1st number:")); // this is a number that user inputs

  let operator = prompt("You can enter +, -, *, or /:"); // this is a operator mus put it in middle of two numbers

let number2 = parseFloat(prompt(" 2nd number:")); // this is a number that user inputs



 // this will hold the result

let result; // variable to store the result

// perform calculation based on the operator

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

// display the result to the user but i need more practice with alerts and prompts

alert("Your Result is " + result); //use alert to show result on chrome

//console.log("Result: " + result); // log to show result in console

/* for practices
Part________________Meaning
let_________________create a variable
number1_____________name of our variable
prompt()____________ask user for input
parseFloat()________convert to number */