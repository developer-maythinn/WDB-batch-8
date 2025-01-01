import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
    const user = useContext(UserContext)
  return (
    <div class="box">
      <h1>ComponentD</h1>
      <p>{user}</p>
    </div>
  );
}

export default ComponentD;
