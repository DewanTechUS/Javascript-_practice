const person = {
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'traveling', 'swimming'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};
console.log(person.address['city']);
//console.log(person.address.city);


// Destructuring assignment
// Extracting properties from the person object

const { firstName, lastName, address: {city}  } = person;

// Modifying object properties
person.age = 31; // Update age
person.email = 'john.doe@example.com'; // Add email
console.log(person);

