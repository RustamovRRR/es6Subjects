// Array.from and Array.of  - not on the prototype
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments.

const example = ["one", "two", "three"];

// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

// Array.of
const friend = Array.of("walter", "peter", "olivia");
console.log(friend);

console.log("----------- Array.from --------------");
// Array.from
// from - returns Array Object from any object with a lenght property or an iterable object
// from turns array-like/ish into array - string, nodelist Set

const udemy = "udemy";
console.log(Array.from(udemy));

function countTotal() {
  const total = Array.from(arguments).reduce(
    (total, value) => (total += value),
    0
  );
  console.log(total);
}
countTotal(1, 2, 3);

// DOM Elements(NodeList)
console.log("--------DOM Elements(NodeList)--------");

const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");
result.innerHTML = newText;

let secondText = Array.from(
  p,
  (item) => `<span>${item.textContent}</span>`
).join(" ");

second.innerHTML = secondText;
