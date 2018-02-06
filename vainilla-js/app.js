//Element Caching
const addButton = document.querySelector('.add-button');
const todoListContainer = document.querySelector('.todo-list');

//Initial values
const todoItemTmp = `
<li class="todo-item">
  <h3 class="todo-title"></h3>
  <div class="todo-item-actions">
    <input type="checkbox" class="done-checkbox" />
    <label for="">Done</label>
    <button class="remove-button">Remove</button>
  </div>
</li>
`;

let todoList = [];

/*  === event handlers === */
addButton.addEventListener('click', e => {
  const inputVal = getInputValue();
  addTodoItem(inputVal);
  renderList(todoList);
});

// helper functions
function getInputValue() {
  const textInput = document.querySelector('.todo-input');
  return textInput.value;
}

function addTodoItem(text) {
  todoList.push({
    text,
    done: false
  });
}

function removeTodoItem(index) {
  todoList.splice(index, 1);
}

function toggleDoneCheckbox(index) {
  const done = todoList[index].done;
  todoList[index].done = !done; 
}

function renderList(list = []) {
  todoListContainer.innerHTML = '';
  list.forEach( (item, index) => {
    appendtodoElem(item, index);
  });
}

function appendtodoElem(item, index) {
  //build the thing
  const todoElem = document.createElement('li');
  todoElem.innerHTML = todoItemTmp;
  todoElem.querySelector('.todo-title').textContent = item.text;
  const doneCheckbox = todoElem.querySelector('.done-checkbox');
  console.log(doneCheckbox.checked);
  if (item.done) {
    doneCheckbox.checked = true;
    
  }
  
  //add the remove button event listener
  const removeButton = todoElem.querySelector('.remove-button');
  removeButton.addEventListener('click', e => {
    removeTodoItem(index);
    renderList(todoList);
  });

  //add the checkout event listener
  doneCheckbox.addEventListener('click', e => {
    e.preventDefault();
    toggleDoneCheckbox(index);
    renderList(todoList);
  });

  //append the new element
  todoListContainer.appendChild(todoElem);
}