import { TaskItemProps } from "../types/TaskType";

export function getListFromLS(){
  let list = localStorage.getItem('taskList') || ''
  return JSON.parse(list)
}

export function storeListOnLS(taskList: TaskItemProps[]){
  localStorage.setItem('taskList', JSON.stringify(taskList))
}