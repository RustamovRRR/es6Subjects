// destructuring
// faster/easier way to access/unpack values from array
// objects into variables
// As Function Arguments

const walter = {
  first: "walter",
  last: "bishop",
  city: "boston",
  siblings: {
    sister: "olivia",
  },
};

function printPerson({ first, last, city }) {
  // const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(walter);
