import React from 'react';
import {BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { LoanRates } from './pages/LoanRates/LoanRates';
import './fonts.scss';
import './style.scss';


 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/LoanRates">LoanRates</Link>
       </nav>
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/About" element={<About />} /> 
         <Route path="/LoanRates" element={<LoanRates />} /> 
        
      </Routes>
    </>
    )
}
export default App;