import React, { useState } from "react";

const ErrorExample = () => {
  const [text, setText] = useState("random Text");
  const handleClick = () => {
    if (text === "random Text") {
      setText("changed text");
    } else {
      setText("random Text");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        button
      </button>
    </>
  );
};

export default ErrorExample;
