import { useState } from "react"
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ChangeTheme() {
  const [dark, setDark] = useState(() => {
    let theme = localStorage.getItem('theme')

    if(theme === 'dark'){
      document.body.classList.add('dark')
      return true
    }

    return false
  })

  function switchTheme(){
    if (dark) {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
    document.body.classList.toggle('dark')
    setDark(prev => !prev)
  }

  return(
    <button onClick={switchTheme} 
      className="py-3 px-4 rounded-md shadow-md active:ring-gray-300 active:dark:ring-gray-700
      bg-gray-100 dark:bg-gray-700 ring-green-300 dark:ring-green-700 hover:ring-4">
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  )
}