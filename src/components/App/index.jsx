import React from "react";
import { TodoProvider } from "../../TodoContext";
import { AppUI } from "../AppUI";

// const defaultTodos = [
//   { key: "1", text: "Cortar cebolla", completed: true },
//   { key: "2", text: "Curso de react", completed: false },
//   { key: "3", text: "hacer proyecto", completed: true },
//   { key: "4", text: "otro to-do", completed: false },
//   { key: "5", text: "otro to-do", completed: false },
//   { key: "6", text: "otro to-do", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
