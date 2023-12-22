import styles from "../styles/styles.module.css";
import TodoForm from "./TodoForm";
import React from "react";
import TodoList from "./TodoList";

const Panel = ({ todo, todoList, setTodo, setTodoList }) => {
  return (
    <div className={styles.panel}>
      <TodoForm
        todo={todo}
        todoList={todoList}
        setTodo={setTodo}
        setTodoList={setTodoList}
      ></TodoForm>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Panel;
