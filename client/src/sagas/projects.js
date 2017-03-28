import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import {
  GET_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT
} from '../constants/projects';
import { getProjectsSuccess, getProjectsFail, deleteProjectSuccess, deleteProjectFail, addProjectSuccess, addProjectFail } from '../actions/projects';

const selectedProjects = (state) => {
  return state.getIn(['projects', 'list']).toJS();
}

const projectForm = (state) => {
  return state.getIn(['form', 'project']).toJS();
}

const fetchProjects = () => {
  return fetch('http://localhost:8080/projects', {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
}

const deleteProjectOnServer = (id) => {
  return fetch(`http://localhost:8080/projects/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'DELETE',
  })
  .then(res => res.json())
}

const addProjectToServer = (project) => {
  return fetch('http://localhost:8080/projects', {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify(project)
  }).
  then(res => {
    if (res.status === 200) return res.json();
    throw res;
  });
}

// Saga Functions
function* getProjects () {
  try {
    const projects = yield call(fetchProjects);
    yield put(getProjectsSuccess(projects));
  } catch (err) {
    yield put(getProjectsFail());
  }
}

function* deleteProject (action) {
  const { id } = action;
  const projects = yield select(selectedProjects);
  try {
    yield call(deleteProjectOnServer, id);
    yield put(deleteProjectSuccess(projects.filter(project => project._id !== id)));
  } catch (err) {
    yield put(deleteProjectFail());
  }
}

function* addProject () {
  const project = yield select(projectForm);
  const newProject = Object.assign({}, {}, project.values);
  try {
    const result = yield call(addProjectToServer, newProject);
    yield put(addProjectSuccess());
  } catch (err) {
    console.log(err);
  }
}

// Saga Watchers
function* watchGetProjects () {
  yield takeLatest(GET_PROJECTS, getProjects);
}

function* watchDeleteProject () {
  yield takeLatest(DELETE_PROJECT, deleteProject);
}

function* watchAddProject () {
  yield takeLatest(ADD_PROJECT, addProject);
}

export {
  watchGetProjects,
  watchDeleteProject,
  watchAddProject
}
