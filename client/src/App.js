import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import LandingPage from './components/Home/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        {/* This is where the links usually go */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
