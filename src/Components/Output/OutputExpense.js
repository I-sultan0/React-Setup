import React from "react";
import classes from "./Output.module.css";

const OutputExpense = (props) => {
  return (
    <>
      <div className={classes.outExp}>
        <h3 className={classes.exp}>{props.expense}</h3>
        <h3 className={classes.amt}> Rs {props.amount}</h3>
      </div>
    </>
  );
};

export default OutputExpense;
