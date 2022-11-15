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
*/

// filter out all numbers större än => 25
const largeNumbers = numbers.filter((num) => {  
    if (num >= 25) {
        return true; //Yes this number should be in the new array 
    } else {
        return false; // NOOO, exclude this number from the new array
    }
});
console.log("lagre numbers:", largeNumbers);