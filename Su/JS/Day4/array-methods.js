// const fruits = ["apple", "orange", "mango"];
// console.log(fruits.length)
// const result = fruits.toString();

// console.log(typeof fruits)
// console.log(typeof result, result)

// fruits.push("lemon")
// fruits.pop();

// fruits.unshift("lemon")
// fruits.shift();
// console.log(fruits)

// ************************************

const fruits = ["apple", "orange", "mango", "kiwi", "lemon"];

// fruits.splice(0, 4, "kiwi");
const result = fruits.slice(0, -1);
console.log(result);
