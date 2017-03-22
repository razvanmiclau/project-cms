// Import Constants
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
} from '../constants/projects';

// GET_PROJECTS dispatch the fetchProjects function to retrieve projects from server.
const getProjects = () => {
  return {
    type: GET_PROJECTS
  }
}

/* GET_PROJECTS_SUCCESS dispatch after fetchProjects
 * adds a new state to the store.
*/
const getProjectsSuccess = (projects) => {
  return {
    type: GET_PROJECTS_SUCCESS,
    projects
  }
}

/* GET_PROJECTS_FAIL dispatch after fetchProjects
 * failure actions should the fetchProjects function fail.
*/
const getProjectsFail = () => {
  return {
    type: GET_PROJECTS_FAIL
  }
}

const deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id
  }
}

const deleteProjectSuccess = (projects) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    projects
  }
}

const deleteProjectFail = () => {
  return {
    type: DELETE_PROJECT_FAIL
  }
}

export {
  getProjects,
  getProjectsSuccess,
  getProjectsFail,
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFail,
};
