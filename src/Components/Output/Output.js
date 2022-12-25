import React from "react";
import classes from "./Output.module.css";
import OutputExpense from "./OutputExpense";

const Output = (props) => {
  // console.log(props.items);
  if (props.items.length === 0) {
    return <h3 className={classes.noExpense}>Found No Expense</h3>;
  }
  return (
    <>
      <h1 className={classes.heading}>Output</h1>
      <div>
        {props.items.map((item) => (
          <OutputExpense
            key={item.id}
            expense={item.expense}
            amount={item.amount}
          />
        ))}
      </div>
    </>
  );
};

export default Output;
