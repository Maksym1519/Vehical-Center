import React from 'react';
import {BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { LoanRates } from './pages/LoanRates/LoanRates';
import './fonts.scss';
import './style.scss';
import { VideoPage } from './pages/Video/VideoPage';


 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/LoanRates">LoanRates</Link>
        <Link to="/Video">Video</Link>
       </nav>
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/About" element={<About />} /> 
         <Route path="/LoanRates" element={<LoanRates />} /> 
         <Route path="/Video" element={<VideoPage />} /> 
        
      </Routes>
    </>
    )
}
export default App;