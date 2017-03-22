import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';

// Components
import ProjectList from '../ProjectList';
// Actions
import * as projectActionCreators from '../../actions/projects';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: {},
      searchBar: ''
    }
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.props.projectActions.getProjects();
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
    const { projects } = this.props;
    return (
      <div>
        <div className="page-header">
          <h2>List of Projects <small><Link to='/projects/add'>New Project</Link></small></h2>
        </div>

        <div className="projects">
          <ProjectList
            projects={projects}
            deleteProject={this.deleteProject}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    projects: toJS(state.getIn(['projects', 'list'], Immutable.List()))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    projectActions: bindActionCreators(projectActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
