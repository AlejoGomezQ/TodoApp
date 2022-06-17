import React from "react";
import image from "../assets/add_task_img.jpg";

//Styles
import '../styles/TodoImage.css';

function TodoImage() {
    return (
        <img src={image} alt="add_task"/>
    );
}

export default TodoImage;