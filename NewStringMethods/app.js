// new string methods
// startsWith(), endsWith(), includes(), repeat()

const person = "Walter Bishop";

// these methods are case sensitive

// startsWith
// console.log(person.startsWith("Wal"));
// console.log(person.startsWith("ter", 3));
// console.log(person.startsWith("Ter", 3));

// endsWith similar to startsWith
// console.log(person.endsWith("hop"));
// console.log(person.endsWith("er", 6));

// console.log(person.includes("shop"));

const multiplyPeople = (person, amount) => `${person} ! `.repeat(amount);

const people = multiplyPeople(person, 5);
console.log(people);
