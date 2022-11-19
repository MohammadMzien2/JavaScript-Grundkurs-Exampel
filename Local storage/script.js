// store data in local storage
//turn data to string exampel 
/*
localStorage.setItem('name', 'mario');
 localStorage.setItem('age', 50);


// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

//updating data
localStorage.setItem('name', 'luigi');
localStorage.age = '40'
name = localStorage.getItem('name');
age = localStorage.getItem('age')
console.log(name, age);


// deleting data from local storage
// remove singel item

localStorage.removeItem('name');
//clear evreything
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age')

console.log(name, age);
*/

// Stringifying & parsing data
const todos = [
        {'text': 'paly mariokart', 'auother': 'shaun'},
        {'text': 'buy som milk', 'auother': 'mario'},
        {'text': 'buy som bread', 'auother': 'luigi'}
];
// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));
