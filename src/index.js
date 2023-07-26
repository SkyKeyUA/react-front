/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserStore } from './store/UserStore';
import { DeviceStore } from './store/DeviceStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = React.createContext(null);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
);
