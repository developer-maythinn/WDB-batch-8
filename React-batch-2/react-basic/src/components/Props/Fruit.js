import React from 'react'

// function Fruit(props) {
//   console.log(props)
//   return (
//    <>
//      <h2>{props.title}</h2>
//      <p>{props.price}</p>
//    </>
//   )
// }


// function Fruit({ title, price }) {
//   return (
//    <>
//      <h2>{title}</h2>
//      <p>{price}</p>
//    </>
//   )
// }

function Fruit(props) {
  const { title, price } = props;
  return (
   <>
     <h2>{title}</h2>
     <p>{price}</p>
   </>
  )
}


export default Fruit;