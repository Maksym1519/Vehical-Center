import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { Main } from "./pages/Main/Main";

import { About } from "./pages/About/About";
import { LoanRates } from "./pages/LoanRates/LoanRates";
import { VideoPage } from "./pages/Video/VideoPage";
import { Blog } from "./pages/Blog/Blog";
import { Article } from "./pages/Article/Article";
import { Calculator } from "./pages/Calculator/Calculator";
import { Catalog } from "./pages/Catalog/Catalog";
import { Terms } from './pages/Terms/Terms';
const MainLazy = React.lazy(() => import('./pages/Main/Main'));
const CarLazy = React.lazy(() => import('./pages/Car/Car'));
const TermsLazy = React.lazy(() => import('./pages/Terms/Terms'));
const PrivacyLazy = React.lazy(() => import('./pages/Privacy/Privacy'));
const Quiz1Lazy = React.lazy(() => import('./pages/Quiz/Quiz1'));
//  const Quiz2Lazy = React.lazy(() => import('./pages/Quiz/Quiz2'));

import "./fonts.scss";
import "./style.scss";

const App = () => {
  
  return (
     <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/LoanRates">LoanRates</Link>
        <Link to="/Video">Video</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Article">Article</Link><br></br>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/Catalog">Catalog</Link>
        <Link to="/Car">Car</Link>
        <Link to="/Terms">Terms</Link>
        <Link to="/Privacy">Privacy</Link>
        <Link to="/Quiz1">Quiz1</Link>
        <Link to="/Quiz2">Quiz2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<React.Suspense><MainLazy /></React.Suspense>} />
        <Route path="/About" element={<About />} />
        <Route path="/LoanRates" element={<LoanRates />} />
        <Route path="/Video" element={<VideoPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Car" element={<React.Suspense><CarLazy /></React.Suspense>} /> 
        <Route path="/Terms" element={<React.Suspense><TermsLazy /></React.Suspense>} /> 
        <Route path="/Privacy" element={<React.Suspense><PrivacyLazy /></React.Suspense>} /> 
        <Route path="/Quiz1" element={<React.Suspense><Quiz1Lazy /></React.Suspense>} /> 
        {/* <Route path="/Quiz2" element={<React.Suspense><Quiz2Lazy /></React.Suspense>} />  */}
       
        </Routes>
    </>
  );
};
export default App;
