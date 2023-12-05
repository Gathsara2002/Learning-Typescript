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

let b: any = "Any";
console.log(b);
b = true;
console.log(b);

/*function testAnyType(c) {
    console.log(c);
}
output-server/index.ts:59:22 - error TS7006: Parameter 'c' implicitly has an 'any' type.
*/

function testAnyType(c: any) {
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
let ages: number[] = [20, 30, 40];
ages.push(50);
//ages.push('John'); //error
console.log(ages);

//let arr=[];
//console.log(typeof arr); //server/index.ts:90:20 - error TS7005: Variable 'arr' implicitly has an 'any[]' type.

//Initialize empty array with type
let arr: string[] = [];
console.log(typeof arr);

/*-----------------------------------------------------------------*/

//Tuple

let user: [number, string] = [1, "John"];
console.log(user);
console.log(user[0]);
console.log(user[1]);

let detail: [x: string, y: number] = ["Name", 20];
console.log(detail);
console.log(detail[0]);
console.log(detail[1]);

//Destructure tuple
let [x, y] = detail;
console.log(x);
console.log(y);

//Add new element to tuple

let test: [string, string] = ['A', 'B'];
console.log(test);

test.push('C');
console.log(test);

//to prevent add new element to tuple user readonly keyword

let tuple: readonly [number, number] = [1, 2];
//tuple.push(3);
//console.log(tuple);
// output - server/index.ts:126:7 - error TS2339: Property 'push' does not exist on type 'readonly [number, number]'.


/*-----------------------------------------------------------------*/

//Enums

//Numeric enums

enum myEnum {
    FirstEnum,
    SecondEnum,
    ThirdEnum
}

console.log(myEnum.FirstEnum); //0
console.log(myEnum.SecondEnum); //1
console.log(myEnum.ThirdEnum); //2


enum num {
    First = 1,
    Second
}

console.log(num.First); //1
console.log(num.Second); //2


//String enums

enum days {
    Monday = "Monday",
    Sunday = "Sunday"
}

console.log(days.Monday); //Monday
console.log(days.Sunday); //Sunday


/*-----------------------------------------------------------------*/

//Functions

//void function (no return type)

function printHello(): void {
    console.log("Hello Typescript")
}

printHello();

//return type function

function calculateTax(income: number): number {
    if (income > 300_000) {
        return income * 0.2;
    }
    return income * 0.1;
}

let tax = calculateTax(500_000);
console.log(tax);


//optional parameter functions

function printMarks1(mark: number, subject: string, opt?: number): string {
    return mark + " for " + subject + " - " + opt;
}

console.log(printMarks1(80, 'Math')); //80 for Math - undefined


function printMarks2(mark: number, subject: string, opt?: number): string {
    return mark + " for " + subject + " - " + opt;
}

console.log(printMarks2(75, "ICT", 2023));  //75 for ICT - 2023


//default parameters

function printMarks3(mark: number, subject: string, opt = 2022): string {
    return mark + " for " + subject + " - " + opt;
}

console.log(printMarks3(85, "Science"));  //85 for Science - 2022
console.log(printMarks3(85, "Science", 2024));  //85 for Science - 2024


/*-----------------------------------------------------------------*/

//Objects

let obj: {
    p1: string,
    p2: number
} = {
    p1: "Typescript",
    p2: 2023
}


//object with function

let car: {
    type: string,
    model: string,
    year: number,
    make: () => void
}

car = {
    type: "Bugatti",
    model: "Chiron",
    year: 202,
    make(): void {
        console.log("Made in France");
    }
}


/*-----------------------------------------------------------------*/

//Type Aliases

//primitive
type AgeAlias = number;
type NameAlias = string;

//Object
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

//create object

let employee: Employee = {
    id: 0,
    name: "",
    retire: (date: Date) => {
        console.log(date);
    }
}


/*-----------------------------------------------------------------*/

//Union types ' | '

function kgToLb(weight: number | string): number {
    if (typeof weight == 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log(kgToLb('10'));
console.log(kgToLb(10));


/*-----------------------------------------------------------------*/

//Literal types

type Qty = 50 | 100;
let qty: Qty = 100;


/*-----------------------------------------------------------------*/

//Null & Undefined

function greet(name: string | null | undefined): void {
    console.log(name)
}

greet("John");  //John
greet(null);    //null
greet(undefined);    //undefined


/*-----------------------------------------------------------------*/

//Optional chaining (?.)

type Customer = {
    birthDay: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id == 0 ? null : {birthDay: new Date()}
}

let customer = getCustomer(1);

/*if (customer) {
    console.log(customer.birthDay);
}*/

console.log(customer?.birthDay);



