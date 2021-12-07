// Arrow Functions or Fat Arrow Functions
// no name, always expression, assign to variable
// no function keyword
// this

// first example
const sayHi = () => console.log("hello");
sayHi();

// using one parameter
const doubler = (value) => value * 2;
const result1 = doubler(2);
console.log(result1);

// using 2 parameters
const multiply = (num1, num2) => num1 * num2;
const result2 = multiply(3, 4);
console.log(result2);

// returning object
const createObj = (name, age) => ({ name: name, age: age });
const person = createObj("anna", 23);
console.log(person);

// arrow functions as callbackfunctions
const array1 = [1, 2, 3, 4, 5, 6];
const bigNumbers = array1.filter((item) => item > 2);
console.log(bigNumbers);

// array functions with event listner

const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => console.log("you clicked"));

// Objects and this
console.log("--------------objects and this -----------------");
// reg functions : 'this' refers parent, left of the dot
// arrow functions : refers to it's current surrounding scope

const bob = {
  finstName: "bob",
  lastName: "white",
  sayName: function () {
    console.log(this);
    // setTimeout(() => {
    //   console.log(this);
    //   console.log(`Hello my name is ${this.finstName} ${this.lastName}`);
    // }, 1000);
  },
};

const george = {
  finstName: "george",
  lastName: "goodman",
  sayName: () => {
    console.log(this);
    console.log(`Hello my name is ${this.finstName} ${this.lastName}`);
  },
};

bob.sayName();
// george.sayName();

console.log("--------------select elements and this -----------------");

btn.addEventListener("click", function () {
  console.log(this);
  this.style.color = "black";
  setTimeout(() => {
    this.style.color = "blue";
  }, 2000);
});

// default parameters and arrow functions gotchas
console.log("-----default parameters and arrow functions gotchas------");

const john = "john";
const peter = "peter";

function sayHiFunc(person = john) {
  console.log(`Hi ${person}`);
}

const sayHello = (person = peter) => console.log(`Hi ${person}`);

sayHiFunc();
sayHello();

// btw arrow function is not hoisted.
