import { FinanceDataProps } from "../types/FinanceDataProps"
import { TodoItemProps } from "../types/TodoItemProps"

/**
 * TODO 
 */
export function getTodoListFromLS(){
  let list = localStorage.getItem('todoList') || ''
  return JSON.parse(list)
}

export function setTodoListToLS(todoList: TodoItemProps[]){
  let list = JSON.stringify(todoList)
  localStorage.setItem('todoList', list)
}

/**
 * FINANCE 
 */
export function getFinanceListFromLS(){
  let list = localStorage.getItem('financeList')
  if (list != null) return JSON.parse(list)
  return []
}

export function setFinanceListToLS(financeList: FinanceDataProps[]){
  let list = JSON.stringify(financeList)
  localStorage.setItem('financeList', list)
}

export function getFinanceResumeFromLS(){
  let list = localStorage.getItem('financeResume')
  if (list != null) return JSON.parse(list)
  return null
}

export function setFinanceResumeToLS(income: number, expense: number, balance: number){
  let list = JSON.stringify({ income, expense, balance })
  localStorage.setItem('financeResume', list)
}