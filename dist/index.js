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
testAnyType("Testing");
