import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './Pages/Results'
import App from './App';
import { Header } from './components/index';
import { Login } from './pages';
import YelpContextProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="./Results" element={<Results />} />
      </Routes>
    </BrowserRouter>
=======
    <YelpContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </YelpContextProvider>
>>>>>>> 19a12b246311cf6906cf693857e1bf49adbc08e6
  </React.StrictMode>,
);
