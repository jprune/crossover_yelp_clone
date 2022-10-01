import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './Pages/Results'
import App from './App';
import { Header } from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="./Results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
