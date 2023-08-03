import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
const MainLazy = React.lazy(() => import('./pages/Main/Main'));
const AboutLazy = React.lazy(() => import('./pages/About/About'));
const LoanLazy = React.lazy(() => import('./pages/LoanRates/LoanRates'));
const VideoLazy = React.lazy(() => import('./pages/Video/VideoPage'));
const BlogLazy = React.lazy(() => import('./pages/Blog/Blog'));
const ArticleLazy = React.lazy(() => import('./pages/Article/Article'));
const CalculatorLazy = React.lazy(() => import('./pages/Calculator/Calculator'));
const CatalogLazy = React.lazy(() => import('./pages/Catalog/Catalog'));
const CarLazy = React.lazy(() => import('./pages/Car/Car'));
const TermsLazy = React.lazy(() => import('./pages/Terms/Terms'));
const PrivacyLazy = React.lazy(() => import('./pages/Privacy/Privacy'));
const Quiz1Lazy = React.lazy(() => import('./pages/Quiz/Quiz1'));
const NotFoundLazy = React.lazy(() => import('./pages/404/404'));
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
        <Link to="/404">404</Link>
      </nav>
      <Routes>
        <Route path="/" element={<React.Suspense><MainLazy /></React.Suspense>} />
        <Route path="/About" element={<React.Suspense><AboutLazy /></React.Suspense>} />
        <Route path="/LoanRates" element={<React.Suspense><LoanLazy /></React.Suspense>} />
        <Route path="/Video" element={<React.Suspense><VideoLazy /></React.Suspense>} />
        <Route path="/Blog" element={<React.Suspense><BlogLazy /></React.Suspense>} />
        <Route path="/Article" element={<React.Suspense><ArticleLazy /></React.Suspense>} />
        <Route path="/Calculator" element={<React.Suspense><CalculatorLazy /></React.Suspense>} />
        <Route path="/Catalog" element={<React.Suspense><CatalogLazy /></React.Suspense>} />
        <Route path="/Car" element={<React.Suspense><CarLazy /></React.Suspense>} /> 
        <Route path="/Terms" element={<React.Suspense><TermsLazy /></React.Suspense>} /> 
        <Route path="/Privacy" element={<React.Suspense><PrivacyLazy /></React.Suspense>} /> 
        <Route path="/Quiz1" element={<React.Suspense><Quiz1Lazy /></React.Suspense>} /> 
        <Route path="/404" element={<React.Suspense><NotFoundLazy /></React.Suspense>} /> 
        </Routes>
    </>
  );
};
export default App;
