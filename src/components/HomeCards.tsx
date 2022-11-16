import Button from "./Button";
import { Link } from "react-router-dom";
import { TbChecklist } from 'react-icons/tb'
import { GiDialPadlock, GiCash, GiRock, GiPaper, GiScissors } from 'react-icons/gi'

export function HomeTodoCard(){
  return(
    <div className="group bg-amber-400 dark:bg-amber-500 flex flex-col rounded-md shadow-md w-full relative">
      <div className="h-40 text-6xl font-bold grid place-items-center">
        <span className="-translate-x-10 rotate-[-10deg] group-hover:rotate-[-25deg] tranform-gpu duration-500 ">
          TODO
        </span>
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

export function HomePasswordCard(){
  return(
    <div className="group bg-rose-400 dark:bg-rose-500 flex flex-col rounded-md shadow-md w-full relative">
      <div className="text-center h-40 text-4xl font-bold grid place-items-center">
        <span className="translate-y-2 rotate-[-10deg] opacity-100 group-hover:opacity-0 group-hover:text-xl tranform-gpu duration-500 ">
          PASSWORD<br/>STRENGTH
        </span>
      </div>
        <GiDialPadlock className="absolute left-[50%] top-[40%] -translate-x-[50%] text-4xl group-hover:text-9xl 
                      tranform-gpu duration-500 rotate-[16deg] -translate-y-[50%] opacity-0 group-hover:opacity-100 " />
      <div className="p-4 grid place-items-center">
        <Link to="/password">
          <Button name="GO TO"/>
        </Link>
      </div>
    </div>
  )
}

export function HomeFinancesCard(){
  return(
    <div className="group bg-sky-400 dark:bg-sky-600 flex flex-col rounded-md shadow-md w-full relative">
      <div className="text-center h-40 text-5xl font-bold grid place-items-center">
        <span className="translate-y-7 rotate-[10deg] group-hover:rotate-[30deg] tranform-gpu duration-500 ">
          FINANCE$
        </span>
      </div>
        <GiCash className="absolute left-[73%] top-[10%] -translate-x-[50%] text-7xl group-hover:text-8xl 
                      tranform-gpu duration-500 rotate-[16deg] " />
      <div className="p-4 grid place-items-center">
        <Link to="/finances">
          <Button name="GO TO"/>
        </Link>
      </div>
    </div>
  )
}

export function HomeRPSCard(){
  return(
    <div className="group bg-teal-400 dark:bg-teal-600 flex flex-col rounded-md shadow-md w-full relative">
      <div className="text-center h-40 text-8xl font-bold grid place-items-center">
        <GiRock className="absolute top-[5%] left-[25%] tranform-gpu duration-500 group-hover:animate-bounce" />
        <GiPaper className="absolute top-[15%] left-[55%] tranform-gpu duration-500 group-hover:animate-bounce" />
        <GiScissors className="absolute top-[35%] left-[38%] tranform-gpu duration-500 group-hover:animate-bounce" />
      </div>
      <div className="p-4 grid place-items-center">
        <Link to="/rockpaperscissors">
          <Button name="GO TO"/>
        </Link>
      </div>
    </div>
  )
}

