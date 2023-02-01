// 1. import react and react libraries
import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App'
//import { ReactDOM } from "react";

// 2. get a reference to the div with id root
const el = document.getElementById('root');

// 3. tell react to take control of that element
const root = ReactDOM.createRoot(el);

// create a component
/*

function App(){
    let message = 'bye there';
    //let number = Math.random() > 0.5;
    if (Math.random() > 0.5){
        message='hello there';
    }
    return <h1>{message}</h1>;

}
*/

//props, argumentos de html, strings en comillas
// y numbers en llaves
// un objeto no puede ir entre etiquetas
//argumentos deben estar en camel case para react
/*
function App(){
    // return <input style={{border: '3px solid red'}} type="number" min={5} />;
    // return <textarea autoFocus={true}/> ;
    // atributos css se pasan como objetos, dentro de llaves, propiedades compuestas
    // van en camelCase, backgroundColor
    //return <input  maxLength={5} style={{border:'3px solid blue'}} />
    return <input placeholder="hi there" />
}

// 4. show the component on the screen
*/
 root.render(<App />)