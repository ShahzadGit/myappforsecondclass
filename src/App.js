import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Hello.js';
import Hello from './Hello.js';

function App(props) {
  return (
    <div className="App">
     <h1>Hello World, again...</h1>
  <h2>Name: {props.name}</h2>
  <h2>Age: {props.age}</h2>
  <Hello></Hello>
    </div>
  );
}

export default App;
