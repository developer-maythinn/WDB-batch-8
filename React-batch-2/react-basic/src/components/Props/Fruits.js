import React from "react";
import Fruit from "./Fruit";

const fruitItems = [
  {
    title: "Apple",
    price: "$10",
  },
  {
    title: "Orange",
    price: "$10",
  },
  {
    title: "Mango",
    price: "$10",
  },
  {
    title: "Pineapple",
    price: "$10",
  },
  {
    title: "Pineapple",
    price: "$10",
  },
];
function Fruits() {
  return (
    <>
      {fruitItems.map((fruit, index) => (
        <React.Fragment key={index}>
          <Fruit title={fruit.title} price={fruit.price} />
        </React.Fragment>
      ))}
    </>
  );
}

export default Fruits;
