import "./style.css/Todo.css";
import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import au from "./assets/au.png";
import ad from "./assets/ad.png";
import { useState } from "react";

const Todo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [type, setType] = useState(0);

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
  };
  const addTask = (event) => {
    if (event.keyCode === 13) {
      const content = document.getElementById("inputBox");
      if (!content.value.trim()) {
        alert("Please enter your task!");
      }
      if (content.value) {
        const newTask = {
          id: tasks.length === 0 ? 1 : tasks[0].id + 1,
          text: `${content.value}`,
          completed: false,
        };
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
  const showAll = () => {
    setType(0);
  };

  return (
    <div className="bigBox">
      <Header />
      <div className="inputContent">
        <img
          src={isOpen ? au : ad}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          alt={isOpen ? "arrow-up" : "arrow-down"}
        />
        <input
          className="input-box"
          id="inputBox"
          placeholder="what's next"
          onKeyDown={addTask}
        />
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

      <div className="filterMachine">
        <div className="left-item"> {tasks.length} item left</div>
        <div className="type-filter">
          <span className="all" onClick={showAll}>
            All
          </span>
          <span className="active" onClick={showActive}>
            Active
          </span>
          <span className="completed" onClick={showCompleted}>
            Completed
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
