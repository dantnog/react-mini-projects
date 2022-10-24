import { TodoItemProps } from "./TodoItemProps"

export type TodoContextProps = {
  todoList: TodoItemProps[]
  addTodo: Function 
  removeTodo: Function
  setDone: Function
}