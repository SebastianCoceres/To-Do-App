import React from "react";
import "./TodosError.css";
import img from "../../assets/error-todos.svg";

function TodosError({ error }) {
  return (
    <div className="TodoError">
      <img src={img} alt="" />
      <p>Lo sentimos, hubo un error</p>
    </div>
  );
}

export { TodosError };
