/*
	Name exercise: Mass
	Description: The force of friction between an object and the surface on which it moves. 
	Author: MarianaTM
	Date: March 20th 2025
*/

let mass = 8;
let friction = 6;
let acceleration = 2;
let force = mass * acceleration;

console.log("La fuerza: " + force);

let frictionForce = friction * force;

if (frictionForce > 50) {
    console.log("La friccion es alta: " + frictionForce + " N");
} else {
    console.log("La friccion es baja: " + frictionForce + " N");
}

