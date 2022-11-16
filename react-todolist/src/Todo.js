import "./todo.css";
import pic from "./assets/arrow.png";
const Todo = () => {
  return (
    <div>
      <h1 className="content">todos</h1>
      <div className="todo">
        <img src={pic} alt="image" />
        <p className="content">what's next?</p>
      </div>
    </div>
  );
};
export default Todo;
