import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Artwork } from './pages/Artwork';
import { CreatorPage } from './pages/CreatorPage';
import './fonts.scss';
import './style.scss';


 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/creatorPage">CreatorPage</Link>
      </nav>
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/artwork" element={<Artwork />} />
         <Route path="/creatorPage" element={<CreatorPage />} />
      </Routes>
    </>
    )
}
export default App;