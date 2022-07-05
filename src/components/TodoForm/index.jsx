import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form className="modalTodoForm" onSubmit={onSubmit}>
      <label>Nuevo To-do</label>
      <textarea
        className="modalTodoForm__inputArea"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Recordar que tengo que..."
      />
      <div className="modalTodoForm__btns">
        <button
          className="modalTodoForm__btn--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="modalTodoForm__btn--add"
          type="submit"
          onClick={onSubmit}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
