import React, { Component } from 'react';
import { InputField } from './inputField';
import { TodoList } from './todoList';

export class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.toggleDoneFlag = this.toggleDoneFlag.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {todoList: []};
  }

  addTodo(text) {
    const prevState = this.state.todoList;
    this.setState( {todoList: [...prevState, {text, done:false}]} );
  }

  toggleDoneFlag(index) {
    let todoList = this.state.todoList;
    todoList[index].done = !todoList[index].done;
    this.setState({todoList});
  }

  removeItem(index) {
    let todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({todoList});
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Things to do</h1>
        <InputField addTodo={this.addTodo}/>
        <TodoList
          list={this.state.todoList}
          toggleDoneFlag={this.toggleDoneFlag}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}