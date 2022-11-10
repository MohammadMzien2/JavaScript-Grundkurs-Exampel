// Event bubbling and delegation
/*
const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // andra sätt att göra det
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // li tag flyttar upp
    ul.prepend(li);
});
 const items = document.querySelectorAll('li');

 items.forEach(item => {
     item.addEventListener('click', e => {
        console.log('event in LI');
        e.stopPropagation();
         e.target.remove();
     });
});
// delete all thing 
ul.addEventListener('click', e => {
    console.log('event in UL');
if(e.target.tagName ==='LI'){
    e.target.remove();
    e.target.classList.toggle();
    e.target.classList.add();
}
});

// More events
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI! my content is copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
//console.log(e);
//console.log(e.offsetX, e.offsetY);
box.textContent = `x pos- ${e.offsetX} y pos -${e.offsetY}`;
});

document.addEventListener('wheel', e =>{
    console.log(e.pageX, e.pageY)
});


 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists