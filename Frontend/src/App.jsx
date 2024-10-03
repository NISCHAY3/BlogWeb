import { useState } from 'react';
// import dataProvider from './context/dataProvider';
import DataProvider from './context/dataProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/account/Login';
import Home from './components/home/Home.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
