// template strings/literals
// `` backticks

const firstName = "anna";
const lastName = "ivanovna";
const age = 23;

const phrase = `My full name is ${firstName} ${lastName}. I'm ${age} years old`;

console.log(phrase);

const person = {
  name: "kate",
  job: "designer",
  hobbies: ["football", "surfing", "dancing"],
};

const result = document.querySelector(".result");

result.innerHTML = `<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("")}</ul>
`;

// tagged template literals
const rings = document.querySelector(".rings");
const author = "Tolkien";
const statement = "Gandalf The Grey";

const quote = highlights`Here is the statement ${statement} by ${author} and it is amazing`;
rings.innerHTML = quote;

function highlights(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
