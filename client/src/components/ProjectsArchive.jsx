import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProjectsArchive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Project CMS</a>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
