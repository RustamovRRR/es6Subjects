// var let const
// define, update, redefine
// const cannot mutate primitive type

// define
var number = 22;
// console.log(number);
// update
number = 50;
// console.log(number);
// redefine
var number = 34;
// console.log(number);

// let
// define
let amount = 45;
// console.log(amount);
// update
amount = 0;
// console.log(amount);
// we cannot redefine the let
// let amount = 23;
// console.log(amount);

// const
// define
const total = 45;
// console.log(45);
// we cannot update and redefine const variables on primitive types

// with reference types
const person = { name: "john" };
person.name = "natali";
console.log(person);
