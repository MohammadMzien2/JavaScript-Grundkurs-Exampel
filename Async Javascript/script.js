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

// Make Http request 
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

// 