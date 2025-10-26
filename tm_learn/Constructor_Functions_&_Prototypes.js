// constructor function

/*

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// instantiate object
const person1 = new Person('John', 'Doe', '1990-01-01');
const person2 = new Person('Jane', 'Doe', '1992-02-02');

// log the objects
console.log(person1.dob);
console.log(person2.dob); 
*/

// costructor function
function Person (firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;

}

// instantiate object
const person1 = new Person ('John', 'Doe', '1990-01-01');
const person2 = new Person ('Dewan', 'Mahmud', '1992-02-02');
console.log(person2.dob);