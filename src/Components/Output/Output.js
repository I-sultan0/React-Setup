import React from "react";

const Output = (props) => {
  return (
    <>
      <h1>Output</h1>
      <div>
        <h3>{props.items.expense}</h3>
        <h3>{props.items.amount}</h3>
      </div>
    </>
  );
};

export default Output;
