import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'Daily Todo 4 the World!',
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

  toggleTodoDone(event, index){
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    }
    this.setState({
      todos
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone(){
    this.value = (this.value === true) ? false : true;
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: this.value,
      };
    });

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input 
            onChange={(event) => this.newTodoChanged(event)} 
            id="newTodo" 
            name="newTodo"
            value={this.state.newTodo}>
          </input>
          <button type="submit">Add Todo</button>
        </form>
        <button value="" onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
              return (<li key={todo.title}>
                  <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
                  <span className={todo.done ? 'done' : ''}>{todo.title}</span>
                  <button onClick={() => this.removeTodo(index)}>Remove</button>
          </li>)})}
        </ul>
      </div>
    );
  }
}

export default App;
