// map, find, filter, some, every, includes, indexOf, findIndex

const users = [
  {
    name: "Person 0",
    age: 20,
    city: "Mdy",
  },
  {
    name: "Person 1",
    age: 21,
    city: "Ygn",
  },
  {
    name: "Person 2",
    age: 22,
    city: "Mdy",
  },
  {
    name: "Person 3",
    age: 24,
    city: "Ygn",
  },
];

// let getUserIndexYgn = users.findIndex(user => user.city === "Ygn");
// console.log(getUserIndexYgn)






// let getAllNames = users.map((user, index) => {
//   // return user.name;
//   return `${user.name} age is ${user.age} and live in ${user.city}`

// });
// console.log(getAllNames);

let getUserFromYgn = users.filter(user => user.city === "Ygn");
console.log(getUserFromYgn)

// let getAllUsersFromYgn = users.filter(user => user.city === "Ygn");
// console.log(getAllUsersFromYgn)

// let getUserSome = users.some((user) => {
//   return user.age > 24;
// });

// let getUserEvery = users.every((user) => {
//   return user.age > 20;
// });

// console.log(getUserEvery);

// let fruits = ["apple", "orange", "mango"];
// console.log(fruits.includes("orange")) // true
// console.log(fruits.includes("pineapple")) // false

// console.log(fruits.indexOf("orange")) // 1
// console.log(fruits.indexOf("aa")) // -1