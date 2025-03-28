/*
	Name exercise: Areas
	Description: Comparing the Areas of Three Squares
	Author: MarianaTM
	Date: March 18th 2025
*/

let areaOne;
let areaTwo;
let areaThree;
let sideOne = 5;
let sideTwo = 12;
let sideThree = 12;

areaOne = sideOne * sideOne;
areaTwo = sideTwo * sideTwo;
areaThree = sideThree * sideThree;

if (areaOne === areaTwo && areaOne === areaThree) {
    console.log("All areas are equal");
} 

else if (areaOne > areaTwo && areaOne > areaThree) {
    console.log("areaOne is the greatest"); 
}

 else if (areaTwo == areaOne && areaOne > areaThree && areaTwo > areaThree) {
    console.log("areaOne and areaTwo is equal ,areaTwo and areaOne is the greatest");
}

 else if (areaThree == areaOne && areaThree > areaTwo && areaOne > areaTwo) {
    console.log("areaThree and areaOne is equal ,areaThree and areaOne is the greatest");
}

else if (areaThree == areaTwo && areaThree > areaOne && areaTwo > areaOne) {
    console.log("areaThree and areaTwo is equal ,areaThree and areaTwo is the greatest");
}

 else if (areaThree > areaOne) {
    console.log("areaTwo is greater");
}

 else if (areaTwo > areaThree) {
    console.log("areaThree is greater");
}

