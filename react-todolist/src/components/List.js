import React from "react";
import "../style.css/List.css";
import Item from "./Item";
const List = (props) => {
  const removeItem = (id) => {
    props.removeItem(id);
  };
  const editItem = (id, value) => {
    props.editItem(id, value);
  };
  const markItem = (id) => {
    props.markItem(id);
  };
  const resetItem = (id) => {
    props.resetItem(id);
  };
  const items = props.lists.map((task) => (
    <Item
      key={task.id}
      className="task"
      text={task.text}
      markItem={markItem}
      resetItem={resetItem}
      removeItem={removeItem}
      editItem={editItem}
      id={task.id}
      status={task.completed}
    >
      {task.text}
      <span>X</span>
    </Item>
  ));
  return <div className="list">{items}</div>;
};
export default List;
