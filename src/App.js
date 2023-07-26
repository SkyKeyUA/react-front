/** @format */

import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import Registration from './pages/Registration';
import DevicePage from './pages/DevicePage';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import { Context } from '.';

function App() {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/device/:id" element={<DevicePage />} />
        <Route path="/device/:id/edit" element={<Admin />} />
        {user.isAuth && <Route path="/basket" element={<Basket />} />}
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
