// destructuring
// faster/easier way to access/unpack values from array
// objects into variables
// Objects

const walter = {
  first: "walter",
  last: "bishop",
  city: "boston",
  siblings: {
    sister: "olivia",
  },
};

// const firstName = walter.first;
// const lastName = walter.last;
// const sister = walter.siblings.sister;
// console.log(firstName, lastName, sister);

// property names must match

const {
  first: firstName,
  last: lastName,
  city: myCity,
  job: myJob /* undefined */,
  siblings: { sister: favoriteSibling },
} = walter;

console.log(firstName, lastName, myCity, myJob, favoriteSibling);
