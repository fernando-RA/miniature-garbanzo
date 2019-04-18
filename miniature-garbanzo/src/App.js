import React, { Component } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

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
      
        <NewTodoForm 
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)} 
          newTodoChanged={this.newTodoChanged.bind(this)}>
        </NewTodoForm>

        <button value={false} onClick={() => this.allDone()}>All Done</button>
        
        <TodoList 
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}>
        </TodoList>
      </div>
    );
  }
}

export default App;
