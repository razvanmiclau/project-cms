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
    const { projects, deleteProject, searchBar, setSearchBar, displayProjectDetails } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <input type="search" placeholder="search project..." className="form-control input-sm"
            onKeyUp={setSearchBar} />
        </div>
        <div className="row">
          {
            projects
            .filter(project => project.project_name.toLowerCase().includes(searchBar))
            .map((project, index) => {
              return(
                <Project {...project}
                  key={project._id}
                  index={index}
                  displayProjectDetails={displayProjectDetails}
                  deleteProject={deleteProject} />
              )
            })
          }
        </div>
      </div>
    )
  }
}
