import React from 'react'

function Product({productItem}) {
  const para = <p>Hello</p>;
  return (
    <>
        <h2>{productItem.title}</h2>
        <p>{productItem.price}</p>
        {para}
    </>
  )
}

export default Product;