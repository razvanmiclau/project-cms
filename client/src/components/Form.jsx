import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';

class Form extends PureComponent {
  render() {
    //const { image, uploadImage } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="project-title">Project Title</label>
          <Field
            name="project_name"
            type="text"
            className="form-control"
            component="input"
            placeholder="Project Title" />
        </div>

        <div className="form-group">
          <label htmlFor="project-description">Project Description</label>
          <Field
            name="project_desc"
            type="text"
            className="form-control"
            rows="3"
            component="textarea"
            placeholder="Project Title" />
        </div>

        <button className="btn btn-primary" type="submit">Submit Project</button>
        <Link className="btn" to='/projects'>Back</Link>
      </form>
    )
  }
}

export default reduxForm({ form: 'project' })(Form);

// <div className="form-group">
//   <label htmlFor="project-url">Image URL</label>
//   <input type="file" onClick={uploadImage} />
// </div>
// <div className="form-group">
//   <img src={image} id="preview" className="img-responsive img-upload" />
// </div>
