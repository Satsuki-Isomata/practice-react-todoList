import React from 'react';
import { render } from 'react-dom';

export class TodoList extends React.Component {
  handleDelate(){
    this.props.onTodoDelate(this.props.todo.id)
  }

  render() {
    return (
      <div className="todo">
        <h2 className="todo-inner ttl">{this.props.todo.title}</h2>
        <p className="todo-inner txt">{this.props.todo.text}</p>
        <button className="todo-inner btn remove" onClick={this.handleDelate.bind(this)}>削除</button>
      </div>
    )
  }
}