import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render() {
    return(
      <div className="container">
        <div className="page-header text-center">
          <h1>Project CMS App <small>made with react-redux</small></h1>
          <p className="lead">Click on the browse to start selecting your projects from the list</p>
        </div>
        <p className="lead text-center">
          <Link className="btn btn-default btn-lg" to="/projects">Browse</Link>
        </p>
      </div>
    )
  }
};
