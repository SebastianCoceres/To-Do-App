import React from "react";
import ReactLoading from "react-loading";
import "./TodosLoading.css"

function TodosLoading() {
  return (
    <div className="TodoLoading">
      <ReactLoading type={"bars"} color="blue" />
      <p>Cargando...</p>
    </div>
  );
}

export { TodosLoading };
