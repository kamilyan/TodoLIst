import React, { createContext, useReducer } from "react";

const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [...todos, action.payload];
    case "TOGGLE-TODO":
      return action.payload;
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
};

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);

  function createTodo(todo) {
    dispatch({
      type: "ADD",
      payload: todo
    });
  }

  function toggleTodo(id) {
    let tempTodos = [...todos];
    let index = tempTodos.findIndex((todos) => todos.id === id);
    tempTodos[index].done = !tempTodos[index].done;

    dispatch({
      type: "TOGGLE-TODO",
      payload: tempTodos,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  return (
    <TodosContext.Provider
      value={{ todos, createTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;