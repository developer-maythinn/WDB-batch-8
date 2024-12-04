const id = 1;
const productName = "Product 1";
const rating = 5;

// const product = {
//     id: id,
//     productName: productName,
//     rating: rating
// }

// const product = { id, productName, rating };
// console.log(product.productName);

const product = { id, productName, rating, description: "Description 1" };
// console.log(product.description);

const { description } = product;
console.log(description)
