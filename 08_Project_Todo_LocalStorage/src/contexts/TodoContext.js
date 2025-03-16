import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [{ id: 1, msg: "Learn React", completed: false }],
  addTodo: todo => {},
  deleteTodo: id => {},
  toggleCompleted: id => {},
  updateTodo: (id, msg) => {}
});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
