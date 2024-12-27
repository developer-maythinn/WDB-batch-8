import React from "react";
import Product from "./Product";

const productItems = [
  {
    id: 1,
    title: "Product 1",
    price: "$10",
  },
  {
    id: 2,
    title: "Product 2",
    price: "$15",
  },
  {
    id: 3,
    title: "Product 3",
    price: "$20",
  },
];
function Products() {
  const isMobile = false;
  return (
    <>
      {isMobile ? <h2>Mobile View</h2> : <h2>Desktop View</h2>}
      {productItems.map((productItem) => (
        <React.Fragment key={productItem.id}>
          <Product productItem={productItem} />
        </React.Fragment>
      ))}
    </>
  );
}

export default Products;
