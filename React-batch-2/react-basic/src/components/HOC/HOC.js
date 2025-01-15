import React from "react";

// Higher Order Component
export const withBlueBackground = (WrappedComponent) => {
  return (props) => {
    return <div style={{ background: "blue", padding: "1rem", color: "white" }}>
        <WrappedComponent {...props} />
    </div>;
  };
};

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World</h1>
        </>
    )
}
const HOC = withBlueBackground(HelloWorld)
export default HOC;
