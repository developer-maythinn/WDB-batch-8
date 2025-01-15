import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme)
  return <button onClick={toggleTheme}>Change Theme</button>;
}

export default ToggleButton;
