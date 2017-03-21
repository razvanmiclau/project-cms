import Immutable from 'immutable';
import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL
} from '../constants/projects';

// Initial State -> empty map.
const initialState = Immutable.Map();

// Reducers -> new state
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS: {
      return state.merge({ list: action.projects });
    }

    case GET_PROJECTS_FAIL: {
      return state.clear();
    }
      
    default:
      return state;
  }
}
