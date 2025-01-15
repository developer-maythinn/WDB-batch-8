import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Books() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <>
      <div style={{background: theme.bg, padding: "2rem", marginTop: "1rem"}}>
        <ul>
          <li style={{background: theme.ui, padding: "1rem"}}>Book 1</li>
        </ul>
      </div>
    </>
  );
}

export default Books;
