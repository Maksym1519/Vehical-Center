import React from 'react';
import {BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { Main } from './pages/Main/Main.jsx';
import './fonts.scss';
import './style.scss';


 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
       </nav>
      <Routes>
         <Route path="/" element={<Main />} />
         {/* <Route path="/artwork" element={<Artwork />} /> */}
        
      </Routes>
    </>
    )
}
export default App;