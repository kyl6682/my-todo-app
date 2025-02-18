import { useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import useRefInput from "../hooks/useTodos";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 0, content: "todo item 1" },
    { id: 1, content: "todo item 2" },
  ]);

  // 리스트에 할 일 추가
  const addTodo = (todoContent) => {
    const newTodo = { id: Date.now(), content: todoContent };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // 특정 id의 todo 내용 변경
  const updateTodo = (id, newContent) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
        ))}
      </ul>
      <AddTodo addTodo={addTodo} />
    </>
  );
}

function AddTodo({ addTodo }) {
  const { inputRef, getInputValue } = useRefInput();

  const handleAddTodo = () => {
    const todoValue = getInputValue();
    if (todoValue.trim() === "") return;

    addTodo(todoValue);

    if (inputRef.current) inputRef.current.value = ""; // 입력창 초기화
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="할 일을 입력하세요." />
      <button onClick={handleAddTodo}>추가</button>
    </>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoList;
