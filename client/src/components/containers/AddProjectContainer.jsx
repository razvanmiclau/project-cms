import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';

export default class AddProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { newProject: {}};
    this.submit = this.submit.bind(this);
    this.setProject = this.setProject.bind(this);
  }

  submit() {
    const projectData = Object.assign({}, this.state.newProject);
    fetch('http://localhost:8080/projects', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(projectData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      hashHistory.push('/projects');
    });
  }

  setProject() {
    const newProject = {
      project_name: this.refs.title.value,
      project_desc: this.refs.desc.value,
      project_pic: this.refs.url.value,
    };
    this.setState({newProject});
  }

  render() {
    return(
      <div className="container">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="project-title">Project Title</label>
            <input className="form-control" ref="title" type="text" placeholder="Project Title" onChange={this.setProject} />
          </div>
          <div className="form-group">
            <label htmlFor="project-url">Image URL</label>
            <input className="form-control" ref="url" type="text" placeholder="Enter IMG URL" onChange={this.setProject} />
          </div>
          <div className="form-group">
            <label htmlFor="project-description">Project Description</label>
            <textarea className="form-control" rows="3" ref="desc" type="text" placeholder="Project Description" onChange={this.setProject} />
          </div>
          <button className="btn btn-primary" type="submit">Submit Project</button>
          <Link className="btn" to='/projects'>Back</Link>

        </form>
      </div>
    )
  }
}
