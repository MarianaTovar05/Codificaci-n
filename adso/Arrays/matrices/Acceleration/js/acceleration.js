/*
   Name: Acceleration from Forces
   Description: Calculating Acceleration from Forces
   Autor: MarianaTM
   Date: March 25th 2025
*/
let force = [
  [10, 5, 0],   // Fuerza del objeto 1
  [4, -3, 2],   // Fuerza del objeto 2
  [0, 0, 6]     // Fuerza del objeto 3
];

let mass = [2, 4, 3];

let accelerations = [];

 for (let iterationOne = 0; iterationOne < force.length; iterationOne ++){
      let values = [];
 for (let iterationTwo = 0; iterationTwo < force.length; iterationTwo ++){
      console.log(force[iterationOne][iterationTwo]);
      let acceleration = force[iterationOne][iterationTwo]/mass[iterationTwo];
      values.push(acceleration); 
   }
     accelerations.push(values);
}

console.log("Acceleration :");
console.log(accelerations);







 

