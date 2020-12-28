import React, { useContext } from "react";

import { TodosContext } from "../../../TodosProvider";

import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  return (
    <div>
      <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
        <RiDeleteBin5Line />
      </button>
      <div>{todo.details}</div>
      <button className="doneBtn" onClick={() => toggleTodo(todo.id)}>
        <FaRegThumbsUp />
      </button>
    </div>
  );
};

export default TodoItem;
