import React from "react";
import "../style.css/Item.css";
import { useState } from "react";

const Item = (props) => {
  const [status, setStatus] = useState(props.status);
  const [content, setContent] = useState(true);
  const [visible, setVisible] = useState(false);
  const changeContent = () => {
    setContent(!content);
  };
  const markItem = () => {
    setStatus(!status);
    setVisible(!visible);
    // if (status === true) {
    //   setVisible(true);
    // } else {
    //   setVisible(false);
    // }
    console.log(status);
    props.markItem(props.id);
  };
  const resetItem = () => {
    setStatus(!status);
    console.log(status);
    props.resetItem(props.id);
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
      {visible ? (
        <span
          className="check-input"
          type="checkbox"
          onClick={markItem}
          onDoubleClick={resetItem}
          defaultChecked={status}
        >
          ✓
        </span>
      ) : (
        <span
          className="check-input"
          type="checkbox"
          onClick={markItem}
          onDoubleClick={resetItem}
          defaultChecked={status}
        ></span>
      )}
      <p
        className="content"
        style={{ textDecoration: status ? "Line-through" : "" }}
      >
        {props.text}
      </p>
      <span onClick={removeItem} className="delete">
        ×
      </span>
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
      <span onClick={removeItem}>✕</span>
    </li>
  );
};
export default Item;
