import React from 'react';
import {BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { LoanRates } from './pages/LoanRates/LoanRates';
import { VideoPage } from './pages/Video/VideoPage';
import { Blog } from './pages/Blog/Blog';
import { Article } from './pages/Article/Article';
import { Calculator } from './pages/Calculator/Calculator';
import { Catalog } from './pages/Catalog/Catalog';
import './fonts.scss';
import './style.scss';



 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/LoanRates">LoanRates</Link>
        <Link to="/Video">Video</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Article">Article</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/Catalog">Catalog</Link>
       </nav>
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/About" element={<About />} /> 
         <Route path="/LoanRates" element={<LoanRates />} /> 
         <Route path="/Video" element={<VideoPage />} /> 
         <Route path="/Blog" element={<Blog />} /> 
         <Route path="/Article" element={<Article />} /> 
         <Route path="/Calculator" element={<Calculator />} /> 
         <Route path="/Catalog" element={<Catalog />} /> 
        
      </Routes>
    </>
    )
}
export default App;