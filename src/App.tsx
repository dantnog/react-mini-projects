import { Routes, Route } from 'react-router-dom'
import { FinanceProvider } from './context/FinancesContext'
import { TodoListProvider } from './context/TodoListContext'
import Navbar from './layouts/Navbar'
import Finances from './pages/Finances'
import Home from './pages/Home'
import Password from './pages/Password'
import RockPaperScissors from './pages/RockPaperScissors'
import Todo from './pages/Todo'

function App() {
  return (
    <TodoListProvider>
    <FinanceProvider>
      <div className="text-gray-700 dark:text-gray-300 min-h-screen bg-gray-200 dark:bg-gray-800">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/password" element={<Password />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        </Routes>
      </div>
    </FinanceProvider>
    </TodoListProvider>
  )
}

export default App
