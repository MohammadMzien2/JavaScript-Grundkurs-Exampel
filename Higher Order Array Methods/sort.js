/*
.sort()
.fillter()
.find()
.map()
.reduce()
*/
//  clone an Array
//  Shuffle an Array

// names
/*
const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

// sort array alfabetet
names.sort();
console.log("Names in proper order:", names);

// sort array bak och fram
names.reverse();
console.log("Names in reverse order:", names);


const numbers = [49, 5, 21, 50, 24, 20, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52,];
console.log("numbers in chaos:", numbers);

// sort numbers
//numbers.sort();
//console.log("numbers in proper:", numbers);

// sort numbers Numerically

numbers.sort( (a,b) => { // a = 8, b = 4


   // console.log(`comparing, a = ${a} b= ${b}`);

   // shorthand
   return (a - b);


// if a is less than b (i. e .a should be sorted BEFORE b)
if (a < b){

   console.log("a is less than b")

return -1;
}

//if a is greater then b (i.e. a should bes prted after b)
if (a > b){
   console.log("b is less than a");
   return 1;
}
// a must be equal to b
   console.log("a is equal to b")
   return 0;

});
console.log("Numbers in proper! order:", numbers);

// same as this 
numbers.sort( (a,b) => {
  return a - b;
});


// Even shorter number sorting 
numbers.sort( (a,b) =>  a - b
);

console.log("numbers in proper! order:", numbers);  
*/
// we can even sort objects based on a property
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

// sortera alfabetet

students.sort( (a, b) => {
	if (a.name.toUpperCase() < b.name.toUpperCase()) {
		return -1;
	}
	if (a.name.toUpperCase() > b.name.toUpperCase()) {
		return 1;
	}

	return 0;
});

console.log("Student-objects sorted by name:", students);

/*
console.log("Student-objects sorted by name:", students);


// sortera med poäng 
console.log("students before sort:", students);

students.sort((a, b) => {
    // short hand 
    return (a.points - b.points);

    // is a less than b (i.e. a should be sorted BEFORE b)
    if (a.points < b.points){
        return -1;
    }
    // is a greater than b (i.e. a should be sorted AFTER b)
    if (a.points > b.points){

    return 1; 
    }

    // is equal to b 
    return 0;
});*/