import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import LandingPage from './shared/Home/LandingPage';
import Login from './shared/Home/Login';
import UserSignUp from './shared/Home/UserSignUp';
// import MainHeader from './shared/Navigation/MainHeader';
import MainNavigation from './shared/Navigation/MainNavigation';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
