import React from "react";
import './TodoList.css';

function TodoList(props) {
    const renderFuction = props.render || props.children;
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpty()}
            {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.searchValue)}

            <ul>
                {props.searchedTodos.map(todo => renderFuction(todo))}
            </ul>
        </section>
    );
}

export { TodoList };