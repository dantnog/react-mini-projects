import Button from "./Button";
import { Link } from "react-router-dom";
import { TbChecklist } from 'react-icons/tb'

export default function HomeCard(){
  return(
    <div className="group bg-amber-400 dark:bg-amber-500 flex flex-col rounded-md shadow-md w-full
         relative">
      <div className=" rounded-md -translate-x-10 rotate-[-10deg] group-hover:rotate-[-25deg] 
            tranform-gpu duration-500 h-40 text-6xl font-bold grid place-items-center">
        TODO
      </div>
        <TbChecklist className="absolute left-[60%] top-[25%] text-9xl group-hover:rotate-[30deg] 
                      tranform-gpu duration-500 rotate-[10deg]" />
      <div className="p-4 grid place-items-center">
        <Link to="/todo">
          <Button name="GO TO"/>
        </Link>
      </div>
    </div>
  )
}