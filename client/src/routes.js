import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import Welcome from './components/Welcome';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import AddProject from './components/AddProject';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
    </Route>
    <Route path="/projects" component={ProjectList}>
      <IndexRoute component={Project} />
      <Route path="add" component={AddProject} />
    </Route>
  </Router>
);

export default routes;
