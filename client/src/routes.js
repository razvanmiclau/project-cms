import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Container Components
import ProjectsContainer from './components/containers/ProjectsContainer';
import AddProjectContainer from './components/containers/AddProjectContainer';

// Pages-Parent Components
import Home from './components/Home';
import ProjectsArchive from './components/ProjectsArchive';

// Presentation Components
import Welcome from './components/Welcome';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
    </Route>
    <Route path="/projects" component={ProjectsArchive}>
      <IndexRoute component={ProjectsContainer} />
      <Route path="add" component={AddProjectContainer} />
    </Route>
  </Router>
);

export default routes;
