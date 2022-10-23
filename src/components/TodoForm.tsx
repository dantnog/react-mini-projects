import { useState } from "react"
import { MdSaveAlt } from 'react-icons/md'
import { useTodoList } from "../context/TodoListContext"

export default function TodoForm(){
  const [name, setName] = useState('')
  const [start, setStart] = useState('')
  const { addTodo } = useTodoList()

  function handleForm(e: any){
    e.preventDefault()

    let newTask = {
      id: Math.random(),
      name: name,
      start: start,
      done: false
    }

    addTodo(newTask)

    setName('')
    setStart('')
  }

  return(
    <form onSubmit={handleForm} 
      className="flex flex-col sm:flex-row place-items-center bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
      <input type="text" 
        className="h-10 px-2 outline-none bg-transparent w-full" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New task..." />

      <input type="text" 
        className="h-10 w-full sm:w-36 px-2 outline-none bg-transparent" 
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="15:30 (optional) " />
      
      <button type="submit"
        className="h-10 w-16 text-2xl cursor-pointer grid place-items-center hover:text-green-500">
        <MdSaveAlt />
      </button>
    </form>
  )
}