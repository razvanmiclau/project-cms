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
      <div className="container">
        <h1>Header Here...</h1>
        {this.props.children}
      </div>
    )
  }
};
