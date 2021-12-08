// find - gets specific item
// findIndex - gets index of the item
// every - every item in the array
// some - at least one item in the array

const people = [
  { id: 1, name: "olivia" },
  { id: 2, name: "dunham" },
  { id: 3, name: "anna" },
];

// const anna = people.filter((person) => person.name === "anna");

// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

const anna = people.find((person) => person.name === "anna");
console.log(anna);

const person = people.findIndex((item) => item.id === 3);
console.log(people[person]);

const newPeople = people.slice(0, person);
console.log(newPeople);

const grades = ["A", "B", "A", "B", "C"];
const goodReads = ["A", "B", "A", "B"];

const allGrades = grades.every((item) => item !== "C");
console.log(allGrades);

const someGrades = grades.some((item) => item === "G");
console.log(someGrades);
