import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import Welcome from './components/Welcome';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
);

export default routes;
