import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import { Header, Footer } from './components/index';
import YelpContextProvider from './Context';
import { DetailsPage, Login, Results } from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <YelpContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/results/:searchText" element={<Results />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </YelpContextProvider>
  </React.StrictMode>,
);
