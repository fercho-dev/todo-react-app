// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'

// const defaultTodos = [
//   {text: 'cortar cebolla', completed: false},
//   {text: 'tomar el curso de react', completed: true},
//   {text: 'llorar con la llorona', completed: false},
// ];

function App(props) {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
