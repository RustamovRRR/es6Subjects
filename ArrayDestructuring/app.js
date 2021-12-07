// destructuring
// faster/easier way to access/unpack values from array
// objects into variables
// Arrays

const fruits = ["banana", "limon", "apple"];
const friends = ["john", "piter", "anna", "michael", "walter"];

const banana = fruits[0];
const limon = fruits[1];
const apple = fruits[2];
console.log(banana, limon, apple);

// faster way
const [value1, value2, value3, value4, value5] = friends;
console.log(value1, value2, value3, value4, value5);

// if you want to skip some elements use comma

const [val1, , val3, , val5] = friends;
console.log(val1, val3, val5);
