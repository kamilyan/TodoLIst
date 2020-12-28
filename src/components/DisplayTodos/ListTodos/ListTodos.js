import React, { useContext } from "react";
import { TodosContext } from "../../TodosProvider";
import TodoItem from "./TodoItem";

const ListTodos = () => {
  const { todos } = useContext(TodosContext);
  const totalDoneTodos = todos.reduce(
    (doneCounter, { done }) => (done ? doneCounter + 1 : doneCounter),
    0
  );

  return (
    <div>
      <h1>
        Todo List ( total: {todos.length} done: {totalDoneTodos} )
      </h1>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "completed" : "uncompleted"}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodos;
