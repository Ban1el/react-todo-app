import styles from "../styles/styles.module.css";

const Todo = ({ todoItem, setTodoList, todoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div className={styles.todo_panel}>
      <div className="col-1">
        <h1>{todoItem.title}</h1>
        <p>{todoItem.description}</p>
      </div>

      <div className="col-2">
        <button onClick={deleteTodo}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
