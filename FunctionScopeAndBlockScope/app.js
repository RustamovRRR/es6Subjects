// var let const
// let const - blocked scope {} - anything within {}
// var - function scope {}

// var only has function scope
// var total = 22;

// console.log(total);

// function add() {
//   var total = 2;
//   var amount = 33;
//   console.log(total);
// }
// console.log(amount);
// add();
// console.log(total);

// let and const have block scope

let total = 33;
const amount = 23;
console.log(`${total} ${amount}`);

let test = true;

if (test) {
  let total = 45;
  const amount = 34;
  console.log(`${total} ${amount}`);
}

console.log(`${total} ${amount}`);

{
  const amount = 100;
  console.log(amount);
}
console.log(amount);
