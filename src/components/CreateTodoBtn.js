import React from 'react';
import '../styles/CreateTodoBtn.css';

function CreateTodoBtn(props) {
  const onClickBtn = () => {
    props.setOpenModal(prevState => !prevState);
  };
  
  return (
    <button
      className="CreateTodoBtn"
      onClick={onClickBtn}
    >
      +
    </button>
  );
}

export default CreateTodoBtn;