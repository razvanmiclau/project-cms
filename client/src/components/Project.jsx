import React, { PureComponent } from 'react';

export default class Project extends PureComponent {

  render() {
    const { _id, project_name, project_desc, deleteProject} = this.props;
    return(
      <div className="wrapper">
        <h3>{project_name}</h3>
        <p>{project_desc}</p>
        <button className="btn btn-danger" onClick={() => deleteProject(_id)}>Remove Project</button>
      </div>
    )
  }
}
