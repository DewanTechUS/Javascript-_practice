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
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
 this.getFullName = function() {
        return `${this.firstname} ${this.lastname}`;
}

//Person.oprototype.getBirthYear = function() {
    return this.dob.getFullYear();

}
Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}
//}
//class 

class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// instantiate object
const person1 = new Person ('John', 'Doe', '1990-01-01');
const person2 = new Person ('Dewan', 'Mahmud', '1992-02-02');
console.log(person2);
console.log(person1);
// log the objects
console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());
