/*
Description: Math aperations
Autor : MarianaTM
Date : 26 march 2025
*/

let numberOne;
let numberTwo;
let addnResult;
let  subtResult;
let  multiResult;

function addiction(numberOne,numberTwo){
         addResult = numberOne + numberTwo;
         return addResult;
}

function subtraction(numberOne,numberTwo){
         subtResult = numberOne - numberTwo;
         return subtResult;
}

function multi(numberOne,numberTwo){
         multiResult = numberOne * numberTwo;
         return multiResult;
}
addResult = addiction(12,23);
subtResult = subtrction(45,11);
multiResult = multi(5,6);

console.log('Addiction 1 : ' + addResult);
console.log('Subtraction : ' + subtResult);
console.log('Multiplication:' + multiResult);