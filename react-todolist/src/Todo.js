import "./style.css/Todo.css";
import React from "react";
import List from "./List";
import au from "./assets/au.png";
import ad from "./assets/ad.png";
import { useState, useEffect } from "react";

const Todo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [type, setType] = useState(0);
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

  const removeCompletedTask = () => {
    const newTasks = [...tasks];
    const rest = newTasks.filter((item) => item.completed === false);
    setTasks([...rest]);
  };
  const showCompleted = () => {
    setType(1);
  };
  const showActive = () => {
    setType(2);
  };

  return (
    <div className="bigBox">
      <div className="inputContent">
        <img
          src={isOpen ? au : ad}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          alt={isOpen ? "arrow-up" : "arrow-down"}
        />
        <input id="inputBox" placeholder="what's next" onKeyDown={addTask} />
      </div>
      {!isOpen ? (
        type === 0 ? (
          <List
            lists={tasks}
            removeItem={removeItem}
            markItem={markItem}
            editItem={editItem}
          />
        ) : type === 1 ? (
          <List
            lists={tasks.filter((task) => task.completed === true)}
            removeItem={removeItem}
            markItem={markItem}
            editItem={editItem}
          />
        ) : (
          <List
            lists={tasks.filter((task) => task.completed === false)}
            removeItem={removeItem}
            markItem={markItem}
            editItem={editItem}
          />
        )
      ) : null}
      <div className="filterMachine"></div>
      <div className="filterMachine">
        <div className="left-item"> {tasks.length} item left</div>
        <div className="type-filter">
          <span className="all">All</span>
          <span className="active" onClick={showActive}>
            Active
          </span>
          <span className="completed" onClick={showCompleted}>
            completed
          </span>
        </div>
        <div className="clear" onClick={removeCompletedTask}>
          clear completed
        </div>
      </div>
    </div>
  );
};
export default Todo;
