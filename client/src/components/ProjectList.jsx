import React, { Component } from 'react';
import { Link } from 'react-router';
import Project from './Project';
import AddProject from './AddProject';

const headers = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProject: {},
      searchBar: ''
    }
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    fetch('http://localhost:8080/projects', headers)
    .then(res => res.json())
    .then(data => this.setState({projects: data}));
  }

  deleteProject(id) {
    const projects = this.state.projects;
    fetch(`http://localhost:8080/projects/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ projects: projects.filter(project => project._id != id)})
      console.log(res.message);
    });
  }

  render() {
    const projects = this.state.projects;
    return (
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
          <div className="page-header">
            <h2>List of Projects <small><Link to='/projects/add'>New Project</Link></small></h2>
          </div>
          {this.props.children}
          <div className="projects">
            {
              projects.map(project => {
                return (
                  <Project
                    {...project}
                    key={project._id}
                    deleteProject={this.deleteProject.bind(this)}
                  />
                )
              })
            }
          </div>
        </div>
      </div>


    )
  }
}
