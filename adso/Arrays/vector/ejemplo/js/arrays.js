/*
	Name exercise: Arrays
	Description: a vector with random numbers that shows which is the largest and which
                     is the smallest and tells which is even and which is odd.
	Author: MarianaTM
	Date: March 20th 2025
*/

let array = [];
let iteration;
let number;

for (iteration= 0; iteration < 15; iteration++) {
   number = Math.floor(Math.random() * 100);
   array.push(number);
}
console.log("Array:", array);


let mayor = Math.max(...array);
let minor = Math.min(...array);

console.log("Número mayor:", mayor);
console.log("Número menor:", minor);

let pares = array.filter(number => number % 2 == 0);

let impares = array.filter(number => number % 2 !== 0);
console.log("Números pares:", pares);
console.log("Números impares:", impares);