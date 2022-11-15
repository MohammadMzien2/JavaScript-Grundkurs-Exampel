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

const numbers = [49, 5, 21, 50, 24, 20, 47,]
console.log("Original numbers:", numbers);

// put all numbers >= större än 25 in a new array
/*
const largeNumbers =[];
numbers.forEach(num =>{
    if(num >= 25){
        largeNumbers.push(num);
    }
});


// filter out all numbers större än => 25
const largeNumbers = numbers.filter((num) => { 
    return num >= 25;

    if (num >= 25) {
        return true; //Yes this number should be in the new array 
    } else {
        return false; // NOOO, exclude this number from the new array
    }
});

// förkortning
const largeNumbers = numbers.filter(num>= num>= 25);
console.log("lagre numbers:", largeNumbers);
*/

/*
const names = ["Johan", "kajsa", "Bo", "Li"];
const longishNames = names.filter(name => name.length > 2);
console.log("Longish names:", longishNames);
*/

const students = [
    {
        name: "johan",
        points: 1337,
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

// vilka studenter som är godkända
const passed = students.filter(student => student.points >= 20);
console.log("Students who passed the exam:", passed)