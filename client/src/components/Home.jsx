import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  active(path) {
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Project CMS</a>
              <ul className="nav navbar-nav">
                <li className={this.active('/')}><Link to="/">Home</Link></li>
                <li className={this.active('/projects')}><Link to="/projects">Projects</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
};
