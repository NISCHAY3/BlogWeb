import { useState } from 'react';
// import dataProvider from './context/dataProvider';
import DataProvider from './context/dataProvider.jsx';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Login from './components/account/Login';
import Home from './components/home/Home.jsx';
import Header from './components/header/header.jsx';
import './App.css';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ?
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
