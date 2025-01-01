import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
//    const intervalTime = setInterval(() => {
//     setTime(new Date())
//    }, 1000)
  
//     return () => {
//      console.log("clear")
//      clearInterval(intervalTime)
//     }
  }, [time])

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let format = hours >= 12 ? "PM" : "AM";
    return `${hours}: ${minutes}: ${seconds} ${format}`;
  };

  return (
    <>
      <h1>Time {formatTime()}</h1>
    </>
  );
}

export default Clock;
