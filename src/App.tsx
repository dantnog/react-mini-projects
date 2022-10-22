import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="text-gray-700 dark:text-gray-300 min-h-screen bg-gray-200 dark:bg-gray-800">      
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
