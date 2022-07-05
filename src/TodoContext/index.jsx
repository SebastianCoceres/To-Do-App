import React from "react";
import { useLocalStorage } from "./useLocalStoraje";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      key: newTodos.length > 0 ? newTodos[newTodos.length - 1].key + 1 : 1,
      text,
      completed: false,
    });

    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  const toogleTodo = (key) => {
    const todoIndex = todos.findIndex((todo) => todo.key === key);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }

    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (key) => {
    const todoIndex = todos.findIndex((todo) => todo.key === key);
    const newTodos = todos.filter((todo) => todo !== todos[todoIndex]);

    saveTodos(newTodos);
  };

  // React.useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     console.log(e.target);
  //   });
  // }, []);

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        toogleTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;

export { TodoContext, TodoProvider };
