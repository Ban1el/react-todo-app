const TodoForm = ({ todo, todoList, setTodo, setTodoList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: todoList.length }]);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>What is the Agenda for today?</p>
      <input onChange={handleChange} type="text" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
