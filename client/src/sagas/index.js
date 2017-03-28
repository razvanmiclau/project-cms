// Import saga watchers
import {
  watchGetProjects,
  watchDeleteProject,
  watchAddProject,
  watchUploadImage,
} from './projects';

export default function* rootSaga () {
  yield [
    watchGetProjects(),
    watchDeleteProject(),
    watchAddProject(),
    watchUploadImage(),
  ];
}
