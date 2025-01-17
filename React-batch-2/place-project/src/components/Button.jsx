import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Button({ text, startIcon, endIcon }) {
  return (
    <>
      <div className="bg-teal-500 inline-block px-2 pt-0.5 pb-1 capitalize rounded-md text-sm">
        {startIcon && <span className="mr-1">{startIcon}</span>}
        {text}
        {endIcon && <span className="ml-1">{endIcon}</span>}
      </div>
    </>
  );
}

export default Button;
