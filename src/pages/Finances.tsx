import FinanceForm from "../components/FinanceForm";
import FinanceTable from "../components/FinanceTable";
import Container from "../layouts/Container";
import { MdAttachMoney } from 'react-icons/md'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useFinanceContext } from "../context/FinancesContext";

export default function Finances() {
  const { income, expense, balance } = useFinanceContext()

  return (
    <Container name="FINANCES" >
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="space-y-4">
          <div className="flex justify-between place-items-center overflow-hidden pr-4 rounded-md shadow-md bg-gray-100 dark:bg-gray-700">
            <div className="bg-emerald-500 h-[3.15rem] w-9 grid text-xl place-items-center"><FaArrowUp/></div>
            <h3 className="text-xl">{ income.toFixed(2) }</h3>
          </div>
          <div className="flex justify-between place-items-center overflow-hidden pr-4 rounded-md shadow-md bg-gray-100 dark:bg-gray-700">
            <div className="bg-orange-500 h-[3.15rem] w-9 grid text-xl place-items-center"><FaArrowDown/></div>
            <h3 className="text-xl">{ expense.toFixed(2) }</h3>
          </div>
          <div className="flex justify-between place-items-center overflow-hidden pr-4 rounded-md shadow-md bg-gray-100 dark:bg-gray-700">
            <div className="bg-sky-500 h-[3.15rem] w-9 grid text-2xl place-items-center"><MdAttachMoney /></div>
            <h3 className="text-xl">{ balance.toFixed(2) }</h3>
          </div>
        </div>

        <div className="sm:col-span-3 ">
          <FinanceForm />
        </div>

        <div className="sm:col-span-4">
          <FinanceTable />
        </div>
      </div>
    </Container>
  )
}