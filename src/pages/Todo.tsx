import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { TaskItemProps } from "../types/TaskType";
import { getListFromLS, storeListOnLS } from "../hooks/useLocalStorage";


export default function Todo(){
  let [taskList, setTaskList] = useState<TaskItemProps[]>(() => getListFromLS())

  const addTask = (newTask: TaskItemProps ) => {
    setTaskList(prev => [...prev, newTask])
  }

  const removeTask = (id: number) => {
    setTaskList(taskList.filter(item => id !== item.id))
  }

  const setDone = (id: number) => {
    // let tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Sao_Paulo'
    let dt = new Date()
    let min: any = dt.getMinutes()
    min < 10 ? min = String('0'+min) : null
    let time = `${dt.getHours()}:${min}`
    setTaskList(taskList.map((item) => {
      if(item.id === id){return {...item, end: time, done: true}}
      return item
    }))
  }

  useEffect(() => {
    storeListOnLS(taskList)
  }, [taskList])


  return(
    <section className="max-w-3xl px-2 md:px-0 mx-auto">
      <h1 className="text-5xl my-2 text-green-500 font-semibold text-center">
        Todo
      </h1>
      <div className="mt-6">
        <TaskForm addTask={addTask} />

        <div className="mt-4 flex flex-col-reverse">
          {taskList && taskList.map((item, ind) => (
            <TaskCard key={item.id} removeTask={removeTask} setDone={setDone} {...item}/>
          )) }
        </div>
      </div>
    </section>
  )
}