import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sophia",
    age: 26,
    message: "keep going",
  });

  const changeMessage = () => {
    if (person.message === "keep going") {
      setPerson({ ...person, message: "new message" });
    } else {
      setPerson({ ...person, message: "keep going" });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        click me!
      </button>
    </>
  );
};

export default UseStateObject;
