import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toJS from 'immutable-to-js';
import Immutable from 'immutable';

// Components
import ProjectList from '../ProjectList';
import SingleProject from '../SingleProject';
// Actions
import * as projectActionCreators from '../../actions/projects';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
    this.displayProjectDetails = this.displayProjectDetails.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.props.projectActions.getProjects();
  }

  deleteProject(id) {
    this.props.projectActions.deleteProject(id);
  }

  displayProjectDetails(index) {
    this.props.projectActions.displayProjectDetails(this.props.projects[index]);
    $('#project-modal').modal();
  }

  setSearchBar(e) {
    this.props.projectActions.searchQuery(e.target.value.toLowerCase());
  }

  render() {
    const { projects, searchBar, selectedProject } = this.props;
    return (
      <div>
        <div className="page-header">
          <h2>List of Projects <small><Link to='/projects/add'>New Project</Link></small></h2>
        </div>

        <div className="projects">
          <SingleProject project={selectedProject} />
          <ProjectList
            projects={projects}
            displayProjectDetails={this.displayProjectDetails}
            searchBar={searchBar}
            setSearchBar={this.setSearchBar}
            deleteProject={this.deleteProject}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    projects: toJS(state.getIn(['projects', 'list'], Immutable.List())),
    searchBar: state.getIn(['projects', 'searchBar'], ''),
    selectedProject: toJS(state.getIn(['projects', 'selectedProject'], Immutable.List()))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    projectActions: bindActionCreators(projectActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
