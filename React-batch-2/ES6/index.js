// Logical operator (&&)(||)

// let result1 = true;
// let result2 = false;
// let result3 = "hello";

// console.log(true && result3) // hello
// console.log(false && result3) // false

// console.log(false || result3) // hello
// console.log(true || result3) // true

// function getName(name) {
//     return name;
// }

// console.log(true && getName("ES6") && false); // false
// console.log(true && getName("ES6") && true ); // true

// console.log(false && getName("ES6") || true ); // true
// _______________________________________

// template literals (string template)

// let name1 = "MT";
// let name2 = "Coding";
// console.log(name1 + " " + name2);
// console.log(`${name1} ${name2}`);

// _______________________________________

// ternary operator
let showFruit = true;

function getFruit(name) {
  return name;
}

if (showFruit) {
  console.log(getFruit("Apple"));
} else {
  console.log(getFruit("Orange"));
}

showFruit ? console.log(getFruit("Apple")) : console.log(getFruit("Orange"));
