let original = {
  title: "Book 1",
  details: { pages: 100 },
};

// Create a shallow copy
let shallowCopy = { ...original };

// Change the shallow copy
// shallowCopy.title = "Book 3";
// shallowCopy.details.pages = 150;

// console.log("original", original);
// console.log("shallowCopy", shallowCopy);

let deepCopy = JSON.parse(JSON.stringify(original));

// // Change the deep copy
deepCopy.details.pages = 150;
deepCopy.title = "Book 2";
console.log("original", original);
console.log("deepCopy", deepCopy)
