import "./style.css/Todo.css";
import React from "react";
import List from "./List";
import au from "./assets/au.png";
import ad from "./assets/ad.png";
import { useState, useEffect } from "react";

const Todo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log(tasks);
  });
  const removeItem = (id) => {
    const result = tasks.findIndex((task) => task.id === id);
    tasks.splice(result, 1);
    setTasks([...tasks]);
  };
  const markItem = (id) => {
    const newTasks = [...tasks];
    const result = newTasks.filter((task) => task.id === id);
    let element;
    for (let index = 0; index < result.length; index++) {
      element = result[index];
    }
    element.completed = !element.completed;
    setTasks(newTasks);
    console.log(tasks);
  };
  const editItem = (id, value) => {
    const newTasks = [...tasks];
    const result = newTasks.filter((task) => task.id === id);
    let element;
    for (let index = 0; index < result.length; index++) {
      element = result[index];
    }
    if (!value) {
      alert("please enter your task");
    }
    if (value) {
      element.text = value;
      setTasks(newTasks);
    }
    console.log(tasks);
  };
  const addTask = (event) => {
    if (event.keyCode === 13) {
      const content = document.getElementById("inputBox");
      if (!content.value) {
        alert("Please enter your task!");
      }
      if (content.value) {
        const newTask = {
          id: tasks.length === 0 ? 1 : tasks[0].id + 1,
          text: `${content.value}`,
          completed: false,
        };
        // setTasks([newTask, ...tasks]);
        setTasks((tasks) => {
          return [newTask, ...tasks];
        });
        content.value = "";
      }
    }
  };

  return (
    <div className="bigBox">
      <div className="inputContent">
        <img
          // src="./assets/au.png"
          src={isOpen ? au : ad}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          alt={isOpen ? "arrow-up" : "arrow-down"}
        />
        <input id="inputBox" placeholder="what's next" onKeyDown={addTask} />
      </div>
      <List
        lists={tasks}
        removeItem={removeItem}
        markItem={markItem}
        editItem={editItem}
      />
      <div className="filterMachine"></div>
    </div>
  );
};
export default Todo;
