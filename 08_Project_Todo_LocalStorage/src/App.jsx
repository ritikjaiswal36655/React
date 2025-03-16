import { useState, useEffect } from "react";

import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoFormUI from "./components/TodoFormUI";
import TodoItemUI from "./components/TodoItemUI";

function App() {
  const [todoMsg, setTodoMsg] = useState([]);

  const addTodo = todoElement => {
    setTodoMsg(prev => [{ id: Date.now(), ...todoElement }, ...prev]);
  };
  const updateTodo = (id, msg) => {
    setTodoMsg(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, msg } : todo))
    );
  };
  const deleteTodo = id => {
    setTodoMsg(prev => prev.filter(todo => todo.id !== id));
  };
  const toggleCompleted = id => {
    setTodoMsg(prev =>
      prev.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodoMsg(todos);
  }, []);
  useEffect(
    () => {
      localStorage.setItem("todos", JSON.stringify(todoMsg));
    },
    [todoMsg]
  );
  return (
    <TodoProvider
      value={{
        todo: todoMsg,
        addTodo,
        deleteTodo,
        toggleCompleted,
        updateTodo
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoFormUI />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todoMsg.map(todoIndi =>
              <div key={todoIndi.id} className="w-full">
                <TodoItemUI todo={todoIndi} />
              </div>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
