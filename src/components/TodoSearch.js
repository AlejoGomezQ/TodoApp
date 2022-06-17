import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch() {
    return (
        <React.Fragment>
            <h4>Crear nueva tarea</h4>
            <input placeholder="Escriba su nueva tarea" className="todo-input"/>
        </React.Fragment>
    );
}

export default TodoSearch;