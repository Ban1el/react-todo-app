import styles from "../styles/styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todoItem, setTodoList, todoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div className={styles.todo_panel}>
      <div className={styles.column_1}>
        <h1>{todoItem.title}</h1>
        <p>{todoItem.description}</p>
      </div>

      <div className={styles.column_2}>
        <button onClick={deleteTodo} className={styles.icon_button}>
          <FontAwesomeIcon
            icon={faCheck}
            className={styles.icon_button}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Todo;
