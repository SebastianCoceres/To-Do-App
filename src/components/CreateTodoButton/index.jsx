import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <button className="addTodoItem" type="button" onClick={onClickButton}>
      <span>+</span>
    </button>
  );
}

export { CreateTodoButton };
