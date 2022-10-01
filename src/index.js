import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import { Header, Footer, OurMap } from './components/index';
import YelpContextProvider from './Context';
import { DetailsPage, Login } from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <YelpContextProvider>
      <BrowserRouter>
        <Header />
        <OurMap />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </YelpContextProvider>
  </React.StrictMode>,
);
