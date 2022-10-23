import { TodoItemProps } from "../types/TodoItemProps"

export function getTodoListFromLS(){
  let list = localStorage.getItem('todoList') || ''
  return JSON.parse(list)
}

export function setTodoListToLS(todoList: TodoItemProps[]){
  let list = JSON.stringify(todoList)
  localStorage.setItem('todoList', list)
}