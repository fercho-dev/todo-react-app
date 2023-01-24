import React from "react";
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
    
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form className="form-new-todo" onSubmit={onSubmit}>
            <label>Escribe tu tarea:</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ver House of the Dragon"
            />
            <div>
                <button className="button-cancel" type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="button-submit" type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };