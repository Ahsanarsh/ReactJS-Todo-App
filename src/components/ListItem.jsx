import React from "react";
import Button from "./Button";

const ListItem = ({ value, index, editTodo, deleteTodo }) => {
  return (
    <li
      className="flex flex-col sm:flex-row items-center justify-between gap-2 
                 px-3 py-2 rounded-lg border border-[#D97706] 
                 text-xl sm:text-2xl text-[#D97706]"
    >
      <span className="flex-1 text-center sm:text-left">{value}</span>
      <div className="flex gap-2 justify-center">
        <Button title="Edit" onClick={() => editTodo(index)} />
        <Button title="Delete" onClick={() => deleteTodo(index)} />
      </div>
    </li>
  );
};

export default ListItem;
