// map, find, filter, some, every, includes, indexOf, findIndex

const users = [
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

// let getAllNames = users.map((user, index) => {
//   // return user.name;
//   return `${user.name} age is ${user.age} and live in ${user.city}`
 
// });
// console.log(getAllNames);

let getUserFromYgn = users.find(user => user.city === "Ygn");
console.log(getUserFromYgn)

let getAllUsersFromYgn = users.filter(user => user.city === "Ygn");
console.log(getAllUsersFromYgn)
