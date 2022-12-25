import React from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  const changeAmount = (e) => {
    console.log(e.target.value);
    props.sendAmount(e.target.value);
  };
  return (
    <>
      <div className={classes.filter}>
        <label>Filter by Amount</label>
        <select value={props.currentAmount} onChange={changeAmount}>
          <option value="100">Under 100</option>
          <option value="250">101-250</option>
          <option value="500">251-500</option>
          <option value="1000">500-1000</option>
          <option value="10000">Under Ten Thousand</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
