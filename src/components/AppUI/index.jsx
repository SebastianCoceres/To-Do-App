import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosEmpty } from "../TodosEmpty";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toogleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter>
        <TodoSearch />
      </TodoCounter>
      <TodoList>
        {error && <TodosError error={error} />}
        {!error && loading && <TodosLoading />}
        {!error && !loading && !searchedTodos.length && <TodosEmpty />}

        {!error &&
          !loading &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.key}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toogleTodo(todo.key)}
              onDelete={() => deleteTodo(todo.key)}
            />
          ))}
      </TodoList>

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
