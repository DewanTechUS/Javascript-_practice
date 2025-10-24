//alert('Hello, world!');
//alert('Hello, world!');
//console.log('Hello, world!');
//console.error('This is an error message.');
//console.warn('This is a warning message.');
//console.info('This is an informational message.');
//ver-Old, let, const
//let age = 30;
//age = 31;
//console.log(age);
//let score = 100;
//score = 150;
//console.log(score);

// strings, number, boolean, null, undefined
//string
//premitive data types
//const name = 'John';
//number
//const age = 25;
//float
//const rating = 4.5;
//boolean
//const isCool = true;
//null
//const x = null;
//undefined
//const y = undefined;
//
//let z;
//console.log(typeof name);

// strings, number, boolean, null, undefined

//concatenation
//const name = 'John';
//const age = 25;

//console.log('My name is ' + name + ' and I am ' + age);

//template strings
//console.log(`My name is ${name} and I am ${age}`);
//string methods
//const s= 'Hello World';
//console.log(s.toUpperCase());

// arrays - variables that hold multiple values
//const numbers = new Array(1,2,3,4,5);
/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
// object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    //adding array inside object
    hobbies: ['reading', 'traveling', 'swimming'],
    //adding nested object
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};
//console.log(person, person.firstName, person.hobbies[1]);
console.log(person.hobbies[1]);

const { firstName, lastName, address: { city } } = person;
console.log(firstName, city);
//adding property to object
person.email = 'john.doe@example.com';
console.log(person);
*/
//arrays of objects
const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist appointment',
        isCompleted: false
    }
];  
console.log(todos);

//JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
//for loop
for(let i = 0; i < 10; i++) {
    console.log(`For loop iteration: ${i}`);
}
//while loop
let i = 0;
while(i < 10) {
    console.log(`While loop iteration: ${i}`);
   i++;
}