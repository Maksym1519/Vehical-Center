import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Artwork } from './pages/Artwork';
import './fonts.scss';
import './style.scss';


 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/artwork">Artwork</Link>
      </nav>
      <Routes>
         <Route path="/" element={<Main />} />
        <Route path="/artwork" element={<Artwork />} />
      </Routes>
    </>
    )
}
export default App;