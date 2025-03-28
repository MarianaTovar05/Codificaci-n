/*
	Name exercise: Salary 
	Description: A person's salary applying different deductions
	Author: MarianaTM
	Date: March 20th 2025
*/

let arl;
let discount;
let netSalary;
let pension;
let salary = 1450000;
let salaryMinimun =1500000;
let health;
let retention;
let transportion= 114000;

arl = salary * 0.052;
pension = salary * 0.16;
health = salary * 0.12;
discount = pension + arl + health;
 
netSalary = salary-discount;

if (salary < salaryMinimun * 4) {
      netSalary= salary + transportion;     
}

if (salary < salaryMinimun * 2) {
     retention = salary * 0.04;
     netSalary = salary - retention; 
}

console.log("The net salary to be paid is: $"+ netSalary);
 