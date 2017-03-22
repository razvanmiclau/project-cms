import Immutable from 'immutable';
import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL
} from '../constants/projects';

// Initial State -> empty map.
const initialState = Immutable.Map();

// Reducers -> new state
export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PROJECT_SUCCESS:
    case GET_PROJECTS_SUCCESS: {
      return state.merge({ list: action.projects });
    }

    case DELETE_PROJECT_FAIL:
    case GET_PROJECTS_FAIL: {
      return state.clear();
    }

    default:
      return state;
  }
}
