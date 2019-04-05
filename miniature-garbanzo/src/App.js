import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'Hello World!',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      },
      {
        title: 'Learn React Native',
        done: false
      }]
    };
  }

  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted.bind(this)}>
          <label htmlFor="newTodo">New Todo</label>
          <input 
            onChange={(event) => this.newTodoChanged(event)} 
            id="newTodo" 
            name="newTodo"
            value={this.state.newTodo}>
          </input>
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {this.state.todos.map(
            todo => {return <li key={todo.title} >{todo.title}</li>})
          }
        </ul>
      </div>
    );
  }
}

export default App;