import { useEffect, useState } from "react";

function DemoAsync() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response.json();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <h1> Fetching todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DemoAsync;
