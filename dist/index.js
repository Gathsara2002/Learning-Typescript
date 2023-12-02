"use strict";
console.log("Hello world");
//TS Types
/*
* string
* number
* boolean
*bigint
* undefine
* null
* any
* unknown
*  */
/*-----------------------------------------------------------------*/
//Declare variables
//Explicit
/*let myName: string = "Gathsara";
let age: number = 21;
let isStudent: boolean = true;
let salary: number = 100_000_000;
console.log(myName + " - " + age + " - " + isStudent + " - " + salary);*/
//myName=12; //error
//age="a";   //error
//Implicit
/*
let myName = "Liviru";
let age = 21;
let isStudent = true;
let salary = 100_000_000;
console.log(myName + " - " + age + " - " + isStudent + " - " + salary);
*/
//myName=12; //error
//age="a";   //error
/*-----------------------------------------------------------------*/
//Type : any
let a;
a = "John";
console.log(a);
a = 20;
console.log(a);
let b = "Any";
console.log(b);
b = true;
console.log(b);
/*function testAnyType(c) {
    console.log(c);
}
output-server/index.ts:59:22 - error TS7006: Parameter 'c' implicitly has an 'any' type.
*/
function testAnyType(c) {
    console.log(c);
}
//output - Testing
testAnyType("Testing");
/*-----------------------------------------------------------------*/
//Arrays
//Without type safety
let numbers = [1, 2, 3, '4'];
numbers.push(5);
numbers.push('true');
console.log(numbers);
//With type safety
let ages = [20, 30, 40];
ages.push(50);
//ages.push('John'); //error
console.log(ages);
//let arr=[];
//console.log(typeof arr); //server/index.ts:90:20 - error TS7005: Variable 'arr' implicitly has an 'any[]' type.
//Initialize empty array with type
let arr = [];
console.log(typeof arr);
/*-----------------------------------------------------------------*/
//Tuple
let user = [1, "John"];
console.log(user);
console.log(user[0]);
console.log(user[1]);
let detail = ["Name", 20];
console.log(detail);
console.log(detail[0]);
console.log(detail[1]);
//Destructure tuple
let [x, y] = detail;
console.log(x);
console.log(y);
//Add new element to tuple
let test = ['A', 'B'];
console.log(test);
test.push('C');
console.log(test);
//to prevent add new element to tuple user readonly keyword
let tuple = [1, 2];
tuple.push(3);
console.log(tuple);
