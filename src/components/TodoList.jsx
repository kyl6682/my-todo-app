import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [ todos, setTodos ] = useState([
        {id : 0, content : 'todo item 1'},
        {id : 1, content : 'todo item 2'}
    ]);
    

    return (
        <>
            <ul>
                { todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    )
}



export default TodoList;