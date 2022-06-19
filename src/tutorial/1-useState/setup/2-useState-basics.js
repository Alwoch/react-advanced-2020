import React, { useState } from "react";
import data from "../../../data";

const UseStateBasics = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removePerson(id)}>
              delete
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </>
  );
};

export default UseStateBasics;
