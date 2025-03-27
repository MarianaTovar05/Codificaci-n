/*
	Name exercise: Total payment of a person
	Description: Total payment of a person
	Autor: MarianaTM
	Date: march 15th 2025
*/

let daysWork=30;
let valueDay=48800;
let salary;
let health;
let pension;
let arl;
let discount;
let netSalary;

salary=daysWork*valueDay;

health=salary*0.12;
pension=salary*0.16;
arl=salary*0.052;

discount=health+pension+arl;
netSalary=salary-discount;

console.log("Salary: "+salary);

console.log("Health Discount: "+health);

console.log("Pension Discount: "+pension);

console.log("ARL Discount: "+arl);

console.log("Total Discounts: "+discount);

console.log("Net Salary: "+netSalary);