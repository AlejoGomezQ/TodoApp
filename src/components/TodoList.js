import React from "react";
import '../styles/TodoList.css';

function TodoList(props) {
    return (
        <section className="todo-list__container">
            <ul>
                { props.children }
            </ul>
        </section>
    );
}

export default TodoList;