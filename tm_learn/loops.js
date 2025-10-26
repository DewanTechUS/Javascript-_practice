//for 
// For loop: repeats code a set number of times
// for (initialization; condition; increment)
// let is used to declare a block-scoped variable for the loop counter
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

/*for (let i = 1; i < 10; i++) {

    //console.log(i);
    console.log(`For Loop number ${i}`);
}

//while
/*let i = 0;
while (i < 10) {
    //console.log(i);
    console.log(`While Loop number ${i}`);
    i++;
}
*/
/*for (let i = 0; i < todos.length; i++) {
     console.log(todos[i].text) ;

}
*/
/*for (let todo of todos) {
    console.log(todo.text);
}
*/
// for Each, map, filter
// forEach - loops through array
// map - creates a new array from calling a function for each array element
// filter - creates a new array from elements that pass a condition 
/*
todos.forEach(function(todo) {
    console.log(todo.text);
});*/

/*todos.map(function(todo) {
    return todo.text;
});

*/

//filter
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);
*/

//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);
