import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render() {
    return(
      <div className="container">
        <Link to="/projects">Check Projects</Link>
      </div>
    )
  }
};
