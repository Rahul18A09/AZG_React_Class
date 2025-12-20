import { useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="container d-flex vh-100 justify-content-center align-items-center">
      <div className="card shadow p-4">
        <h1 className="mb-3 text-center">Todo App</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex flex-column ">
            <input
              type="text"
              placeholder="Add new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="mb-3 p-2"
            />

            <button type="submit" className="btn btn-outline-primary">
              Add Todo
            </button>
          </div>
        </form>

        <ul className="mb-3">
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDelete(index)} className="btn btn-outline-danger ms-2 p-1">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
