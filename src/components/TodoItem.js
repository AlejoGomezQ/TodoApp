import React from "react";

//Styles
import '../styles/TodoItem.css';

//Icons
import { BsCheckCircle } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

function TodoItem(props) {
    return (
        <li className="todo">
            <button className="check"><BsCheckCircle/></button>
            <p className="task">{props.text}</p>
            <button className="un-check"><BsTrash/></button>
        </li>
    );
}

export default TodoItem;