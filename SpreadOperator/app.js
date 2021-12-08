// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them

const udemy = "udemy";

const boys = ["walter", "piter", "saul"];
const girls = ["olivia", "anna"];
const bestFriend = "gus";

const letters = [...udemy];
console.log(letters);

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
// const newFriends = friends;
const newFriends = [...friends];
newFriends[0] = "alfredo";
console.log(newFriends);
console.log(friends);

// ES2018 - ES8
console.log("-------------ES8-----------------");

const person = { name: "walter", age: 72 };
const newPerson = { ...person, job: "scientist", name: "peter" };
console.log(newPerson);

//DOM elements
console.log("--------------DOM Elements ---------------------");

const headings = document.querySelectorAll("h1");
const result = document.querySelector(".result");

const text = [...headings]
  .map((item) => `<span>${item.textContent} </span>`)
  .join("")
  .toUpperCase();
result.innerHTML = text;

// Function arguments
console.log("------------function arguments -----------------");

const numbers = [1, 345, 445, 65, 34, 999];

console.log(Math.max(...numbers));

const personName = ["gus", "frings"];

const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

sayHello(...personName);
