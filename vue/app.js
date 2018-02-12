const todoApp = new Vue({
  el: '#todoApp',
  data: {
    todoList: [],
    inputText: ''
  },
  methods:{
    addTodo() {
      const text = this.inputText;
      this.todoList.push({text, done: false});
      this.inputText = '';
    }
  }
});