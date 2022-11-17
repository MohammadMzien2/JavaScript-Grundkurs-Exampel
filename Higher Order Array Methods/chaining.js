const products = [
    { name: 'gold star', price: 30 },
    { name: ' mushroom ', price: 10 },
    { name: 'green shell', price: 40 },
    { name: 'banana skin', price: 5 },
    { name: 'red shells', price: 50 }
];

// const filterd = products.filter(product => product.price > 20);

// const promos = filterd.map(product => {
//     return `the ${product.name} is ${product.price /2} pounds`;
// });
const promos = products.filter(product => product.price > 20)
.map (product => `the ${product.name} is ${product.price /2} pounds`);


 console.log(promos);

