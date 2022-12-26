import React, { useState } from "react";
import classes from "./Form.module.css";
import Modal from "../UI/Modal/Modal";

const Form = (props) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [warning, setWarning] = useState();
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
    // console.log(expense.length);
    if (expense.length === 0 || amount.length === 0) {
      setWarning({
        title: "Input Missing",
        message: "Enter something to Proceed",
      });
      return;
    }
    if (amount <= 1) {
      setWarning({
        title: "Enter Valid Input",
        message: "Negative amount is not accepted",
      });
      return;
    }
    const data = {
      id: Math.random(),
      expense: expense,
      amount: +amount,
    };
    console.log(data);
    props.sendData(data);

    setExpense("");
    setAmount("");
  };
  const noModal = () => {
    setWarning(null);
  };

  return (
    <>
      {warning && (
        <Modal
          title={warning.title}
          message={warning.message}
          closeHandler={noModal}
        />
      )}
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
