/*
	Name exercise: Newton's third law
	Description: Calculating the delay of a weapon after firing
	Autor: MarianaTM
	Date: march 15th 2025
*/

let weaponMass = 10 ;
let bulletMass = 4;
let bulletVelocity  = 5;
let reverseVelocity;

reverseVelocity= (bulletMass * bulletVelocity) / weaponMass ;

console.log("The recoil of the weapon is:" + reverseVelocity);