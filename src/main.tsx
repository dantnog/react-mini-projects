import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Todo from './pages/Todo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/todo" element={ <Todo /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
