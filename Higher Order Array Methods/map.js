
/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map() <--
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// numbers
const numbers = [ 5, 21, 50, 24, 92, 18, 47 ];
console.log("Numbers:", numbers);
// multiply all the numbers by 2
const doubleNumbers = numbers.map(num => num * 2);
console.log("Double? numbers:", doubleNumbers);  // [ 10, 42, 100, 48, 184, 36, 94 ]


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

/*
const skus = [];
products.forEach(product => {
	skus.push(product.sku);
});
console.log("All SKUs:", skus);


const skus = products.map( product => {
	return product.sku;
} );
console.log("All SKUs, but with map:", skus);

const productNames = products.map(product => product.name);
console.log("All product names:", productNames);
*/
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price)=>  price / 2);
// console.log(salePrices);

const products = [
    {name: 'gold star',  price: 20},
    {name: ' mushroom', price: 40 },
    {name: 'green shell', price: 30},
    {name: 'banana skin', price: 10 },
	{name: 'red shells', price: 50 }
];

const saleProducts = products.map ((product)=>{
	if(product.price > 30){
		return {name: product.name, price: product.price / 2};
	}else {
		return product;
	}
});
console.log(saleProducts, products);