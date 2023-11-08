import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Login from './containers/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './components/Table'
import SideBar from './containers/SideBar'
import DashboardLayout from './Layout/DashboardLayout'
import Dept from './pages/Department'
import CreateDept from './forms/CreateDept'
import UseStateHook from './pages/UseStateHook'
import UserDash from './pages/UserDash'
import CreateEmployee from './forms/CreateEmployee'
import EmployeesForm from './forms/EmployeesForm'
import DonutChart from './components/donutChart'
import CustomCalender from './components/CustomCalender'
import Store from './pages/Store'
import ListArray from './forms/Array'
import Local from './practice/Local'
import Attendance from './pages/Attendance'
import ReportPage from './pages/ReportPage'
import Axios from './practice/AxiosPage'
import AxiosPage from './practice/AxiosPage'
import PostMethod from './practice/PostMethod'
import LoginResp from './practice/LoginResp'
import PatchMethod from './practice/PatchMethod'
import EditPage from './practice/EditPage'
import RegisterPage from './practice/RegisterPage'


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route element={<DashboardLayout/>}>
          <Route path="/dept" element={<Dept />}/>
          <Route path="/table" element={<Table />}/>
          <Route path="/create-dept" element={<CreateDept/>} />
          <Route path="/use-state" element={<UseStateHook />}/>
          <Route path="/" element={<UserDash />}/>
          {/* <Route path="/create-emp" element={<CreateEmployee />}/> */}
          <Route path="/create-emp" element={<EmployeesForm />}/>
          <Route path='/donut' element = {<DonutChart />} />
          <Route path='/calender' element = {<CustomCalender />} />
          <Route path='/login' element = {<Login />} />
          {/*  */}
          <Route path='/store' element = {<Store />} />
          <Route path='/array' element = {<ListArray />} />
          <Route path='/local' element = {<Local />} />
          <Route path='/attendance' element = {<Attendance />} />
          <Route path='/report' element = {<ReportPage />} />
          <Route path='/axios-page' element = {<AxiosPage />} />
          <Route path='/post-method' element = {<PostMethod />} />
          <Route path='/log-resp' element = {<LoginResp />} />
          <Route path='/patch-method' element = {<PatchMethod />} />
          <Route path='/edit' element = {<EditPage />} />
          <Route path='/register' element = {<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
