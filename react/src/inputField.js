import React from 'react'

export const InputField = function(props) {
  let text;
  return (
    <div className="input-container">
      <input type="text" ref={ input => text = input} />
      <button onClick={() => {
        props.addTodo(text.value);
        text.value = '';
      }}>+</button>
    </div>
  );
}