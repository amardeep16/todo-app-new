import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import Counter from './component/counter/Counter'
import Todo from './component/todo/Todo';
class App extends Component {
  render () {

    return (
      <div className="App">
       <Todo/>
      </div>
    );
  }
}

export default App;
