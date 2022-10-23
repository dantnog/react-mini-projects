import { FaCheck, FaTrash } from 'react-icons/fa'
import { useTodoList } from '../context/TodoListContext';
import { TodoItemProps } from "../types/TodoItemProps";

export default function TodoCard({ id, name, start, end, done }: TodoItemProps){
  const { removeTodo, setDone } = useTodoList()

  function handleRemove() {
    removeTodo(id)
  }

  function handleDone() {
    setDone(id)
  }

  return(
    <div className="mb-4 shadow-md flex justify-between bg-gray-100 dark:bg-gray-700 rounded-md">
      <div className="p-3">
        <h2 className="text-xl mb-2 font-semibold">
          { name }
        </h2>
        <div className="flex space-x-6">
          {
            start && (
              <p className="text-sm">
                To start at: <span className="text-base">{ start }</span>
              </p>
            )
          }
          {
            end && (
              <p className="text-sm">
                Finished at: <span className="text-base font-semibold text-green-500">{ end }</span>
              </p>
            )
          }
        </div>
      </div>
      <div className="flex flex-col place-items-end justify-between">
        { done 
          ? (<button className="text-green-500 font-semibold p-3 flex place-items-center space-x-2" >
              <p>Done!</p><FaCheck /></button> )
          : (<button className="hover:text-green-500 p-3" 
              onClick={handleDone}><FaCheck /></button> )
        }
        <button className="hover:text-red-500 p-3 " 
          onClick={handleRemove}><FaTrash /></button>
      </div>
    </div>
  )
}