import { useFinanceContext } from "../context/FinancesContext"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function FinanceTable() {
  const { financeList }: any = useFinanceContext()

  return (
    <div className=" mt-4 p-4 pt-2 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
      <table className="table-auto w-full">
        <tr className="h-14">
          <th className="">
            Category
          </th>
          <th className="">
            Description
          </th>
          <th className="">
            Value
          </th>
          <th className="">
            In/Out
          </th>
        </tr>
        {
          financeList.map((item: { id: number; option: string; description: string ; amount: string ; radio: string }) => (
            <tr key={item.id} className="odd:bg-gray-200 even:bg-gray-300 h-10 dark:odd:bg-gray-500 dark:even:bg-gray-600">
              <td className="text-center">{ item.option }</td>
              <td className="text-center">{ item.description }</td>
              <td className="text-center">{ item.amount }</td>
              <td className="grid place-items-center">
              {
                item.radio === 'income' 
                ? <FaArrowUp className="text-xl p-2 h-9 w-9 bg-emerald-500 rounded-full" /> 
                : <FaArrowDown className="text-xl p-2 h-9 w-9 bg-orange-500 rounded-full" />
              }
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}
