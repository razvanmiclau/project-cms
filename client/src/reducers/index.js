import { combineReducers } from 'redux-immutable';
// Import Reducers
import projects from './projects';
import { reducer as form } from 'redux-form/immutable';

// Combine all reducers
export default combineReducers({
  projects,
  form
});
