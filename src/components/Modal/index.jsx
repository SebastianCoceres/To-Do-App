import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal(props) {
  const onClickButton = (e) => {
    if (e.target.className === "defaultModal") {
      props.setOpenModal(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="defaultModal" onClick={onClickButton}>
      {props.children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
