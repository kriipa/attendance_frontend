import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Login from './containers/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './components/table'
import SideBar from './containers/SideBar'
import DashboardLayout from './Layout/DashboardLayout'
import Dept from './pages/Department'
import CreateDept from './forms/CreateDept'
import UseStateHook from './pages/UseStateHook'
import UserDash from './pages/UserDash'
import CreateEmployee from './forms/CreateEmployee'
import EmployeesForm from './forms/EmployeesForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />}/>
      <Route element={<DashboardLayout/>}>
        <Route path="/" element={<Dept />}/>
        <Route path="/table" element={<Table />}/>
        <Route path="/create-dept" element={<CreateDept/>} />
        <Route path="/use-state" element={<UseStateHook />}/>
        <Route path="/user-dash" element={<UserDash />}/>
        {/* <Route path="/create-emp" element={<CreateEmployee />}/> */}
        <Route path="/create-emp" element={<EmployeesForm />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
