/*let width = 80; //number
let height = 40; //number

console.log(width + height);

let circumference = width + width + height + height;

console.log('circumference of square is:', width+ width +height+height);*/

//Variabel

/*alert("Hej Javascript från script.js");

 console.log("Hello console!");
 let msg;
 msg = "Woff"

let msg = "Voff";
 console.log(msg);

 msg = "MOOOO";

 console.log(msg);

console.log("Mjau");
console.log("42");
console.log(42);

//Const Variabel
/* let firstName = "Mohammad";
console.log(firstName);

const lastName = "Mz";
    
let fullName = firstName + lastName;

firstName ="Pelle";

// let fullName = firstName + lastName;

console.log(fullName);

let helloMsg ="Hello " + firstName + " " + lastName;

// "Hello Mohammad"
console.log(helloMsg);

helloMsg = "" // empty string 
helloMsg = 0 // number 0
helloMsg = null // har ingen värde 

let x; // Undenfined
x = null // null 

let studentLoveJavaScript = "true"; //string
let studentLovePHP = false; // boolean
*/

/*
console.log ("My name is : Mohammad");
console.log("The teacher's name is: " + myName);

console.log('Hello I am "someone" ');

let msg = 'His name is "' + myName + '" and he knows JavaScript'

console.log(msg);
*/

// metoder

/*let myName = "Mohammad";
console.log ("My name is : " + myName);

console.log("length of name is:", + myName.length);

console.log("first char in name is:", myName[0]);
console.log("second char in name is:", myName[1]);

console.log("Name is:", myName);

console.log("Name SHOUTED is:", myName.toUpperCase()); //"MOHAMMAD"

console.log("Name whispered is:", myName.toLocaleLowerCase()); //"mohammad"

console.log("Position of 'M'", myName.indexOf('M') );  // 0
console.log("Position of last 'm'", myName.lastIndexOf('m') ); // 5

console.log("Position of last 'e'", myName.lastIndexOf('e') );  //-1 does not exist

console.log("Slice of Mohammad:", myName.slice(1, 2)) //"o"
console.log("Tiny name:", myName.substr(1, 2)); //"oh"

console.log("Does name contain 'm'?", myName.includes('m')); //true
console.log("Does name contain 'h'?", myName.includes('h')); //false*/

/*let email = "johan.nordstrom@elevera.org";
email = "jn@thehiveresistance.com";
email = "johan.nordstrom@mil.gov.edu.com";
email = "johan.nordstrom@bbc.co.uk";
console.log("Email is:", email);

//skriv ut positionen för den sista punkten i vaiabeln 'email'. oavsett hur långt eller kort 'email' är
let dotPosition = email.lastIndexOf('.')
console.log("Last dot is at position:", dotPosition);

// skriv ut topp-domän från e-postadressen (alltså som står i 'email' efter den sista punkten)
console.log("The top domain is:", email.slice(dotPosition, 100));*/


"firstnameofstudent" // camelcase
"first_name_of_student" //snake_case 
"First-Name-Of-Student" //Kebab-case

/*let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

//strings

/*console.log('hello world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation

let firstName = 'Philippa';
let lastName = 'Oueis';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//string characters

console.log(fullName[12]);

//string length

console.log(fullName.length);

//string methods

console.log(fullName.toUpperCase());
let result = fullName.toUpperCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);*/

//common string methods

/*let email = 'mario@thenetninja.co.uk';

let result = email.lastIndexOf('n');

let result = email.slice(2,5);

let result = email.substr(4,10);

let result = email.replace('m', 'd');

let result = email.replace('n', 'm');

console.log(result);

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators +, -, *, /, **, %;

/*console.log(10 / 2);
let result = radius % 3;
let result = pi * radius**2;

// order of operation - B I D M A S

let result = 5 * (10-3) **2;
console.log(result);

let likes = 10;

likes = likes + 1;
likes++;
likes--;

likes += 10;
likes-= 5;
likes *=2;
likes /= 2;

console.log(likes);

// NAN - not a number

console.log(5 / 'hello');
console.log(5 * 'hello');

let result = 'the blog has ' + likes + ' likes';
console.log(result);

// template strings


const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// string concatenation way

 let result ='the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
 console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);

let ninjas = 'shaun', 'ryu', 'chun-li'];

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
 console.log(ages[2]);

 let random = ['shaun', 'crystal', 30, 20];
console.log(random);

 console.log(ninjas.length);

  let result =ninjas.concat(['ken', 'crystal']);
  let result =ninjas.push('ken'); //push in a string at the end of the array, för att lägga till någon
 result =ninjas.pop(); // remove the last item in the array, ta bort sista i listan
 student.shift(); //remove the first item in the array, ta bort för i listan
student.unshift(); // add a string to the start of the array, lägg till först i listan



console.log(ninjas);

 let age = null;

 console.log(age, age + 3, `the age is ${age}`);
 */

//  booleans & comparisons
/*
console.log(true, false, "true", "false")
const minAge = 18;
const maxAge = 65;

let age = 18;
console.log("Age is:", age);

console.log("is age greater than minAge?", age > minAge);// 65 > 18? rätt
console.log("is age greater than OR equal to minAge?", age >= minAge); //65 >= 18? rätt

console.log("is age less than maxAge", age < maxAge); // 65 < 65? false
console.log("is age less than maxAge", age <= maxAge); // 65 <= 65? true

console.log("is age the same as  maxAge", age == maxAge); // 65 == 65? true
// methods can return booleans 

let email = 'luigi@thenetninja.co.us';
let names = ['mario', 'luigi', 'toad'];

 let result = email.includes('!');
 let result = names.includes('bowser');

console.log(result);

// comparison operators 

let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age <= 20);

let name = 'shaun';

console.log(name =='shaun');
console.log(name =='shaun');
console.log(name >'Crystal');


let age = 25;
loose comparison (different types can still be equal)

console.log(age !=25);
console.log(age !='25');


// strict comparison (different types cannot be equal)

console.log(age !== 25);
console.log(age !== '25');

// type conversion 
let score ='100';

 score = Number(score);
console.log(score +1);
 console.log(typeof score);

 let result = Number('hello');

let result = String(50);
let result = Boolean (100);
let result = Boolean('');

console.log(result, typeof result);


// for loops
for (let i = 0; i < 5; i++){
console.log('in loop:', i);}
console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i =0; i < names.length; i++){
    // console.log(names[i]);
    let html =`<div>${names[i]}</div>`;
    console.log(html);
}

// while loops 
const names = ['shaun', 'mario', 'luigi'] 
let i = 0;
 while ( i  < 5){
    console.log('in loop', i);
     i++;
}

let i = 0;
while (i<names.length){
    console.log(names[i]);
    i++;
}

// do while loops 

let i = 3;

do{
    console.log('val of i is:', i);
    i++
}while(i<5);

// if statements 

 const age= 25;

 if(age > 20){
     console.log('you are over 20 years old');
}

 const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

 if(ninjas.length > 4){
     console.log("that's a lot of ninjas");
}

const password ='password';

if(password.length >= 8){
    console.log('that password is long enough!');
}

// else if statements 
 /* Workshop 1

let password;
//   password = "password"; // inte giltigt
//   password = "pa$sword"; // giltigt
//    password = "p@ssw%rd"; // giltigt
//   password = "pa$$word"; // giltigt
//    password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
//    password = "such-password-much-secure-very-long"; // giltigt


if(password.length >=6 && password.includes ("@", "%")
){console.log('that password is long!');

}else if(password.length >=8 && password.includes ("$")
){console.log('that password is long enough!');

}else if(password.length >=16)
{console.log('Great that a long password!');

}else if(password.length >=12  && password.includes ("-")
){console.log('that password is secret password!');


}else{
console.log('that password is not long enough');
}

const specialChars = [
"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

//set status variabler to inital value false
let specialChar = false 

//  check for any special chars in password
// for each specailchar in specialchars
// does password include specialchar?
// if true, set hasspecialchars to true
for (let i = 0; i < specialChar.length; i++){
const specailchar = specialChars[i]
if(password.includes(specialChar)){
   hasSpecialChar = true
}
}

// logical operators - OR ││ and AND &&


// logical not (!) switch på platsen på värdet

let user = false;

if(user){
console.log('you must be logged in to continue);
}
console.log(!true);
console.log(!false);

// break and continue 
const scorse  =  [50, 25, 0, 30, 100, 20, 10];



for (let i = 0; i < scorse.length; i++){
if (scorse[i] === 0){
   continue;
} 
console.log('your score:', scorse[i]);
if(scorse[i] === 100){
   console.log('congrats, you got the top score!');
   break;
}
}

// switch statements 
const grade ='A';
switch(grade){
case 'B':
console.log('you got an A!');
break;
case 'B':
console.log('you got an B!');
break;

case 'C':
console.log('you got an C!');
break;

case 'D':
console.log('you got an D!');
break;

case 'E':
console.log('you got an E!');
break;

default:
   console.log('not a valid grade')
}


// variables & block scope 

// const and let is the same thing
const age = 30;

if(true){
const age= 40;
const name= 'shaun';
console.log('inside 1st code block:' ,age, name); 

if(true){
   const age = 50;
   console.log('inside 2st code block', age);
   var test = 'hello';
}
}

console.log('outside code block:' ,age, name, test);

// functions utföra en specifik sak och vi kan göra det hur många gånger och separera koden
// function expression
const speak = function(){
console.log('good day!');
}

greet();
greet();
greet();
speak();
speak();
speak();

// function declaration
 function greet (){  
     alert("Hello, there!");
     console.log("Hello, there!");
 }
greet();

    

//  arguments & parameters 

const speak = function (name = 'luigi', time ='night'){
console.log(`good ${time} ${name}`);
};

speak();
speak('shaun');

//  returning values 

const speak = function(name = 'luigi', time = 'night'){
 console.log(`good ${time} ${night}`);
};

const calcArea = function (radius) {
return  3.14 * radius ** 2;
}
const area = calcArea(5);
console.log(area);

// Regular function 
const calcArea = function(radius){
 return 3.14 * radius**2;
}

//  Arrow funtion
const calcArea = radius =>  3.14 *radius**2;

// Arrow function
const clacCircleArea =  (radius) => {
    return 3.14159 * radius ** 5;
}

const area = calcArea(5);
console.log('area is:', area); 


// practise arrow functions

const greet = function () {
  return 'hello, world';
};


const greet = () => 'hello, world';
const result = greet();
console.log(result);


const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
      total += products[i] + products[i] * tax;
  }
  return total;
}
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
      total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2))

const name ='shaun';

// functions 

const greet = () => 'hello';

let resutlOne = greet();
console.log(resutlOne);

// methods

let resultTwo = name.toUpperCase()
console.log(resultTwo)


// callbacks & foreach


const nagUser = (txt) => {
    alert(txt);
}

const log = (txt) => {
    console.log(txt);
}

const  makeMoreInteresting = (txt, callback) => {
    let interesting = txt + "!!!!!!!!!!!!";
    callback(interesting);
}
makeMoreInteresting ("this is so much fun", nagUser);

let students =["Johan","Pella", "kajsa", "Maja", "Kajan"];
for (let i = 0; i< students.length; i++) {
    console.log(`students at index ${i} is: ${students [i]}`);
}
 students.forEach (function(item, index, arr){
     console.log(`student at index ${index} is: ${item}`, arr);
 })


const myFunc = (callbackFunc) => {
    // do something
   let value = 50;
   callbackFunc(value);

 };

myFunc(value => {
//     //do something
  console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li',];
const logPerson =(person, index) => {
   console.log(`${index}-hello ${person}`);
}
people.forEach (logPerson);

people.forEach ((person, index) => {
   console.log(index, person);
});

//  Get a refernce to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li',];

let html = ``;

people.forEach(person => {
// create html template 
html += `<li style ="color: purple"> ${person}</li>`;
})

console.log(html);
ul.innerHTML = html;


// truthy / falsy 

let username = "";
let msg; // "welcome anonymous visitor" / "welcome Mohammad!"

if (username){
    msg = "Welcome, anonymous visitor";
}

msg = `Welcome ${username}!`;
console.log(msg);


//ternary operator

let msg;

 let username = "Mohammad";
if (username){
    let msg = "You have a name, wow!";

}else {
    let msg = " Why you has no name!";
}

let msg = (username) 
?  "You have a name, wow!"
 : "You has no name?!!";
console.log(msg);


const getRandomNumber = (max = 10) =>{
    return Math.ceil(Math.random() * max);
}
let numberToGuess = getRandomNumber(10);
let bigNumberToGuess = getRandomNumber(20);

// Extra function
let answer = prompt("please enter something")
console.log("Your answer was:", answer)


// Guess the number

const getRandomNumber = (max = 10) => {
    return Math.ceil( Math.random() * max );
}

let exitGame = false;
let highscore = null;

while (exitGame === false) {     // while (!exitGame) {
    let numberToGuess = getRandomNumber();
    let continueGame = true;
    let tries = 0;

    console.log("numberToGuess:", numberToGuess);

    while (continueGame) {
        // Ask user for guess
        let guess = Number( prompt("Please guess a number between 1-10") );
        console.log("Guessed number:", guess, typeof guess);

        if (guess === numberToGuess) {
            // Guess was correct
            // Increase number of guesses made
            tries++;

            // we can haz highscore?
            if (highscore) {
                // new highscore?
                if (tries < highscore) {
                    console.log(`YAY NEW HIGHSCORE!`);
                    highscore = tries;
                } else {
                    console.log(`Sorry, no new highscore. Your current highscore is ${highscore}.`);
                }
            } else {
                highscore = tries;
            }

            console.log("Guess was correct! ");
            alert(`Great success! You guessed the correct answer in ${tries} tries.`);
            continueGame = false;

        } else if (guess === 0) {
            // User rage-quit
            console.log("Guess was 0, quitting game");
            alert(`Y U GIVE UP AFTER ONLY ${tries} TRIES?!`);
            continueGame = false;
            exitGame = true;

        } else if (guess > numberToGuess) {
            // Guess was too high
            // Increase number of guesses made
            tries++;
            console.log("Guess was too high");
            alert("Guess was too high");

        } else if (guess < numberToGuess) {
            // Guess was too low
            // Increase number of guesses made
            tries++;
            console.log("Guess was too low ");
            alert("Guess was too low");

        } else {
            // Guess was not valid
            console.log("That's not a number");
            alert("That's not a number");
        }
    }
}
console.log("Game ended");

// Object literals
let user = {
    name: 'crystal', 
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs : ['why mac & cheese rules', '10 things to make with marmite']
};
console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['location']);
user ['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);


// adding methodes 

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function () {
    console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){

    }
};
user.login();
user.logout();
const name = 'mario';
name.toUpperCase();


// this keyword

 let user = {
     name: 'crystal',
     age: 30,
     email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
   login: (){
       console.log('the user logged in');
   },
   logout: (){
       console.log('the user logged out');
   },
       logBlogs:(){
        console.log(this.blogs);
                 console.log('this user has written the following blogs:');
        this.blogs.forEach( blog => {
             console.log(blog);
         });
     };
 };
 user.logBlogs();
 console.log(this);

 objects in arrays
 const blogs = [
     {title: `why mac & cheese rules`, likes:30},
     {title:'10 things to make with marmite'}
 ];
 console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: `why mac & cheese rules`, likes:30},
        {title:'10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        //  console.log(this.blogs);
         console.log('this user has written the following blogs:');
         this.blogs.forEach( blog => {
            console.log(blog.title, blog.likes);
        });
    }
};
user.logBlogs();
console.log(this);

// Math object 
// omkretsen och area för en box och circel
const calcbBoxCircumference = function (width, height) {
    const circumference = width * 2 + height * 2;
    return circumference;

}
const calcBoxArea = function (width, height){
    const area= width * height;
    return area;
}


const boxCircumference = calcbBoxCircumference(20, 40);
console.log(boxCircumference);

const boxCircumference2 = calcbBoxCircumference(60, 120);
console.log(boxCircumference2);

const w = 20;
const h = 40;
const ci = calcbBoxCircumference(w, h);
if (ci > 100){
    console.log ("thats a big box");
}else { 
    console.log("smal box"); 
}

 Math / Math.PI = 3.14 / Math.E 2.718281828459045 / Math.round () avrund   
 Math.ceil() avrunda uppåt / Math.floor avrunda ner åt/ Math.random(X)

let randomNumber = Math.random(); // 0- 0.9999999999
let randomNumberberMultipiled = randomNumber * 10; // 0- 0.999999999
let roundedRandomNumberMultipled = Math.ceil(randomNumberberMultipiled); // 1-10
let randNum = Math.ceil(Math.random() * 10);

console.log (randNum);

// Primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//  reference values
 const userOne = {name: 'ryu', age: 30};
 const userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);

// The query selector
const para = document.querySelector('div.error');

console.log(para);

// the multipale selector
const paras = document.querySelectorAll('p');
const erros = document.querySelectorAll('.error')
paras.forEach(para => {
    console.log(para);
})
console.log(paras [2]);


// Get an element by ID 
const title = document.getElementById('page-title');
console.log(title);

// Get elements by thier class name
const errors = document.getElementsByClassName('error');
console.log(errors[0]);

// Get elements by thier tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras [0]);

// inner text in this element
const para = document.querySelector('p');

 console.log(para.innerText); 

// change the text in this paragraph/ adding more text in the paragraph
 para.innerText += 'ninjas are awesom!';

// All text in the html / adding more text in foreach one
const paras = document.querySelectorAll('p');
 paras.forEach(para =>{
   console.log(para.innerText);
  para.innerText += 'new text';
 });

// change the html inside 
 const content = document.querySelector ('.content');

 console.log(content.innerHTML);

 content.innerHTML += ' <h2> This is a new h2 </h2>'

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person =>{
 content.inneHTML +=`<p>${person}</p>`;
});

// change the class and the herf link and the color
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'the net ninja website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute ('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green');

// adding and removing styles
const title = document.querySelector('h1');
// this way not so good the another method is better
// title.setAttribute('style', 'margin:50px')
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
// man använder fontSize istället för font-size
title.style.fontSize = '60px';
// margin går bort
title.style.margin = '';


// adding and removing classes //innertext för alla synlig text i html // ContentText visar alla text oavsett om den är gömt eller inte
const content = document.querySelector('p');
 console.log(content.classList);
 content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

// denna metod för alla paragraph med error ord för gör den till class
const paras = document.querySelectorAll('p');
paras.forEach (p =>{
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});
// Toggle methodes
// en toggle för lägga en mer class
// två toggle för remove class 
const tittle = document.querySelector('.tittle');
tittle.classList.toggle('test');
tittle.classList.toggle('test');
*/

// Parents, children & siblings