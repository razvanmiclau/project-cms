import React, { Component } from 'react';
import { Link } from 'react-router';

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
    const headers = {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };
    fetch('http://localhost:8080/projects', headers)
    .then(res => res.json())
    .then(data => this.setState({projects: data}));
  }

  render() {
    const projects = this.state.projects;
    return (
      <div className="view">
        <h2>List of Projects</h2>
        {
          projects.map(project => {
            return (
              <p>{project.project_name}</p>
            )
          })
        }
        {this.props.children}
      </div>
    )
  }
}
