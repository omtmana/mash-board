import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import LandingPage from './shared/Home/LandingPage';
import Login from './shared/Home/Login';
import UserSignUp from './shared/Home/UserSignUp';
// import MainHeader from './shared/Navigation/MainHeader';
import MainNavigation from './shared/Navigation/MainNavigation';
import UserProfile from './user/UserProfile';
import FinanceDashboard from '../src/user/dashboard/finance/FinanceDashboard'
import HabitDashboard from '../src/user/dashboard/habits/HabitsDashboard'


function App() {
  return (
    <div className="App">
      <Router>
        {/* This is where the links usually go */}
        <MainNavigation />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<UserSignUp />}/>
          <Route path='/user' element={<UserProfile />} />
          <Route path='/finance' element={<FinanceDashboard />}/>
          <Route path='/habit' element={<HabitDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
