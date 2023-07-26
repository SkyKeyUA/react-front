/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Router>
      <Switch>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
