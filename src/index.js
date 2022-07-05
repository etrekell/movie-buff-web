import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // This means that everything wrapped in this uas access to the context provided by the router,
  // which means it can use the router components
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
