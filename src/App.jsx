import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

const App = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndexNo, setEditIndexNo] = useState(null);
  const [editInputValue, setEditInputValue] = useState("");
  const [dark, setDark] = useState(true);

  const addTodo = () => {
    if (todoValue.length < 3) {
      alert("Invalid Value!");
      return;
    }
    setTodos([todoValue, ...todos]);
    setTodoValue("");
  };

  const deleteAll = () => setTodos([]);

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const saveHandler = (index) => {
    todos.splice(index, 1, editInputValue);
    setTodos([...todos]);
    setEditIndexNo(null);
    setEditInputValue("");
  };

  const editTodo = (indexNo) => setEditIndexNo(indexNo);
  return (
    <section
      className={`min-h-screen w-full ${
        dark ? "bg-[#111827]" : "bg-amber-100"
      } flex flex-col justify-start items-center px-4 py-8 gap-6`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D97706] text-center">
        React Todo App
      </h1>
      <Button
        onClick={() => setDark(!dark)}
        className="border-2 border-[#D97706] rounded-md px-3 py-1 text-[#D97706] hover:bg-[#D97706]/60 hover:text-[#111827] transition"
        title={dark ? "☀️ Light" : "🌙 Dark"}
      />
      <div className="flex flex-col md:flex-row w-full max-w-2xl gap-3 items-center">
        <InputField
          type="text"
          placeholder="Enter Todo..."
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <div className="flex gap-2 w-full md:w-auto justify-center">
          <Button title="Add" onClick={addTodo} />
          <Button title="Delete All" onClick={deleteAll} />
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <ul className="flex flex-col gap-3">
          {todos.map((value, index) => {
            return editIndexNo === index ? (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-center gap-2 
                           px-3 py-2 rounded-lg border border-[#D97706]"
              >
                <InputField
                  placeholder="Edit Value..."
                  onChange={(e) => setEditInputValue(e.target.value)}
                  value={editInputValue}
                />
                <div className="flex gap-2">
                  <Button title="Save" onClick={() => saveHandler(index)} />
                  <Button title="Cancel" onClick={() => setEditIndexNo(null)} />
                </div>
              </li>
            ) : (
              <ListItem
                key={index}
                value={value}
                index={index}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default App;
