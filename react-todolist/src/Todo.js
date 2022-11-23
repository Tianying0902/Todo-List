import "./style.css/Todo.css";
import React from "react";
import List from "./List";
import { useState } from "react";

// import ad from "./assets/ad.png";
// import au from "./assets/au.png";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const addTask = (event) => {
    if (event.keyCode === 13) {
      const content = document.getElementById("inputBox");
      if (!content.value) {
        alert("Please enter your task!");
      }
      if (content.value) {
        const newTask = { text: `${content.value}`, completed: true };
        setTasks([newTask, ...tasks]);
        content.value = "";
      }
      console.log(tasks);
    }
  };
  return (
    <div className="bigBox">
      <div className="inputContent">
        <img
          // src="./assets/au.png"
          src={isOpen ? "./assets/ad.png" : "./assets/au.png"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          alt="arrow-up"
        />
        <input id="inputBox" placeholder="what's next" onKeyDown={addTask} />
      </div>
      <List lists={tasks} />
      {/* <div className="list">
        {tasks.map((task, index) => (
          <li key={index} className="task">
            {task.text}
            <span>X</span>
          </li>
        ))}
      </div> */}
    </div>
  );
};
export default Todo;
