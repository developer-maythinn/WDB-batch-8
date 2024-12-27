import React from "react";

function ClickEvent() {
//   const handleClick = () => alert("Hello");

function handleClick() {
    alert("Hello");
}
  return (
    <>
      {/* <button onClick={handleClick}>Click</button> */}
      {/* <button onClick={handleClick()}>Click</button> Note* function immediately run without click event */} 
      <button onClick={() => handleClick()}>Click</button>
    </>
  );
}

export default ClickEvent;
