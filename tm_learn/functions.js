/*function addnums(num1, num2) {
    console.log(num1 + num2);
}
*/
//addnums(5,4); // Outputs: 9

/*function addnums(num1 = 1, num2 = 1) // Default parameters  
{
    return num1 + num2;
}
//addnums(5,4); // Returns: 9
//addnums();    // Returns: 2
console.log(addnums(5, 5)); // Outputs: 10


*/

// arrow function
const addnums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addnums(5, 5)); // Outputs: 10

const addnum = num1 => num1 + 5; // single parameter no paranthesis
console.log(addnum(10)); // Outputs: 15