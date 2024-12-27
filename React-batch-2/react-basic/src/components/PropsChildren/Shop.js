import React from "react";
import "./Shop.css";

function Shop({ children }) {
  const styles = { color: "hotpink", backgroundColor: "pink" };
  return (
    <>
      {/* <div style={{ color: "red" }}>            
        {children}
      </div> */}

      {/* <div className={"shopStyles"}>{children}</div> */}
      
      <div style={styles}>{children}</div>
    </>
  );
}

export default Shop;
