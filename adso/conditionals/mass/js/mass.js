/*
	Name exercise: Mass
	Description: The mass of two bodies in free fall, calculate the gravitational force of each 
	Author: MarianaTM
	Date: March 20th 2025
*/

let massOne = 5;
let massTwo =3;

const gravity = 9.81;

let forceOne = massOne * gravity;
let forceTwo = massTwo * gravity;

if (forceOne > forceTwo) {
    console.log("El primer cuerpo ejerce mayor fuerza gravitacional: " + forceOne);
} else if (forceOne < forceTwo ) {
    alert("El segundo cuerpo ejerce mayor fuerza gravitacional: " + forceTwo);
} else {
    alert("Ambos cuerpos ejercen la misma fuerza gravitacional");
}
