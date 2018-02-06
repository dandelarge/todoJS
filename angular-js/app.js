angular.module('todoApp', [])
.controller('todoController', ($scope) => {
  $scope.todoInput = '';
  $scope.todoList = [];
  
  $scope.addItem = function(){
    $scope.todoList.push({
      text: $scope.todoInput,
      done: false
    });

    $scope.todoInput = '';
  };

  $scope.removeTodoItem = function (index) {
    $scope.todoList.splice(index, 1);
  } 

});