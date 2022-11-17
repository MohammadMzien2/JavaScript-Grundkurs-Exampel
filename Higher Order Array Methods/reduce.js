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