import { ButtonProps } from "../types/ButtonProps";

export default function Button({ name, children, onClick }: ButtonProps){
  return(
    <button className="py-2 px-4 rounded-md shadow-md active:ring-gray-300 active:dark:ring-gray-900
      bg-gray-100 dark:bg-gray-700 ring-green-300 dark:ring-green-700 hover:ring-4"
      onClick={() => onClick ? onClick() : null}
    >
      { name && name }{ children && children } 
    </button>
  )
}