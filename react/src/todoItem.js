import React from 'react';

export const TodoItem = function({text, done, toggleDoneFlag, removeItem, index}) {
  return (
    <li className="todo-item">
      <h3 className="todo-title">{text}</h3>
      <div className="todo-item-actions">
        <input type="checkbox" checked={done} onChange={() => toggleDoneFlag(index)}/>
        <label>Done</label>
        <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
      </div>
    </li>
  );
};