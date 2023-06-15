import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'



const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Auth" element={<Auth/>}></Route>
      <Route exact path="/AskQuestion" element={<AskQuestion/>}></Route>
      <Route exact path="/Questions/:id" element={<DisplayQuestion/>}></Route>
      <Route exact path="/Tags" element={<Tags/>}></Route>
      <Route exact path="/Users" element={<Users/>}></Route>


    </Routes>
  )
}

export default AllRoutes
