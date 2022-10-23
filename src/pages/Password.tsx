import { useEffect, useState } from "react"
import  passwordCalculate from "../hooks/passwordCalculate"
import { PasswordTipsProps } from "../types/PasswordTipsProps"
import { FaCheckCircle } from "react-icons/fa"

export default function Password() {
  const [password, setPassword] = useState('')
  const [result, setResult] = useState(0)
  const [tips, setTips] = useState<PasswordTipsProps[]>([
    { id: 1, tip: 'Use numbers', done: false},
    { id: 2, tip: 'Use lowercase characters', done: false},
    { id: 3, tip: 'Use uppercase characters', done: false},
    { id: 4, tip: 'Use special characters', done: false},
    { id: 5, tip: 'Use at least 8 characters', done: false},
    { id: 6, tip: 'Use more than 12 characters', done: false},
    { id: 7, tip: "Don't repeat characters in sequence", done: true},
  ])

  useEffect(() => {
    const arr = passwordCalculate(password, tips)
    const score = arr[0]
    const tipsCheck = arr[1]
    setResult(score)
    setTips(tipsCheck)
  }, [password])


  return (
    <section className="flex flex-col max-w-3xl mx-auto px-2 md:px-0">
      <h1 className="text-5xl my-2 text-green-500 font-semibold text-center">
        PASSWORD STRENGTH
      </h1>

      <progress id="bar" max="100" value={result}
        className="h-10 w-8/12 mx-auto bg-gray-300 dark:bg-gray-700 overflow-hidden my-6 rounded-full">
      </progress>

      <input type="text" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="h-10 px-2 w-8/12 mx-auto text-center outline-none bg-transparent bg-gray-300 dark:bg-gray-700 rounded-md shadow-md" 
        placeholder="Type your Password" />

      <div className="place-items-center grid gap-2 grid-cols-1 sm:grid-cols-2 mt-8">
        {
          tips.map(item => (
            <div key={item.id} className="flex place-items-center">
              { item.done ? <FaCheckCircle className="mr-2" /> : null }{ item.tip }
            </div>
          ) )
        }
      </div>
    </section>
  )
}