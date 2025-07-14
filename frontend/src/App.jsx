import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Activity from './pages/Activity';
import Invest from './pages/Invest';
import Earnings from './pages/Earnings';
import Refer from './pages/Refer';
import Register from './pages/Register'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
