import { MdSaveAlt } from 'react-icons/md'
import { GiBroom } from 'react-icons/gi'
import { useFinanceContext } from "../context/FinancesContext"
import { useState } from "react"

export default function FinanceForm() {
  const { newFinance, deleteAll } = useFinanceContext()

  const [ description, setDescription ] = useState('')
  const [ amount, setAmount ] = useState('')
  const [ radio, setRadio ] = useState('')
  const [ option, setOption ] = useState('Not defined')

  function handleSubmit(e: any) {
    e.preventDefault()
    
    let newAmount = amount.replace(',', '.')

    let newFinData = {
      id: Math.random(),
      option,
      description,
      amount: newAmount,
      radio
    }

    newFinance(newFinData)

    setAmount('')
    setDescription('')
  }

  function handleDelete() {
    deleteAll()
  }

  return (
    <div className=' bg-gray-100 dark:bg-gray-700 rounded-md shadow-md p-4'>
    <form onSubmit={handleSubmit} className="grid grid-col-2 space-y-4">
      <div className="flex space-x-4">
        <select name="" id="" className="h-10 px-4 bg-gray-200 dark:bg-gray-800 rounded-md" required>
          <option className="" selected disabled>Choose</option>
          <option onClick={() => setOption('Bill')} 
            className="">
            Bill
          </option>
          <option onClick={() => setOption('Food')}
            className="">
            Food
          </option>
          <option onClick={() => setOption('Rent')} 
            className="">
            Rent
          </option>
          <option onClick={() => setOption('Salary')} 
            className="">
            Salary
          </option>
          <option onClick={() => setOption('Travel')} 
            className="">
            Travel
          </option>
          <option onClick={() => setOption('Others')} 
            className="">
            Others
          </option>
        </select>
        <input type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-10 px-2 outline-none bg-gray-200 dark:bg-gray-800 w-full rounded-md" 
          placeholder="Description"  required/>
      </div>

      <div className="flex space-x-4">
        <input type="text" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="h-10 px-2 outline-none bg-gray-200 dark:bg-gray-800 w-full rounded-md" 
          placeholder="250.00"  required/>
        <div className="flex place-items-center space-x-4">
          <label className="flex place-items-center space-x-4">
            <input onClick={() => setRadio('income')} name="radio" type="radio" className="h-5 w-5" required/>
              &nbsp;&nbsp;Income
            </label>
          <label className="flex place-items-center space-x-4">
            <input onClick={() => setRadio('expense')} name="radio" type="radio" className="h-5 w-5" />
              &nbsp;&nbsp;Expense
            </label>
        </div>
        <button type="submit" className="py-1 px-3 text-2xl rounded-md shadow-md active:ring-gray-300 active:dark:ring-gray-900
            bg-gray-200 dark:bg-gray-800 ring-green-300 dark:ring-green-700 hover:ring-4 " >
          <MdSaveAlt/>
        </button>
      </div>
    </form>
      <button onClick={() => handleDelete()} className="py-2 px-3 flex place-items-center text-2xl rounded-md shadow-md active:ring-gray-300 active:dark:ring-gray-900
          bg-gray-200 dark:bg-gray-800 ring-green-300 dark:ring-green-700 hover:ring-4 mt-4" >
        <span className='text-base mr-2'>Clean all</span>
        <GiBroom />
      </button>
    </div>
  )
}