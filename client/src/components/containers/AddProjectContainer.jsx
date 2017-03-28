import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import filestack from 'filestack-js';

import Form from '../Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * projectsActionCreators from '../../actions/projects';


const fileUploader = filestack.init("At2eWk3cXTt2E43Ypq9iXz");

export default class AddProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { newProject: {}};
    this.submit = this.submit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.projectsActionCreators.addProject();
  }

  uploadImage(e) {
    e.preventDefault();
    fileUploader.pick({
      accept: ['image/*'],
      transformOptions: {
        maxDimensions: [600,400],
        transformations: { crop: true, sepia: true }
      },
      preferLinkOverStore: true,
      onFileUploadProgress: (file, progressEvent) => {
        console.log(JSON.stringify(progressEvent))
      },
      onFileUploadFinished: file => {
        console.log(file + ' has been succesfully uploaded.')
      }
    })
    .then(result => {
      console.log(JSON.stringify(result.filesUploaded[0].url));
      $('#preview').attr('src', result.filesUploaded[0].url)
    })
  }

  render() {
    return(
      <div className="container">
        <Form handleSubmit={this.submit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    projectActions: bindActionCreators(projectsActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectContainer);
