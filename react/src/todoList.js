import React from 'react';
import { TodoItem } from './todoItem';

export const TodoList = function({list, toggleDoneFlag, removeItem}) {

  const todoItems = list.map( ({text, done}, index) =>
  <TodoItem
    text={text}
    done={done}
    key={index}
    toggleDoneFlag={toggleDoneFlag}
    removeItem={removeItem}
    index={index}
  />);
  return (
    <div className="todo-list-viewport">
      <ul className="todo-list">
        {todoItems}
      </ul>
    </div>
  );
};