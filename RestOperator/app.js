// Rest operator ...
// gathers/collects the items

// if you place rest operator in front you will get an error
// rest for paramerters, spread for arguments
// arrays
const fruit = ["apple", "banana", "cherry"];
const [first, ...restFruits] = fruit;
console.log(first, restFruits);

// objects
const person = { firstName: "walter", lastName: "bishop", job: "scientist" };
const { job, ...restObj } = person;
console.log(job, restObj);

const getAverage = (name, ...restNumbers) => {
  console.log(name);
  console.log(restNumbers);
  let total = 0;
  for (number of restNumbers) {
    total += number;
  }
  console.log(`${name} average score is ${total / restNumbers.length}`);
};

getAverage("john", 1, 2, 3);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getAverage("john", ...numbers);
