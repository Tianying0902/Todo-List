import React from "react";
import "./style.css/Item.css";
import { useState } from "react";

const Item = (props) => {
  const [status, setStatus] = useState(props.status);
  const [content, setContent] = useState(true);
  const changeContent = () => {
    setContent(!content);
  };
  const markItem = () => {
    setStatus(!status);
    console.log(status);
    props.markItem(props.id);
  };
  const removeItem = () => {
    props.removeItem(props.id);
  };
  const editItem = (event) => {
    // props.editItem(props.id);
    if (event.keyCode === 13) {
      setContent(!content);
      let value = document.getElementById(props.id).value;
      console.log(value);
      props.editItem(props.id, value);
    }
  };
  return content ? (
    <li className="task" onDoubleClick={changeContent}>
      <input className="check-input" type="checkbox" onClick={markItem} />
      <p
        className="content"
        style={{ textDecoration: status ? "Line-through" : "" }}
      >
        {props.text}
      </p>
      <span onClick={removeItem}>X</span>
    </li>
  ) : (
    <li className="task" onDoubleClick={changeContent}>
      <input className="check-input" type="checkbox" onClick={markItem} />
      <input
        className="edited-box"
        id={props.id}
        placeholder={props.text}
        onKeyDown={editItem}
      />
      <span onClick={removeItem}>X</span>
    </li>
  );
};
export default Item;
