//Element Caching
const addButton = document.querySelector('.add-button');
const todoListContainer = document.querySelector('.todo-list');

//Initial values
const todoItemTmp = `
<li class="todo-item">
  <h3 class="todo-title"></h3>
  <div class="todo-item-actions">
    <input type="checkbox" name="">
    <label for="">Done</label>
    <button class="remove-button">Remove</button>
  </div>
</li>
`;

/*  === event handlers === */
addButton.addEventListener('click', e => {
  const inputVal = getInputValue();
  appendtodoElem(inputVal);
});

// helper functions
function getInputValue() {
  const textInput = document.querySelector('.todo-input');
  return textInput.value;
}

function appendtodoElem(text) {
  //build the thing
  const todoElem = document.createElement('li');
  todoElem.innerHTML = todoItemTmp;
  todoElem.querySelector('.todo-title').textContent = text;
  
  //add the remove button event listener
  const removeButton = todoElem.querySelector('.remove-button');
  removeButton.addEventListener('click', e => {
    todoListContainer.removeChild(e.target.parentElement.parentElement);
  });

  //append the new element
  todoListContainer.appendChild(todoElem);
}