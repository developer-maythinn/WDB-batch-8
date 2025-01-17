import React from "react";

function Button({ title, startIcon, endIcon }) {
  return (
    <>
      <div className="bg-teal-500 p-1 px-3 inline-block text-white font-semibold rounded-md capitalize text-sm">
        {startIcon && <span className="mr-1"> {startIcon}</span>}
        <span>{title}</span>
        {endIcon && <span className="ml-1"> {endIcon}</span>}
      </div>
    </>
  );
}

export default Button;
