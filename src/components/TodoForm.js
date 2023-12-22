import styles from "../styles/styles.module.css";

const TodoForm = ({
  todo,
  todoList,
  setTodo,
  setTodoList,
  setTodoDescription,
  todoDescription,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      { title: todo, description: todoDescription, id: todoList.length },
    ]);
  };

  const handleDescriptionChange = (event) => {
    setTodoDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.add_task_container}>
      <div className={styles.input_form_group}>
        <label className={styles.form_label}>Title:</label>
        <input
          className={styles.input_field}
          onChange={handleTitleChange}
          type="text"
        />
      </div>

      <div className={styles.input_form_group}>
        <label className={styles.form_label}>Description:</label>

        <input
          onChange={handleDescriptionChange}
          className={styles.input_field}
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
