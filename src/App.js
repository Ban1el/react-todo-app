// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./styles/app.css";
import Panel from "./components/Panel";

function App() {
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Todos</h1>
        <Panel
          todo={todo}
          todoList={todoList}
          setTodo={setTodo}
          setTodoList={setTodoList}
          todoDescription={todoDescription}
          setTodoDescription={setTodoDescription}
        ></Panel>
      </div>
    </div>
  );
}

export default App;
