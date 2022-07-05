import React from "react";
import "./TodosEmpty.css";
import img from "../../assets/empty-todos.svg";

function TodosEmpty() {
  return (
    <div className="TodoEmpty">
      <img src={img} alt="" />
      <p>Crea tu primer ToDo!</p>
    </div>
  );
}

export { TodosEmpty };
