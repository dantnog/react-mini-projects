import { useState } from "react"
import Button from "./Button"
import { MdSaveAlt } from 'react-icons/md'

type TaskFormProps = {
  addTask: Function
}

export default function TaskForm({ addTask }: TaskFormProps){
  const [name, setName] = useState('')
  const [start, setStart] = useState('')

  function handleForm(e: any){
    e.preventDefault()

    let newTask = {
      id: Math.random(),
      name: name,
      start: start,
      done: false
    }

    addTask(newTask)

    setName('')
    setStart('')
  }

  return(
    <form className="flex flex-col sm:flex-row place-items-center bg-gray-100 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
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
      
      <button type="submit" onClick={handleForm}
        className="h-10 w-16 text-2xl cursor-pointer grid place-items-center hover:text-green-500">
        <MdSaveAlt />
      </button>
    </form>
  )
}