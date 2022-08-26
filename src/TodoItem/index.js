import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    // const onDelete = () => {
    //     alert('Borraste el todo' + props.text);
    // }

    return (
        <li>
            <div>
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                </p>
            </div>
            <span className="Icon Icon-delete">
            <span className="material-icons md-18" onClick={props.onDelete}>
                delete
            </span>
            </span>
        </li>
    );
}

export { TodoItem };