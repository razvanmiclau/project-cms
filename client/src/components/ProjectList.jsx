import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Project from './Project';

const headers = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

export default class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects, deleteProject } = this.props;
    
    return (
      <div className="container">
        {
          projects.map(project => {
            return(
              <Project {...project}
                key={project._id}
                deleteProject={deleteProject} />
            )
          })
        }
      </div>
    )
  }
}
