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
//tuple.push(3);
//console.log(tuple);
// output - server/index.ts:126:7 - error TS2339: Property 'push' does not exist on type 'readonly [number, number]'.
/*-----------------------------------------------------------------*/
//Enums
//Numeric enums
var myEnum;
(function (myEnum) {
    myEnum[myEnum["FirstEnum"] = 0] = "FirstEnum";
    myEnum[myEnum["SecondEnum"] = 1] = "SecondEnum";
    myEnum[myEnum["ThirdEnum"] = 2] = "ThirdEnum";
})(myEnum || (myEnum = {}));
console.log(myEnum.FirstEnum); //0
console.log(myEnum.SecondEnum); //1
console.log(myEnum.ThirdEnum); //2
var num;
(function (num) {
    num[num["First"] = 1] = "First";
    num[num["Second"] = 2] = "Second";
})(num || (num = {}));
console.log(num.First); //1
console.log(num.Second); //2
//String enums
var days;
(function (days) {
    days["Monday"] = "Monday";
    days["Sunday"] = "Sunday";
})(days || (days = {}));
console.log(days.Monday); //Monday
console.log(days.Sunday); //Sunday
/*-----------------------------------------------------------------*/
//Functions
//void function (no return type)
function printHello() {
    console.log("Hello Typescript");
}
printHello();
//return type function
function calculateTax(income) {
    if (income > 300000) {
        return income * 0.2;
    }
    return income * 0.1;
}
let tax = calculateTax(500000);
console.log(tax);
//optional parameter functions
function printMarks1(mark, subject, opt) {
    return mark + " for " + subject + " - " + opt;
}
console.log(printMarks1(80, 'Math')); //80 for Math - undefined
function printMarks2(mark, subject, opt) {
    return mark + " for " + subject + " - " + opt;
}
console.log(printMarks2(75, "ICT", 2023)); //75 for ICT - 2023
//default parameters
function printMarks3(mark, subject, opt = 2022) {
    return mark + " for " + subject + " - " + opt;
}
console.log(printMarks3(85, "Science")); //85 for Science - 2022
console.log(printMarks3(85, "Science", 2024)); //85 for Science - 2024
/*-----------------------------------------------------------------*/
//Objects
let obj = {
    p1: "Typescript",
    p2: 2023
};
//object with function
let car;
car = {
    type: "Bugatti",
    model: "Chiron",
    year: 202,
    make() {
        console.log("Made in France");
    }
};
//create object
let employee = {
    id: 0,
    name: "",
    retire: (date) => {
        console.log(date);
    }
};
/*-----------------------------------------------------------------*/
//Union types ' | '
function kgToLb(weight) {
    if (typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLb('10'));
