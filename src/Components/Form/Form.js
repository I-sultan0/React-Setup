import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const enterExpenseHandler = (e) => {
    setExpense(e.target.value);
    // console.log(e.target.value);
  };
  const enterAmountHandler = (e) => {
    setAmount(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      expense: expense,
      amount: +amount,
    };
    console.log(data);
    props.sendData(data);

    setExpense("");
    setAmount("");
  };

  return (
    <>
      <h1 className={classes.heading}>Expense Input</h1>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.textDiv}>
          <label>Enter Expense</label>
          <input type="text" onChange={enterExpenseHandler} value={expense} />
        </div>
        <div className={classes.amountDiv}>
          <label>Enter Amount</label>
          <input type="number" onChange={enterAmountHandler} value={amount} />
        </div>
        <div className={classes.btn}>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default Form;
