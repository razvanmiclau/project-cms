// Import saga watchers
import {
  watchGetProjects,
  watchDeleteProject,
  watchAddProject
} from './projects';

export default function* rootSaga () {
  yield [
    watchGetProjects(),
    watchDeleteProject(),
    watchAddProject()
  ];
}
