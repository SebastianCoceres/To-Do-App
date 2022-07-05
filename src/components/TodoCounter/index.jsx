import React from "react";
import "./TodoCounter.css";
import image from "../../assets/3d-me2.png";
import { TodoContext } from "../../TodoContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TodoCounter(props) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  const percentage = (completedTodos * 100) / totalTodos;
  return (
    <header className="TodoCounter">
      <div>
        <figure className="TodoCounter__image">
          <img src={image} alt="" />
        </figure>
      </div>
      <div>
        <section className="TodoCounter__text">
          <h1 className="TodoCounter__text--appTitle">
            To-Do App <hr />
          </h1>
          <div className="TodoCounter__text--counters">
            <div className="canvas-container">
              {totalTodos > 0 &&
                <CircularProgressbar
                  value={percentage}
                  text={`${completedTodos}/${totalTodos}`}
                  circleRatio={0.75}
                  styles={buildStyles({
                    pathColor: "#28a745",
                    textColor: "#fff",
                    rotation: 1 / 2 + 1 / 8,
                    strokeLinecap: "butt",
                    trailColor: "#eee",
                  })}
                />
              }
              {totalTodos === 0 && <span> 🤷‍♂️ </span>}
            </div>
          </div>
          {props.children}
        </section>
      </div>
    </header>
  );
}

export { TodoCounter };
