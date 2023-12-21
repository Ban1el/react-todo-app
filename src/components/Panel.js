import TodoForm from "./TodoForm";

const Panel = ({ todo, todoList, setTodo, setTodoList }) => {
  return (
    <div>
      <TodoForm
        todo={todo}
        todoList={todoList}
        setTodo={setTodo}
        setTodoList={setTodoList}
      ></TodoForm>
    </div>
  );
};

export default Panel;
