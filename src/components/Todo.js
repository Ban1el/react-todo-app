const Todo = ({ todoItem, setTodoList, todoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div>
      <p>{todoItem.name}</p>
      <p>{todoItem.id}</p>
      <button onClick={deleteTodo}>Done</button>
    </div>
  );
};

export default Todo;
