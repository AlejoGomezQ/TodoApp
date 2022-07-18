import React from "react";
import '../styles/TodoSearch.css';
import { TodoContext } from "../todocontext"

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const searchValueChange = (evt) => {
        setSearchValue(evt.target.value);
    };

    return (
        <React.Fragment>
            <h4>Crear nueva tarea</h4>
            <input 
                placeholder="Escriba su nueva tarea" 
                className="todo-input" 
                value={ searchValue }
                onChange={ searchValueChange } />
        </React.Fragment>
        );
}

export default TodoSearch;