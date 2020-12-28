import React, { useContext, useState } from "react";
import { TodosContext } from "../../TodosProvider";
import { v4 } from "uuid";

const AddTodo = () => {
  const [details, setDetails] = useState("");
  const { createTodo } = useContext(TodosContext);

  const sumbitHandler = (e) => {
    e.preventDefault();
    const id = v4();
    const done = false;
    const newTodo = { id, details, done };
    createTodo(newTodo);
    setDetails("");
  };

  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <label>Todo</label>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          required
        />
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
