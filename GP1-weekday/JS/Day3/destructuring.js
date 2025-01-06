// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a)
// console.log(b)
// console.log(rest)

// let colors = ["white", "black", "pink", "green"];
// let [color1, color2, ...color3] = colors;
// console.log(color3)

// const user = { name: "Alice", age: 25 };
// const { name, age } = user;
// console.log(name)

let original = {
  title: "Recipe Book",
  details: { pages: 100 },
};

// let shallowCopy = {...original}
// shallowCopy.title = "May";
// console.log(original)
// console.log(shallowCopy)

// let deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.details.pages = 150;

let shallowCopy = {...original};
shallowCopy.details.pages = 150;
shallowCopy.title = "May";

console.log(original.details.pages);
// console.log(deepCopy.details.pages);
console.log(shallowCopy.details.pages);

