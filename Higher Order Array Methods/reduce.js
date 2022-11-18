/***
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 


// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce ((acc, curr) => {
//     if ( curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

const scores = [
    {palyer:'mario', score: 70},
    {palyere:'yoshi',score: 30},
    {palyer:'mario', score: 70},
    {palyer:'crystal',score: 60},
    {palyer:'mario', score: 90},
    {palyere:'yoshi',score: 30},
    {palyer:'mario', score: 30},
    {palyer:'crystal',score: 60},
    {palyer:'mario', score: 50},
    {palyere:'yoshi',score: 30},
    {palyer:'mario', score: 80},
    {palyer:'crystal',score: 60}
];

const marioTotal = scores.reduce((acc, curr) => {
    if(curr.palyer === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);
*/


 //* Numbers
// Old Way

 const simple_numbers = [ 3, 7, 13, 19];
 /*
let sum = 0;
simple_numbers.forEach(num => {
    sum += num;
});
console.log("the sum of all the number is:", sum);


// New way with reduce
const total_sum = simple_numbers.reduce((sum, num) => {
    console.log(`sum is ${sum} and num is ${num}`, sum);
    return sum + num;
}, 0);

const total_sum2 = simple_numbers.reduce((sum, num) => sum + num, 0);

console.log("the sum of all the number (the cool way) is:", total_sum);
*/

/*
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
 
const numbers_sum = numbers.reduce( (prevValue, curr) => {
    return prevValue + curr;
}, 0);
console.log(`Reducer complete, numbers_sum is ${numbers_sum}`);
*/
 

  //* Students
  /*
 const students = [
     {
         name: "Johan",
         points: 13,
     },
     {
         name: "Peter",
         points: 3,
     },
     {
         name: "Alicia",
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
const total_points = students.reduce((sum, student) => {
    return sum + student.points;
}, 0);
console.log("Total points for all students:", total_points);
 */

 
 //* Products 
 const products = [
     {
         sku: "CORR-BWL",
         name: "Corrosive bowl",
         in_stock: 321,
         price: 0.99,
     },
     {
         sku: "CTN-SPCE",
         name: "Cotton spice rack",
         in_stock: 2,
         price: 149.99,
     },
     {
         sku: "GOOD-COOKIES",
         name: "Inside-out Oreo cookies",
         in_stock: 18,
         price: 2.49,
     },
     {
         sku: "BACK-BREAKER",
         name: "The uncomfortable broom",
         in_stock: 1,
         price: 28.65,
     },
 ];
  // calculate total stock value

 const totat_stock_value = products.reduce((sum, product) => {
    return sum + product.price * product.in_stock;
}, 0);

console.log(`the total stock value is $ ${totat_stock_value}`);


