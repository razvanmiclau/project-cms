import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import {
  GET_PROJECTS,
  DELETE_PROJECT
} from '../constants/projects';
import { getProjectsSuccess, getProjectsFail, deleteProjectSuccess, deleteProjectFail } from '../actions/projects';

const selectedProjects = (state) => {
  return state.getIn(['projects', 'list']).toJS();
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

// Saga Watchers
function* watchGetProjects () {
  yield takeLatest(GET_PROJECTS, getProjects);
}

function* watchDeleteProject () {
  yield takeLatest(DELETE_PROJECT, deleteProject);
}

export {
  watchGetProjects,
  watchDeleteProject
}
