/*
.sort()
.fillter()
.find()
.map()
.reduce()
*/
//  clone an Array
//  Shuffle an Array
//numbers 
/*

const numbers = [49, 5, 21, 50, 24, 20, 47, ]
console.log("numbers:", numbers)
// find fist large number
const largeNumbers = numbers.filter(num => num=> 25);
const firstLargeNumber = numbers.find(num => num=> 25); // 50
console.log("First number >= 25 is:", firstLargeNumber)


const students = [
    {
        name: "johan",
        points: 13,
    },
    {
        name: "Saman",
        points: 3,
    },
    {
        name: "alicia",
        points: 42,
    },
    {
        name: "Elliot",
        points: 88,
    },
    {
        name: "Maja",
        points: 35,
    },
];
// find first student which has godkänt (>= 40)
const firstPassedStudent = students.find(student =>  (student.points >= 40));
console.log("First passed student:", firstPassedStudent);
*/

const scores = [10, 5, 0, 40, 30, 10, 90, 70];

const firstHighScore = scores.find (score =>  score > 50);

console.log(firstHighScore);
