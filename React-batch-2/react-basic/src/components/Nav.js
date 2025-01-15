import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ToggleButton from "./ToggleButton";

const linkItems = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/projects",
    name: "Projects",
  },
  {
    url: "/hooks",
    name: "Hook",
  },
];
function Nav() {
  const themeValues = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeValues;
  const theme = isLightTheme ? light : dark;

  return (
    <nav
      style={{
        display: "flex",
        background: theme.ui,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem", flexGrow: 1, justifyContent: "center" }}>
        {linkItems &&
          linkItems.map((item, index) => {
            return (
              <li key={index}>
                <Link style={{ textDecoration: "none" }} to={item.url}>
                  {item.name}
                </Link>
              </li>
            );
          })}
      </ul>
      <ToggleButton />
    </nav>
  );
}

export default Nav;
