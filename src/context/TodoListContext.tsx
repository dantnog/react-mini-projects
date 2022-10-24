import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getTodoListFromLS, setTodoListToLS } from "../hooks/useLocalStorage";
import { TodoContextProps } from "../types/TodoContextProps";
import { TodoItemProps } from "../types/TodoItemProps";

const TodoListContext = createContext({} as TodoContextProps)

export function useTodoList() {
  return useContext(TodoListContext)
}

type ProviderProps = {
  children: ReactNode
}

export function TodoListProvider({ children }: ProviderProps) {
  const [todoList, setTodoList] = useState<TodoItemProps[]>(() => getTodoListFromLS())

  function addTodo(newTodo: TodoItemProps) {
    setTodoList(prev => [...prev, newTodo])
  }

  function removeTodo(id: number) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function setDone(id: number) {
    let dt = new Date()
    let min: any = dt.getMinutes()
    min < 10 ? min = String('0'+min) : null
    let time = `${dt.getHours()}:${min}`
    setTodoList(todoList.map(todo => {
      if (todo.id === id){
        return {...todo, end: time, done: true}
      }
      return todo
    }))
  }

  useEffect(() => {
    setTodoListToLS(todoList)
  }, [todoList])

  return(
    <TodoListContext.Provider value={{todoList, addTodo, removeTodo, setDone}}>
      { children }
    </TodoListContext.Provider>
  )
}