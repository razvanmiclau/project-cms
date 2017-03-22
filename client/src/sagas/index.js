// Import saga watchers
import {
  watchGetProjects,
  watchDeleteProject
} from './projects';

export default function* rootSaga () {
  yield [
    watchGetProjects(),
    watchDeleteProject()
  ];
}
