import React, { PureComponent } from 'react';

export default class Project extends PureComponent {

  render() {
    const { _id, index, project_name, project_desc, project_pic, deleteProject, displayProjectDetails} = this.props;
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>{project_name}</h3>
          <img className="img-rounded" src={project_pic} alt={project_name} />
          <hr/>
          <p>{project_desc}</p>
        </div>
        <div className="panel-footer">
          <button className="btn btn-danger" onClick={() => deleteProject(_id)}>Remove Project</button>
          <button className="btn btn-primary" onClick={() => displayProjectDetails(index)}>Show</button>
        </div>
      </div>
    )
  }
}
