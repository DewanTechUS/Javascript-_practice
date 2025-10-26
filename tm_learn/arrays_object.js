const todo = [
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

console.log(todo[1].text);
// Convert to JSON string in console
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);