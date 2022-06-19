import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setError(!isError)}>
        toggle Error
      </button>
      {isError && <h1>Error......</h1>}
      {/* using the ternary operator */}
      {isError ? (
        <h1>There is an error....</h1>
      ) : (
        <div>
          <p>There is no error</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
