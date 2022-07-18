import React from "react";

import { TodoContext } from "../todocontext"

import "../styles/TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = evt => {
        setNewTodoValue(evt.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Hacer el mercado..."
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export default TodoForm;