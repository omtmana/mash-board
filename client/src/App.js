import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import LandingPage from './shared/Home/LandingPage';
import MainHeader from './shared/Navigation/MainHeader';
import MainNavigation from './shared/Navigation/MainNavigation';

function App() {
  return (
    <div className="App">
      <Router>
        {/* This is where the links usually go */}
        <MainNavigation />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
