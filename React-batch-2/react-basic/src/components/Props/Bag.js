import React from "react";
import Fruit from "./Fruit";
import Fruits from "./Fruits";

function Bag() {
  return (
    <React.Fragment>
        <Fruits />
      {/* <Fruit title="Orange" price="$10" />
      <Fruit title="Mango" price="$20" />
      <Fruit title="Apple" price="$20" /> */}
    </React.Fragment>
  );
}

export default Bag;
