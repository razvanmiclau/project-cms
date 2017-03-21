import { combineReducers } from 'redux-immutable';
// Import Reducers
import projects from './projects';

// Combine all reducers
export default combineReducers({
  projects
});
