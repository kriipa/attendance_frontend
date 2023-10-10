import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Dash from './containers/Dash'
import Login from './containers/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dash />}/>
      <Route path="/login" element={<Login />}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
