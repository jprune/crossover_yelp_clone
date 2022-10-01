import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { Header } from './components/index';
import { Login } from './Pages';
import YelpContextProvider from './Context';
import { DetailsPage } from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YelpContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restaurant-details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </YelpContextProvider>
  </React.StrictMode>,
);
