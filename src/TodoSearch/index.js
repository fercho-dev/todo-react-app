import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <input
            key="inputSearch"
            className="TodoSearch"
            placeholder="Buscar..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };