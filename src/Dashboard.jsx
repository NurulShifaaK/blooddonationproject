import React from 'react'
import Login from './Auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './Auth/Register'
import Allproduct from './Product/Allproduct'
import Home from './Product/Home'
import PersonalDashboard from './Product/PersonalDashboard'
const Dashboard = () => {
  return (
    <div>
       <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>  
    <Route path='/allproducts' element={<Allproduct/>}/>  
    <Route path='/personaldashboard' element={<PersonalDashboard/>}/>  

          </Routes>
    </div>
  )
}

export default Dashboard