import React from "react";
import { Link } from "react-router-dom";

function Hooks() {
  return (
    <ul>
      <li>
        <Link to="/hooks/use-state">UseState</Link>
      </li>
      <li>
        <Link to="/hooks/use-effect">UseEffect</Link>
      </li>
      <li>
        <Link to="/hooks/use-ref">UseRef</Link>
      </li>
      <li>
        <Link to="/hooks/use-context">UseContext</Link>
      </li>
    </ul>
  );
}

export default Hooks;
