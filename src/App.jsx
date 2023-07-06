import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Artwork } from './pages/Artwork';
import { CreatorPage } from './pages/CreatorPage';
import { MyProfile } from './pages/MyProfilePage';
import { SearchPage } from './pages/SearchPage';
import './fonts.scss';
import './style.scss';


 const App = () => {
    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/creatorPage">CreatorPage</Link>
        <Link to="/myProfilePage">MyProfilePage</Link>
        <Link to="/searchPage">searchPage</Link>
      </nav>
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/artwork" element={<Artwork />} />
         <Route path="/creatorPage" element={<CreatorPage />} />
         <Route path="/myProfilePage" element={<MyProfile />} />
         <Route path="/searchPage" element={<SearchPage />} />
      </Routes>
    </>
    )
}
export default App;