import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

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
            disabled={loading}
        />
    );
}

export { TodoSearch };