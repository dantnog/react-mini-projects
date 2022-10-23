import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TodoListProvider } from './context/TodoListContext'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Todo from './pages/Todo'

function App() {

  return (
    <TodoListProvider>
      <div className="text-gray-700 dark:text-gray-300 min-h-screen bg-gray-200 dark:bg-gray-800">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </TodoListProvider>
  )
}

export default App
