const todoItemTmp = `
<li class="todo-item">
  <h3 class="todo-title"></h3>
  <div class="todo-item-actions">
    <input type="checkbox" class="done-checkbox" />
    <label for="">Done</label>
    <button class="remove-button">Remove</button>
  </div>
</li>`;

let todoList = [];

$(window).on('load', function() {
  const addButton = $('.add-button');

  addButton.on('click', e => {
    const todoInputValue = $('.todo-input').val();
    addTodoItem(todoInputValue);
    renderList();
  });
});

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
  todoList[index].done = !todoList[index].done;
}

function renderList() {
  $('.todo-list').html('');
  todoList.forEach((item, index) => {
    let todoItem = $(todoItemTmp);
    todoItem.find('.todo-title').html(item.text);
    if (item.done) {
      todoItem.find('.done-checkbox').prop('checked', true);
    }

    todoItem.find('.remove-button').on('click', () => {
      removeTodoItem(index);
      renderList();
    });

    todoItem.find('.done-checkbox').on('click', e => {
      e.preventDefault();
      toggleDoneCheckbox(index);
      renderList();
    })
    $('.todo-list').append(todoItem);
  });
}