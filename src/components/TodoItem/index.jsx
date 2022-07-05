import React from "react";
import "./TodoItem.css";
import deleteImg from "../../assets/icons/delete-white.png";

function TodoItem(props) {
  return (
    <li className={`todoItem ${props.completed && "checked"}`}>
      <div className="todoItem__check" onClick={props.onComplete}>
        {" "}
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          {" "}
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />{" "}
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <p className="todoItem__text" onClick={props.onComplete}>{props.text}</p>
      <figure className="deleteTask" onClick={props.onDelete}>
        <img src={deleteImg} alt="" />
      </figure>
    </li>
  );
}

export { TodoItem };
