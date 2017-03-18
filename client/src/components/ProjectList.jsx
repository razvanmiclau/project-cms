import React, { Component } from 'react';
import { Link } from 'react-router';
import Project from './Project';

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
      <div className="view">
        <h2>List of Projects</h2>
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
    )
  }
}
