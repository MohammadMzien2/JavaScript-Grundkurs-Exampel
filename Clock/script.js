// get reference to element with id `clock`
/*
const clockEl = document.querySelector('#clock');

const tick = () => {
	// get current date and time
	const now = new Date();

	// output current time to `#clock`-element
	clockEl.innerText = now.toLocaleTimeString();

	if (now.getDay() ===  7 && now.getHours() >= 15) {
		clockEl.innerText += ' 🥳';
	}

}

// we could stop the time by calling `clearInterval(clockId)`
// start interval-timer with 1000 ms interval
const clockId = setInterval(tick, 1000);
tick();
*/



/* Lite förklarning om klocka
// timestamps
const before = new Date('february 1 2019 7:30:59');
const now = new Date();
// console.log(now.getTime(),before.getTime());

const diff = now.getTime () - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins,hours,days);
console.log(`the blog was written ${days} ago`)


// converting timestamps into date objects

const timestamps = 1675938474990;
console.log(new Date (timestamps));


// year, montts, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamps:', now.getTime());

// 
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocalString());
*/


// building a digital clock Shaun
const clock = document.querySelector('.clock');

const tick = () => {
	const now = new Date();

	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	const html = ` 
	<span> ${h} </span> :
	<span> ${m} </span> :
	<span> ${s} </span> :
	`;

	clock.innerHtml = html;

};

setInterval(tick, 1000);


