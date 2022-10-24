import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { FinancesContextProps } from "../types/FinancesContextProps";
import { FinanceDataProps } from "../types/FinanceDataProps";
import { getFinanceListFromLS, getFinanceResumeFromLS, setFinanceListToLS, setFinanceResumeToLS } from "../hooks/useLocalStorage";

const FinanceContext = createContext({} as FinancesContextProps)

export function useFinanceContext() {
  return useContext(FinanceContext)
}

type ProviderProps = {
  children: ReactNode
}

export function FinanceProvider({ children }: ProviderProps) {
  const [ income, setIncome ] = useState(() => {
    let res = getFinanceResumeFromLS()
    if (res != null) { return Number(res.income) }
    return 0
  })
  const [ expense, setExpense ] = useState(() => {
    let res = getFinanceResumeFromLS()
    if (res != null) { return Number(res.expense) }
    return 0
  })
  const [ balance, setBalance ] = useState(() => {
    let res = getFinanceResumeFromLS()
    if (res != null) { return Number(res.balance) }
    return 0
  })
  const [ financeList, setFinanceList ] = useState<FinanceDataProps[]>(getFinanceListFromLS())

  useEffect(() => {
    setBalance(income - expense)
  }, [income, expense])

  useEffect(() => {
    setFinanceListToLS(financeList)
    setFinanceResumeToLS(income, expense, balance)
  }, [financeList])

  function newFinance({ id, option, description, amount, radio}: FinanceDataProps) {

    let amountN = Number(amount)

    if (radio === 'income') setIncome(prev => prev + amountN)
    if (radio === 'expense') setExpense(prev => prev + amountN)

    amount = amountN.toFixed(2)

    setFinanceList(prev => [...prev, { id, option, description, amount, radio}])
  }

  function deleteAll() {
    setIncome(0)
    setExpense(0)
    setBalance(0)
    setFinanceList([])
  }

  return (
    <FinanceContext.Provider value={{income, expense, balance, financeList, newFinance, deleteAll}}>
      { children }
    </FinanceContext.Provider>
  )
}