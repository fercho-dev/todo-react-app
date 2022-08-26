import React from "react";
import './EmptyTodos.css'

function EmptyTodos() {
    return (
        <div className="EmptyTodos-container">
            <p>¡Hola! Crea tu primer ToDo</p>
            <img src="./spacewoman.png" alt="spacewoman"></img>
        </div>
    );
}

export { EmptyTodos };