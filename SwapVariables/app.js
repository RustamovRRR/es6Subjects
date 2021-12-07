// Destructuring swap variables
// faster/easier way to access/unpack values from array
// objects into variables
// Arrays

let first = "kate";
let second = "anna";
console.log(first, second);

// let temp = second;
// second = first;
// first = temp;

[first, second] = [second, first];

console.log(first, second);
