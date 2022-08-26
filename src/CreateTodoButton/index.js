import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button className="new-task-button" onClick={onClickButton}>
            Agregar ToDo
        </button>
    );
}

export { CreateTodoButton };