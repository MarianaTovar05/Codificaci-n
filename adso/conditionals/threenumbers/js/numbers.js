/*
name exercice: Two Numbers
description: Three numbers which is the largest and which are equal
autor: MarianaTM
Date: march 20th of 2025
*/

let numberOne = 14;
let numberTwo = 16;
let numberThree = 16;

if (numberOne === numberTwo && numberOne === numberThree) {
    console.log("Todos los números son iguales: " + numberOne);
} else {
    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log("El numero mayor es: " + numberOne);
    } else if (numberOne === numberTwo && numberOne > numberThree) {
        console.log("El numero uno y el numero dos son iguales y el numero tres es el menor");
    } else if (numberOne === numberThree && numberOne > numberTwo) {
        console.log("El numero uno y el numero tres son iguales y el numero dos es el menor");
    } else if (numberTwo === numberThree && numberTwo > numberOne) {
        console.log("El numero dos y el numero tres son iguales y el numero uno es el menor");
    } else if (numberThree > numberTwo && numberThree > numberOne) {
        console.log("El numero tres es el mayor");
    } else {
        console.log("El numero dos es el mayor");
    }
}


