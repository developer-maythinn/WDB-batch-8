import React, { useState } from "react";

function SimpleUseState() {
  const [word, setWord] = useState("World");
  const changeWord = () => setWord("React JS");
  return (
    <>
      <h1>Hello {word}</h1>
      <button onClick={changeWord}>Change Word</button>
    </>
  );
}

export default SimpleUseState;
