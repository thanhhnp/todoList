import { observable, action, computed, decorate } from "mobx";
import todoList from "../constants/todoStore";

class TodoStore {
  todos = todoList;
  addTodo = (todo) => {
    this.todos.push(todo);
    console.log(todo.id);
  };

  get todoCount() {
    return (
      this.todos.filter((todo) => todo.status === true).length +
      "/" +
      this.todos.length
    );
  }
}
decorate(TodoStore, {
  todos: observable,
  addTodo: action,
  todoCount: computed,
});

export default TodoStore;
