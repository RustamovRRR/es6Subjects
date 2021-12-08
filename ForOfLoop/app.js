// for of - loops through the values of an iterable object
// String, Array, Map, Set, etc - Not Object
// unlike forEach - we can use break, continue

const fruits = ["apple", "orange", "banana", "limon"];
const longName = "Walter Bishop Olivia Dunham";
let shortName = "";

for (const letter of longName) {
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}
console.log(shortName);

for (const fruit of fruits) {
  if (fruit === "banana") {
    // break;
    continue;
  }
  console.log(fruit);
}
