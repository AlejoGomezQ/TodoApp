import React from "react";
import '../styles/TodoCounter.css';
import { TodoContext } from "../todocontext"

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <h2 className="title">Has completado { completedTodos } de { totalTodos } tareas</h2>
    );
}

export default TodoCounter;