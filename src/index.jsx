  import React from 'react';
  import * as ReactDOM from 'react-dom';
  import { BrowserRouter } from 'react-router-dom';
  import App from "./App";
  import "./style.scss";

  ReactDOM.render(
    <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root')
 
  )

// import { createRoot } from 'react-dom/client';
// const container: any = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);
