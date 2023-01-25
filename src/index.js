import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// function App(props) {
//     return (
//         <h1>{props.saludo}, {props.nombre}</h1>
//     )
// }

// function withSaludo(WrappedComponent) {
//     return function WrappedComponentWithSaludo(saludo) {
//         return function ComponenteDeVerdad(props) {
//             return (
//                 <React.Fragment>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                     <p>parrafo de acompañamiento</p>
//                 </React.Fragment>
//             )
//         }
//     }
// }

// const AppWithSaludo = withSaludo(App)("hola k ase")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AppWithSaludo nombre="Pedro"/>
    <App />
);