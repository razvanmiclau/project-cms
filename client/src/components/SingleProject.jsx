import React, { PureComponent } from 'react';

export default class SingleProject extends PureComponent {
  render() {
    const { _id, project_name, project_desc, project_pic } = this.props.project;
    return(
      <div className="modal fade" id="project-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">{`${project_name}`}</h4>
            </div>
            <div className="modal-body">
              <div>
                <img src={project_pic} className="img-responsive img-big" />
              </div> <hr />
              <p>
                {project_desc}
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
