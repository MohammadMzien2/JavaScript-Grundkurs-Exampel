/*let width = 80; //number
let height = 40; //number

console.log(width + height);

let circumference = width + width + height + height;

console.log('circumference of square is:', width+ width +height+height);*/

/*
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

/*

// strict comparison (different types cannot be equal)

console.log(age !== 25);
console.log(age !== '25');


//  arguments & parameters 

const speak = function (name = 'luigi', time ='night'){
console.log(`good ${time} ${name}`);
};

speak();
speak('shaun');


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
title.setAttribute('style', 'margin:50px')
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


// Parents, children & siblings
const article = document.querySelector('article');

console.log(article.children);

 Array.from(article.children);
 console.log(Array.from (article.children));
console.log(article.children);

Array.from(article.children).forEach(child => {
     child.classList.add('article-element');
 });

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);
*/

/*

// Events
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    console.log('you clicked me');
});

const items = document.querySelectorAll('li');
 
items.forEach(item =>{
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e)
        // console.log(e.target); en <li>
        // console.log(item); dubbla <li>
         e.target.style.textDecoration = 'line-through'; // användes för att ta bort innehållet i <li>
    });
});

// Creating och remvoing elements
remove all ul
const ul = document.querySelector('ul');
 ul.remove();

// remove <li> that you click on
const items = document.querySelectorAll('li');
 
items.forEach(item =>{
    item.addEventListener('click', e => {
        e.target.remove();
    });
});

// add elements 
const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // första sätt att göra det
     ul.innerHTML += '<li> something new</li>';
    // andra sätt att göra det
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // li tag flyttar ner 
     ul.append(li);
    // li tag flyttar upp
    ul.prepend(li);
});
const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    });
});
*/

const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);