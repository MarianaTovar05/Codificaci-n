/*
	Name exercise: Grades
	Description: Receive three grades and perform the following calculations: 
        percentages, adding percentages, and grading the final grade.
	Author: MarianaTM
	Date: March 20th 2025
*/

let gradeOne = 4.5;
let gradeTwo = 4.8;
let gradeThree = 3.4;
let porcentOne = gradeOne * 0.20;
let porcentTwo= gradeTwo * 0.35;
let porcentThree = gradeThree* 0.45;

let gradeEnd =  porcentOne + porcentTwo +  porcentThree ;

 console.log("The grade end is:"+ gradeEnd);

if (gradeEnd > 4.5) {
  console.log("Heigh grade");
} else if (gradeEnd >= 3.5) {
  console.log("Good grade");
} else if (gradeEnd >= 3.0) {
  console.log("Average grade");
} else {
  console.log("Bad grade");
}
 