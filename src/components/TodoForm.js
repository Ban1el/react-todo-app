import styles from "../styles/styles.module.css";

const TodoForm = ({ todo, todoList, setTodo, setTodoList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: todoList.length }]);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.add_task_container}>
      <div className={styles.input_form_group}>
        <label className={styles.form_label}>Title:</label>
        <input className={styles.input_field} type="text" />
      </div>

      <div className={styles.input_form_group}>
        <label className={styles.form_label}>Description:</label>
        <input
          className={styles.input_field}
          onChange={handleChange}
          type="text"
        />
      </div>

      <button className={styles.add_button} type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
