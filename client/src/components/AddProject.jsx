import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = { newProject: {}};
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
        <form onSubmit={this.submit.bind(this)}>
          <input ref="title" type="text" placeholder="Project Title" onChange={this.setProject.bind(this)} />
          <input ref="url" type="text" placeholder="Enter IMG URL" onChange={this.setProject.bind(this)} />
          <textarea ref="desc" type="text" placeholder="Project Description" onChange={this.setProject.bind(this)} />
          <button type="submit">Submit Project</button>
        </form>
        <Link to='/projects'>Back</Link>
      </div>
    )
  }
}
