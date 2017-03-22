import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
  GET_PROJECTS
} from '../constants/projects';
import { getProjectsSuccess, getProjectsFail } from '../actions/projects';

// FetchProjects Method taken from ProjectsContainer.
const headers = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

const fetchProjects = () => {
  return fetch('http://localhost:8080/projects', headers)
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

function* watchGetProjects () {
  yield takeLatest(GET_PROJECTS, getProjects);
}

export {
  watchGetProjects
}
