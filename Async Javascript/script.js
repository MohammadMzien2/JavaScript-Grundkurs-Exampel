// Async in action
/*
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);
*/


// create a XML Http request
/*
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource')
            }
        });
        request.open('GET', resource);
        request.send();
    });
};
getTodos('luigi.json').then(data => {
    console.log('promise resolved:', data);
    return getTodos('mario.json');
}).then( data => {
console.log('proise 2 resolved:', data);
return getTodos('shaun.json');
}).then (data => {
console.log('Promise 3 resolved:', data)
}).catch(err => {
    console.log('promise rejected:', err);
});
*/

// Create a new XML Http request
const request = new XMLHttpRequest();

// Set request to Get data from 'https://jsonplaceholder.typicode.com/users'
request.open('Get', 'https://jsonplaceholder.typicode.com/users');

// Send the request 
request.send();

//
console.log("reguest sent!");



// Promise example
/*
const getSomething = () => {

    return new Promise((resolve, reject) => {
        // Fetch something
        resolve('some data');

        //reject('some error');
    });
};
// så här gör man resolve
 getSomething().then((data) => {
     console.log(data);
 });

// så här gör man reject
  getSomething().then((data) => {
          console.log(data);
  }, (err) => {
     console.log(err);
  });

// getSomething().then(data => {
 console.log(data);
 }).catch(err => {
     console.log(err);
 });
*/


// async & await 
/*
const getTodos = async () => {

const response = await fetch('luigi.json');
const data = await response.json();
return data;
};

getTodos()
.then(data => console.log('resolved:', data));
*/

// Throwing custom errors
/*
const getTodos = async () => {

    const response = await fetch('luigi.json');
    if( response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
    };
    
    getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejectde:', err.message));
    */

// Fetch api
/*
fetch('luigi.json').then((response) => {
console.log('resolved', response);
return response.json();
}).then(data =>{
console.log(data);
}).catch((err) => {
console.log('rejected', err)
});
*/

//