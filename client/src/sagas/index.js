// Import saga watchers
import {
  watchGetProjects
} from './projects';

export default function* rootSaga () {
  yield [
    watchGetProjects()
  ];
}
