import { FaCheck, FaTrash } from 'react-icons/fa'
import { TaskItemProps } from "../types/TaskType";

export default function TaskCard({ id, name, start, end, done, removeTask, setDone }: TaskItemProps){
  function handleDelete(){
    removeTask ? removeTask(id) : null
  }

  function handleDone(){
    setDone ? setDone(id) : null
  }

  return(
    <div className="mb-4 shadow-md flex justify-between bg-gray-100 dark:bg-gray-700 rounded-md">
      <div className="p-4">
        <h3 className="text-xl mb-2 font-semibold">
          {name}
        </h3>
        <div className="flex space-x-6">
          { start && (
          <p className="font-semibold">
            <span className='font-normal text-sm'>To start at: </span>{start}
          </p> ) }

          { end && (
          <p className="font-semibold text-green-500">
            <span className='font-normal text-sm text-gray-700 dark:text-gray-300'>
              Finished at: 
            </span> {end}
          </p> ) }
        </div>
      </div>
      <div className="flex flex-col place-items-end justify-between">
        { done 
          ? (<button className="text-green-500 p-3 flex place-items-center space-x-2" 
              onClick={handleDone}><p>Done!</p><FaCheck /></button> )
          : (<button className="hover:text-green-500 p-3" onClick={handleDone}><FaCheck /></button> )
        }
          <button className="hover:text-red-500 p-3 " onClick={handleDelete}><FaTrash /></button>
      </div>
    </div>
  )
}