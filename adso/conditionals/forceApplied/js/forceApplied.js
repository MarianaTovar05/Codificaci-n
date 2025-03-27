/*
	Name exercise: Force Applied
	Description: Calculate the force exerted by an object and determine
        whether it is greater or less than a threshold value.
	Author: MarianaTM
	Date: March 20th 2025
*/

let mass = 5;
let acceleration = 1;

let forceApplied = mass * acceleration;

if (forceApplied >= 100) {
    console.log("The Force is high: " + forceApplied)
}else {
    console.log("The Force is low: " + forceApplied);
}

