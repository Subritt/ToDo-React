import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'React Crash Course',
        completed: false
      },
      {
        id: uuid(),
        title: 'Team Sync-up',
        completed: false
      }
    ]
  }

  // Use bind while calling or use an arrow function
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => (todo.id !== id))] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState( {todos: [...this.state.todos, newTodo] } )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={ this.addTodo }/>
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } />
        </div>
      </div>
    );
  }
}

export default App;
