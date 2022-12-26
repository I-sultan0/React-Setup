import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};
const ModalContent = (props) => {
  return (
    <>
      <div className={classes.modal}>
        <h2>{props.title}</h2>
        <h3>{props.message}</h3>
        <button className={classes.modalBtn} onClick={props.onConfirm}>
          Close
        </button>
      </div>
    </>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.closeHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalContent
          onConfirm={props.closeHandler}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modalContent")
      )}
    </>
  );
};

export default Modal;
