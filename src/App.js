import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

const todos = [
  'Diska',
  'Städa',
  'Ring mamma',
  'Bada katten',
  'Ring moster',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        { todos.map(todo => (
          <Todo value={ todo }/>
        )) }
      </div>
    );
  }
}

export default App;