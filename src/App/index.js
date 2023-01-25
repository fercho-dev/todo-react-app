// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useTodos } from './useTodos'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"
import { TodosLoading } from "../TodosLoading"
import { EmptyTodos } from "../EmptyTodos"
import { TodoHeader } from "../TodoHeader";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

// const defaultTodos = [
//   {text: 'cortar cebolla', completed: false},
//   {text: 'tomar el curso de react', completed: true},
//   {text: 'llorar con la llorona', completed: false},
// ];


function App(props) {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos,
        } = useTodos();
  
        return (
            <React.Fragment>
                <TodoHeader loading={loading}>
                    <TodoCounter 
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                        // loading={loading}
                    />
                    <TodoSearch 
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        // loading={loading}
                    />
                </TodoHeader>

                <TodoList
                    error={error}
                    loading={loading}
                    searchValue={searchValue}
                    searchedTodos={searchedTodos}
                    totalTodos={totalTodos}
                    onError={() => <p>¡Diablos!, hubo un error...</p>}
                    onLoading={() => <TodosLoading />}
                    onEmpty={() => <EmptyTodos />}
                    onEmptySearch={
                        (searchText) => <p>No hay resultados para {searchText}</p>
                    }
                    render={todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        )
                    }
                >
                    {/* {todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )} */}
                </TodoList>
    
                {openModal && (
                    <Modal>
                        <TodoForm 
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}
                
                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />

                <ChangeAlertWithStorageListener
                    sincronize={sincronizeTodos}
                />
            </React.Fragment>
        );
}

export default App;
